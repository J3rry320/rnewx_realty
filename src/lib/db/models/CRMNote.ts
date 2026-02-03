import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { CRMEntityType, ENUMS } from "@/lib/db/enum-config";

export interface CRMNote {
  entityType: CRMEntityType;
  entityModel:
    | "User"
    | "BuildRequest"
    | "RenovationRequest"
    | "Listing"
    | "ListingInquiry"
    | "CMSContent";
  entityId: Types.ObjectId;
  note: string;
  tags?: string[];
  pinned?: boolean;
  createdBy?: Types.ObjectId;
}

const crmNoteSchema = new Schema<CRMNote>(
  {
    entityType: { type: Number, enum: ENUMS.crmEntityType.values, required: true },
    entityModel: {
      type: String,
      enum: ["User", "BuildRequest", "RenovationRequest", "Listing", "ListingInquiry", "CMSContent"],
      required: true,
    },
    entityId: {
      type: Schema.Types.ObjectId,
      refPath: "entityModel",
      required: true,
      index: true,
    },
    note: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    pinned: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

crmNoteSchema.index({ entityType: 1, entityId: 1, createdAt: -1 });
crmNoteSchema.index({ tags: 1 });

export const CRMNoteModel = createModel<CRMNote>("CRMNote", crmNoteSchema);
