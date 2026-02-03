import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { DEFAULT_CURRENCY, ENUMS, ListingStatus, ListingType } from "@/lib/db/enum-config";
import { addressSchema, geoPointSchema, statusHistorySchema, Address, GeoPoint, StatusHistoryItem } from "@/lib/db/schemas";

export interface ListingPricing {
  price?: number;
  currency?: string;
  negotiable?: boolean;
  hoaMonthly?: number;
}

export interface ListingDetails {
  bedrooms?: number;
  bathrooms?: number;
  floors?: number;
  areaSqFt?: number;
  areaSqM?: number;
  lotAreaSqFt?: number;
  lotAreaSqM?: number;
  yearBuilt?: number;
  parkingSpots?: number;
  furnishing?: string;
  condition?: string;
}

export interface ListingStats {
  views?: number;
  favorites?: number;
  inquiries?: number;
}

export interface Listing {
  title?: string;
  slug?: string;
  description?: string;
  listingType: ListingType;
  status: ListingStatus;
  owner?: Types.ObjectId;
  address?: Address;
  geo?: GeoPoint;
  pricing?: ListingPricing;
  details?: ListingDetails;
  media?: Types.ObjectId[];
  tags?: string[];
  publishedAt?: Date;
  statusHistory?: StatusHistoryItem[];
  stats?: ListingStats;
}

const listingSchema = new Schema<Listing>(
  {
    title: { type: String, trim: true },
    slug: { type: String, trim: true },
    description: { type: String, trim: true },
    listingType: { type: Number, enum: ENUMS.listingType.values, required: true },
    status: { type: Number, enum: ENUMS.listingStatus.values, default: ListingStatus.DRAFT },
    owner: { type: Schema.Types.ObjectId, ref: "User", index: true },
    address: { type: addressSchema },
    geo: { type: geoPointSchema },
    pricing: {
      price: { type: Number },
      currency: { type: String, default: DEFAULT_CURRENCY },
      negotiable: { type: Boolean, default: true },
      hoaMonthly: { type: Number },
    },
    details: {
      bedrooms: { type: Number },
      bathrooms: { type: Number },
      floors: { type: Number },
      areaSqFt: { type: Number },
      areaSqM: { type: Number },
      lotAreaSqFt: { type: Number },
      lotAreaSqM: { type: Number },
      yearBuilt: { type: Number },
      parkingSpots: { type: Number },
      furnishing: { type: String, trim: true },
      condition: { type: String, trim: true },
    },
    media: [{ type: Schema.Types.ObjectId, ref: "MediaAsset" }],
    tags: { type: [String], default: [] },
    publishedAt: { type: Date },
    statusHistory: { type: [statusHistorySchema], default: [] },
    stats: {
      views: { type: Number, default: 0 },
      favorites: { type: Number, default: 0 },
      inquiries: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

listingSchema.index({ slug: 1 }, { unique: true, sparse: true });
listingSchema.index({ status: 1, createdAt: -1 });
listingSchema.index({ listingType: 1, status: 1 });
listingSchema.index({ "pricing.price": 1 });
listingSchema.index({ geo: "2dsphere" });

export const ListingModel = createModel<Listing>("Listing", listingSchema);
