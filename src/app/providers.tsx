"use client";

import { UserProvider } from "@/lib/auth/UserContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
