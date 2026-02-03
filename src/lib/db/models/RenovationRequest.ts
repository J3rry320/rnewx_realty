import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { DEFAULT_CURRENCY, ENUMS, RenovationScope, RequestPriority, RequestStatus } from "@/lib/db/enum-config";
import { addressSchema, contactSchema, geoPointSchema, statusHistorySchema, Address, ContactInfo, GeoPoint, StatusHistoryItem } from "@/lib/db/schemas";

export interface PropertyDetails {
  address?: Address;
  geo?: GeoPoint;
  propertyType?: string;
  yearBuilt?: number;
  areaSqFt?: number;
  areaSqM?: number;
  occupied?: boolean;
}

export interface RenovationBudget {
  min?: number;
  max?: number;
  currency?: string;
}

export interface RenovationRequest {
  requestCode?: string;
  requester?: Types.ObjectId;
  contact?: ContactInfo;
  status: RequestStatus;
  priority: RequestPriority;
  scope: RenovationScope;
  property?: PropertyDetails;
  areas?: string[];
  budget?: RenovationBudget;
  desiredStartDate?: Date;
  desiredCompletionDate?: Date;
  notes?: string;
  assignedTo?: Types.ObjectId;
  statusHistory?: StatusHistoryItem[];
  media?: Types.ObjectId[];
}

const renovationRequestSchema = new Schema<RenovationRequest>(
  {
    requestCode: { type: String, trim: true, unique: true, sparse: true },
    requester: { type: Schema.Types.ObjectId, ref: "User", index: true },
    contact: { type: contactSchema },
    status: { type: Number, enum: ENUMS.requestStatus.values, default: RequestStatus.NEW },
    priority: { type: Number, enum: ENUMS.requestPriority.values, default: RequestPriority.MEDIUM },
    scope: { type: Number, enum: ENUMS.renovationScope.values, default: RenovationScope.FULL },
    property: {
      address: { type: addressSchema },
      geo: { type: geoPointSchema },
      propertyType: { type: String, trim: true },
      yearBuilt: { type: Number },
      areaSqFt: { type: Number },
      areaSqM: { type: Number },
      occupied: { type: Boolean, default: false },
    },
    areas: { type: [String], default: [] },
    budget: {
      min: { type: Number },
      max: { type: Number },
      currency: { type: String, default: DEFAULT_CURRENCY },
    },
    desiredStartDate: { type: Date },
    desiredCompletionDate: { type: Date },
    notes: { type: String, trim: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", index: true },
    statusHistory: { type: [statusHistorySchema], default: [] },
    media: [{ type: Schema.Types.ObjectId, ref: "MediaAsset" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

renovationRequestSchema.index({ status: 1, createdAt: -1 });
renovationRequestSchema.index({ scope: 1, createdAt: -1 });
renovationRequestSchema.index({ "property.geo": "2dsphere" });

export const RenovationRequestModel = createModel<RenovationRequest>("RenovationRequest", renovationRequestSchema);
