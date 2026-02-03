import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { ENUMS, ProjectType } from "@/lib/db/enum-config";

export interface ConstructionUpdate {
  projectType: ProjectType;
  projectModel: "BuildRequest" | "RenovationRequest";
  project: Types.ObjectId;
  date: Date;
  summary?: string;
  workCompleted?: string;
  progressPct?: number;
  media?: Types.ObjectId[];
  createdBy?: Types.ObjectId;
  verifiedBy?: Types.ObjectId;
}

const constructionUpdateSchema = new Schema<ConstructionUpdate>(
  {
    projectType: { type: Number, enum: ENUMS.projectType.values, required: true },
    projectModel: {
      type: String,
      enum: ["BuildRequest", "RenovationRequest"],
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      refPath: "projectModel",
      required: true,
      index: true,
    },
    date: { type: Date, required: true },
    summary: { type: String, trim: true },
    workCompleted: { type: String, trim: true },
    progressPct: { type: Number, min: 0, max: 100 },
    media: [{ type: Schema.Types.ObjectId, ref: "MediaAsset" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    verifiedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

constructionUpdateSchema.index({ project: 1, date: -1 });
constructionUpdateSchema.index({ projectType: 1, date: -1 });
constructionUpdateSchema.index({ createdBy: 1, createdAt: -1 });

export const ConstructionUpdateModel = createModel<ConstructionUpdate>(
  "ConstructionUpdate",
  constructionUpdateSchema
);
