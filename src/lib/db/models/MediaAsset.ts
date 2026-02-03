import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { ENUMS, MediaSource, MediaType } from "@/lib/db/enum-config";

export interface MediaAsset {
  url: string;
  storageKey?: string;
  kind: MediaType;
  source: MediaSource;
  mimeType?: string;
  sizeBytes?: number;
  width?: number;
  height?: number;
  durationSec?: number;
  caption?: string;
  tags?: string[];
  uploadedBy?: Types.ObjectId;
  meta?: Record<string, unknown>;
}

const mediaAssetSchema = new Schema<MediaAsset>(
  {
    url: { type: String, required: true, trim: true },
    storageKey: { type: String, trim: true },
    kind: { type: Number, enum: ENUMS.mediaType.values, required: true },
    source: { type: Number, enum: ENUMS.mediaSource.values, default: MediaSource.USER_UPLOAD },
    mimeType: { type: String, trim: true },
    sizeBytes: { type: Number },
    width: { type: Number },
    height: { type: Number },
    durationSec: { type: Number },
    caption: { type: String, trim: true },
    tags: { type: [String], default: [] },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User" },
    meta: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

mediaAssetSchema.index({ kind: 1, createdAt: -1 });
mediaAssetSchema.index({ uploadedBy: 1, createdAt: -1 });
mediaAssetSchema.index({ tags: 1 });

export const MediaAssetModel = createModel<MediaAsset>("MediaAsset", mediaAssetSchema);
