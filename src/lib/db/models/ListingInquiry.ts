import { Schema, Types } from "mongoose";
import { createModel } from "@/lib/db/utils";
import { DEFAULT_CURRENCY, ENUMS, InquiryStatus, InquiryType } from "@/lib/db/enum-config";
import { contactSchema, statusHistorySchema, ContactInfo, StatusHistoryItem } from "@/lib/db/schemas";

export interface InquiryOffer {
  amount?: number;
  currency?: string;
  conditions?: string;
}

export interface ListingInquiry {
  listing: Types.ObjectId;
  requester?: Types.ObjectId;
  type: InquiryType;
  status: InquiryStatus;
  contact?: ContactInfo;
  message?: string;
  preferredVisitDate?: Date;
  offer?: InquiryOffer;
  assignedTo?: Types.ObjectId;
  source?: string;
  statusHistory?: StatusHistoryItem[];
}

const listingInquirySchema = new Schema<ListingInquiry>(
  {
    listing: { type: Schema.Types.ObjectId, ref: "Listing", required: true, index: true },
    requester: { type: Schema.Types.ObjectId, ref: "User", index: true },
    type: { type: Number, enum: ENUMS.inquiryType.values, default: InquiryType.INFO },
    status: { type: Number, enum: ENUMS.inquiryStatus.values, default: InquiryStatus.NEW },
    contact: { type: contactSchema },
    message: { type: String, trim: true },
    preferredVisitDate: { type: Date },
    offer: {
      amount: { type: Number },
      currency: { type: String, default: DEFAULT_CURRENCY },
      conditions: { type: String, trim: true },
    },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", index: true },
    source: { type: String, trim: true },
    statusHistory: { type: [statusHistorySchema], default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

listingInquirySchema.index({ status: 1, createdAt: -1 });
listingInquirySchema.index({ type: 1, status: 1 });
listingInquirySchema.index({ assignedTo: 1, createdAt: -1 });

export const ListingInquiryModel = createModel<ListingInquiry>("ListingInquiry", listingInquirySchema);
