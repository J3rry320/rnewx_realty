import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { AuthProvider, ENUMS, UserRole, UserStatus } from "@/lib/db/enum-config";
import { addressSchema, Address } from "@/lib/db/schemas";

export interface UserName {
  first?: string;
  last?: string;
  full?: string;
}

export interface AuthInfo {
  provider?: AuthProvider;
  uid?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
}

export interface User {
  name?: UserName;
  email?: string;
  phone?: string;
  roles: UserRole[];
  primaryRole?: UserRole;
  status: UserStatus;
  auth?: AuthInfo;
  avatarUrl?: string;
  locale?: string;
  timezone?: string;
  addresses?: Address[];
  lastLoginAt?: Date;
  createdBy?: Types.ObjectId;
}

const userSchema = new Schema<User>(
  {
    name: {
      first: { type: String, trim: true },
      last: { type: String, trim: true },
      full: { type: String, trim: true },
    },
    email: { type: String, trim: true, lowercase: true, unique: true, sparse: true },
    phone: { type: String, trim: true, unique: true, sparse: true },
    roles: {
      type: [Number],
      enum: ENUMS.userRole.values,
      default: [UserRole.CUSTOMER],
    },
    primaryRole: { type: Number, enum: ENUMS.userRole.values, default: UserRole.CUSTOMER },
    status: { type: Number, enum: ENUMS.userStatus.values, default: UserStatus.ACTIVE },
    auth: {
      provider: { type: Number, enum: ENUMS.authProvider.values },
      uid: { type: String, trim: true },
      emailVerified: { type: Boolean, default: false },
      phoneVerified: { type: Boolean, default: false },
    },
    avatarUrl: { type: String, trim: true },
    locale: { type: String, trim: true, default: "en" },
    timezone: { type: String, trim: true },
    addresses: { type: [addressSchema], default: [] },
    lastLoginAt: { type: Date },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.index({ email: 1 });
userSchema.index({ phone: 1 });
userSchema.index({ roles: 1, status: 1 });
userSchema.index({ "auth.provider": 1, "auth.uid": 1 }, { unique: true, sparse: true });
userSchema.index({ "name.full": "text", email: "text", phone: "text" });

export const UserModel = createModel<User>("User", userSchema);
