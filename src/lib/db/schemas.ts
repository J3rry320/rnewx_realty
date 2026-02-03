import { Schema, Types } from "mongoose";

export interface Address {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface GeoPoint {
  type: "Point";
  coordinates: [number, number];
}

export interface ContactInfo {
  name?: string;
  email?: string;
  phone?: string;
  preferredContactTime?: string;
}

export interface StatusHistoryItem {
  status: number;
  changedBy?: Types.ObjectId;
  note?: string;
  changedAt: Date;
}

export interface SeoMeta {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const addressSchema = new Schema<Address>(
  {
    line1: { type: String, trim: true },
    line2: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    postalCode: { type: String, trim: true },
    country: { type: String, trim: true },
  },
  { _id: false }
);

export const geoPointSchema = new Schema<GeoPoint>(
  {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number] },
  },
  { _id: false }
);

export const contactSchema = new Schema<ContactInfo>(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    preferredContactTime: { type: String, trim: true },
  },
  { _id: false }
);

export const statusHistorySchema = new Schema<StatusHistoryItem>(
  {
    status: { type: Number, required: true },
    changedBy: { type: Schema.Types.ObjectId, ref: "User" },
    note: { type: String, trim: true },
    changedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

export const seoSchema = new Schema<SeoMeta>(
  {
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
  },
  { _id: false }
);
