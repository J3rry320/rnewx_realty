"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { signOut as firebaseSignOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/auth/firebaseClient";
import { UserRole, UserStatus } from "@/lib/db/enum-config";
import { hasAnyRole } from "@/lib/auth/roles";

export type ClientUser = {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  roles: UserRole[];
  primaryRole?: UserRole;
  status: UserStatus;
  avatarUrl?: string;
};

type UserContextValue = {
  user: ClientUser | null;
  loading: boolean;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
  hasRole: (roles: UserRole[]) => boolean;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ClientUser | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/me", { credentials: "include" });
      if (!response.ok) {
        setUser(null);
        return;
      }
      const data = (await response.json()) as { user: ClientUser | null };
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchMe();
  }, [fetchMe]);

  const signOut = useCallback(async () => {
    try {
      const auth = getFirebaseAuth();
      await firebaseSignOut(auth);
    } catch {
      // ignore client sign out failures
    }

    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
  }, []);

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      loading,
      refresh: fetchMe,
      signOut,
      hasRole: (roles) => hasAnyRole(user?.roles, roles),
    }),
    [user, loading, fetchMe, signOut]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
