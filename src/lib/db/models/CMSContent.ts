import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { ContentStatus, ContentType, ENUMS } from "@/lib/db/enum-config";
import { seoSchema, SeoMeta } from "@/lib/db/schemas";

export interface ContentBlock {
  type: string;
  data: Record<string, unknown>;
}

export interface CMSContent {
  slug: string;
  title: string;
  excerpt?: string;
  body?: string;
  blocks?: ContentBlock[];
  locale?: string;
  status: ContentStatus;
  contentType: ContentType;
  tags?: string[];
  seo?: SeoMeta;
  author?: Types.ObjectId;
  publishedAt?: Date;
  updatedBy?: Types.ObjectId;
}

const contentBlockSchema = new Schema<ContentBlock>(
  {
    type: { type: String, required: true, trim: true },
    data: { type: Schema.Types.Mixed, default: {} },
  },
  { _id: false }
);

const cmsContentSchema = new Schema<CMSContent>(
  {
    slug: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, trim: true },
    body: { type: String },
    blocks: { type: [contentBlockSchema], default: [] },
    locale: { type: String, trim: true, default: "en" },
    status: { type: Number, enum: ENUMS.contentStatus.values, default: ContentStatus.DRAFT },
    contentType: { type: Number, enum: ENUMS.contentType.values, default: ContentType.PAGE },
    tags: { type: [String], default: [] },
    seo: { type: seoSchema },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    publishedAt: { type: Date },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

cmsContentSchema.index({ slug: 1, locale: 1 }, { unique: true });
cmsContentSchema.index({ status: 1, contentType: 1, publishedAt: -1 });
cmsContentSchema.index({ tags: 1 });

export const CMSContentModel = createModel<CMSContent>("CMSContent", cmsContentSchema);
