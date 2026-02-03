import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { DEFAULT_CURRENCY, ENUMS, RequestPriority, RequestStatus } from "@/lib/db/enum-config";
import { addressSchema, contactSchema, geoPointSchema, statusHistorySchema, Address, ContactInfo, GeoPoint, StatusHistoryItem } from "@/lib/db/schemas";

export interface PlotDetails {
  address?: Address;
  geo?: GeoPoint;
  plotNumber?: string;
  zoning?: string;
  ownershipDocUrl?: string;
  areaSqFt?: number;
  areaSqM?: number;
}

export interface HomeSpecs {
  floors?: number;
  bedrooms?: number;
  bathrooms?: number;
  totalAreaSqFt?: number;
  totalAreaSqM?: number;
  style?: string;
  parkingSpots?: number;
}

export interface BudgetRange {
  min?: number;
  max?: number;
  currency?: string;
}

export interface RequestNote {
  note: string;
  createdBy?: Types.ObjectId;
  createdAt?: Date;
}

export interface RequestStats {
  updateCount?: number;
  mediaCount?: number;
}

export interface BuildRequest {
  requestCode?: string;
  requester?: Types.ObjectId;
  contact?: ContactInfo;
  status: RequestStatus;
  priority: RequestPriority;
  budget?: BudgetRange;
  plot?: PlotDetails;
  homeSpecs?: HomeSpecs;
  requirements?: string[];
  preferredStartDate?: Date;
  desiredCompletionDate?: Date;
  assignedTo?: Types.ObjectId;
  statusHistory?: StatusHistoryItem[];
  media?: Types.ObjectId[];
  notes?: RequestNote[];
  stats?: RequestStats;
}

const requestNoteSchema = new Schema<RequestNote>(
  {
    note: { type: String, required: true, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const buildRequestSchema = new Schema<BuildRequest>(
  {
    requestCode: { type: String, trim: true, unique: true, sparse: true },
    requester: { type: Schema.Types.ObjectId, ref: "User", index: true },
    contact: { type: contactSchema },
    status: { type: Number, enum: ENUMS.requestStatus.values, default: RequestStatus.NEW },
    priority: { type: Number, enum: ENUMS.requestPriority.values, default: RequestPriority.MEDIUM },
    budget: {
      min: { type: Number },
      max: { type: Number },
      currency: { type: String, default: DEFAULT_CURRENCY },
    },
    plot: {
      address: { type: addressSchema },
      geo: { type: geoPointSchema },
      plotNumber: { type: String, trim: true },
      zoning: { type: String, trim: true },
      ownershipDocUrl: { type: String, trim: true },
      areaSqFt: { type: Number },
      areaSqM: { type: Number },
    },
    homeSpecs: {
      floors: { type: Number },
      bedrooms: { type: Number },
      bathrooms: { type: Number },
      totalAreaSqFt: { type: Number },
      totalAreaSqM: { type: Number },
      style: { type: String, trim: true },
      parkingSpots: { type: Number },
    },
    requirements: { type: [String], default: [] },
    preferredStartDate: { type: Date },
    desiredCompletionDate: { type: Date },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", index: true },
    statusHistory: { type: [statusHistorySchema], default: [] },
    media: [{ type: Schema.Types.ObjectId, ref: "MediaAsset" }],
    notes: { type: [requestNoteSchema], default: [] },
    stats: {
      updateCount: { type: Number, default: 0 },
      mediaCount: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

buildRequestSchema.index({ status: 1, createdAt: -1 });
buildRequestSchema.index({ priority: 1, createdAt: -1 });
buildRequestSchema.index({ "plot.geo": "2dsphere" });

export const BuildRequestModel = createModel<BuildRequest>("BuildRequest", buildRequestSchema);
