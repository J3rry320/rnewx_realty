import { UserRole } from "@/lib/db/enum-config";

export const hasAnyRole = (
  userRoles: UserRole[] | undefined | null,
  required: UserRole[] | undefined | null
): boolean => {
  if (!required || required.length === 0) {
    return true;
  }

  if (!userRoles || userRoles.length === 0) {
    return false;
  }

  return required.some((role) => userRoles.includes(role));
};
