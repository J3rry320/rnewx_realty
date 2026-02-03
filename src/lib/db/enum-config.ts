export enum UserRole {
  ADMIN = 1,
  CUSTOMER = 2,
  BUILDER = 3,
  AGENT = 4,
  CMS_MANAGER = 5,
}

export enum UserStatus {
  ACTIVE = 1,
  INVITED = 2,
  SUSPENDED = 3,
  ARCHIVED = 4,
}

export enum AuthProvider {
  EMAIL = 1,
  GOOGLE = 2,
  PHONE = 3,
  FIREBASE = 4,
}

export enum RequestStatus {
  NEW = 1,
  REVIEWING = 2,
  APPROVED = 3,
  IN_PROGRESS = 4,
  ON_HOLD = 5,
  COMPLETED = 6,
  REJECTED = 7,
  CANCELLED = 8,
}

export enum RequestPriority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  URGENT = 4,
}

export enum RenovationScope {
  FULL = 1,
  KITCHEN = 2,
  BATHROOM = 3,
  INTERIOR = 4,
  EXTERIOR = 5,
  ADDITION = 6,
  OTHER = 7,
}

export enum ListingType {
  PLOT = 1,
  HOUSE = 2,
}

export enum ListingStatus {
  DRAFT = 1,
  ACTIVE = 2,
  UNDER_OFFER = 3,
  SOLD = 4,
  ARCHIVED = 5,
}

export enum InquiryType {
  INFO = 1,
  VISIT = 2,
  BUY = 3,
}

export enum InquiryStatus {
  NEW = 1,
  CONTACTED = 2,
  SCHEDULED = 3,
  CLOSED = 4,
  LOST = 5,
}

export enum ContentStatus {
  DRAFT = 1,
  PUBLISHED = 2,
  ARCHIVED = 3,
}

export enum ContentType {
  PAGE = 1,
  ARTICLE = 2,
  FAQ = 3,
  POLICY = 4,
  UPDATE = 5,
}

export enum MediaType {
  IMAGE = 1,
  VIDEO = 2,
  DOCUMENT = 3,
}

export enum MediaSource {
  USER_UPLOAD = 1,
  CONTRACTOR_UPLOAD = 2,
  SYSTEM = 3,
}

export enum ProjectType {
  BUILD = 1,
  RENOVATION = 2,
}

export enum CRMEntityType {
  USER = 1,
  BUILD_REQUEST = 2,
  RENOVATION_REQUEST = 3,
  LISTING = 4,
  INQUIRY = 5,
  CONTENT = 6,
}

export const ENUMS = {
  userRole: {
    values: [
      UserRole.ADMIN,
      UserRole.CUSTOMER,
      UserRole.BUILDER,
      UserRole.AGENT,
      UserRole.CMS_MANAGER,
    ],
    labels: {
      [UserRole.ADMIN]: "Admin",
      [UserRole.CUSTOMER]: "Customer",
      [UserRole.BUILDER]: "Builder",
      [UserRole.AGENT]: "Agent",
      [UserRole.CMS_MANAGER]: "CMS Manager",
    },
  },
  userStatus: {
    values: [UserStatus.ACTIVE, UserStatus.INVITED, UserStatus.SUSPENDED, UserStatus.ARCHIVED],
    labels: {
      [UserStatus.ACTIVE]: "Active",
      [UserStatus.INVITED]: "Invited",
      [UserStatus.SUSPENDED]: "Suspended",
      [UserStatus.ARCHIVED]: "Archived",
    },
  },
  authProvider: {
    values: [AuthProvider.EMAIL, AuthProvider.GOOGLE, AuthProvider.PHONE, AuthProvider.FIREBASE],
    labels: {
      [AuthProvider.EMAIL]: "Email",
      [AuthProvider.GOOGLE]: "Google",
      [AuthProvider.PHONE]: "Phone",
      [AuthProvider.FIREBASE]: "Firebase",
    },
  },
  requestStatus: {
    values: [
      RequestStatus.NEW,
      RequestStatus.REVIEWING,
      RequestStatus.APPROVED,
      RequestStatus.IN_PROGRESS,
      RequestStatus.ON_HOLD,
      RequestStatus.COMPLETED,
      RequestStatus.REJECTED,
      RequestStatus.CANCELLED,
    ],
    labels: {
      [RequestStatus.NEW]: "New",
      [RequestStatus.REVIEWING]: "Reviewing",
      [RequestStatus.APPROVED]: "Approved",
      [RequestStatus.IN_PROGRESS]: "In Progress",
      [RequestStatus.ON_HOLD]: "On Hold",
      [RequestStatus.COMPLETED]: "Completed",
      [RequestStatus.REJECTED]: "Rejected",
      [RequestStatus.CANCELLED]: "Cancelled",
    },
  },
  requestPriority: {
    values: [RequestPriority.LOW, RequestPriority.MEDIUM, RequestPriority.HIGH, RequestPriority.URGENT],
    labels: {
      [RequestPriority.LOW]: "Low",
      [RequestPriority.MEDIUM]: "Medium",
      [RequestPriority.HIGH]: "High",
      [RequestPriority.URGENT]: "Urgent",
    },
  },
  renovationScope: {
    values: [
      RenovationScope.FULL,
      RenovationScope.KITCHEN,
      RenovationScope.BATHROOM,
      RenovationScope.INTERIOR,
      RenovationScope.EXTERIOR,
      RenovationScope.ADDITION,
      RenovationScope.OTHER,
    ],
    labels: {
      [RenovationScope.FULL]: "Full",
      [RenovationScope.KITCHEN]: "Kitchen",
      [RenovationScope.BATHROOM]: "Bathroom",
      [RenovationScope.INTERIOR]: "Interior",
      [RenovationScope.EXTERIOR]: "Exterior",
      [RenovationScope.ADDITION]: "Addition",
      [RenovationScope.OTHER]: "Other",
    },
  },
  listingType: {
    values: [ListingType.PLOT, ListingType.HOUSE],
    labels: {
      [ListingType.PLOT]: "Plot",
      [ListingType.HOUSE]: "House",
    },
  },
  listingStatus: {
    values: [
      ListingStatus.DRAFT,
      ListingStatus.ACTIVE,
      ListingStatus.UNDER_OFFER,
      ListingStatus.SOLD,
      ListingStatus.ARCHIVED,
    ],
    labels: {
      [ListingStatus.DRAFT]: "Draft",
      [ListingStatus.ACTIVE]: "Active",
      [ListingStatus.UNDER_OFFER]: "Under Offer",
      [ListingStatus.SOLD]: "Sold",
      [ListingStatus.ARCHIVED]: "Archived",
    },
  },
  inquiryType: {
    values: [InquiryType.INFO, InquiryType.VISIT, InquiryType.BUY],
    labels: {
      [InquiryType.INFO]: "Info",
      [InquiryType.VISIT]: "Visit",
      [InquiryType.BUY]: "Buy",
    },
  },
  inquiryStatus: {
    values: [
      InquiryStatus.NEW,
      InquiryStatus.CONTACTED,
      InquiryStatus.SCHEDULED,
      InquiryStatus.CLOSED,
      InquiryStatus.LOST,
    ],
    labels: {
      [InquiryStatus.NEW]: "New",
      [InquiryStatus.CONTACTED]: "Contacted",
      [InquiryStatus.SCHEDULED]: "Scheduled",
      [InquiryStatus.CLOSED]: "Closed",
      [InquiryStatus.LOST]: "Lost",
    },
  },
  contentStatus: {
    values: [ContentStatus.DRAFT, ContentStatus.PUBLISHED, ContentStatus.ARCHIVED],
    labels: {
      [ContentStatus.DRAFT]: "Draft",
      [ContentStatus.PUBLISHED]: "Published",
      [ContentStatus.ARCHIVED]: "Archived",
    },
  },
  contentType: {
    values: [ContentType.PAGE, ContentType.ARTICLE, ContentType.FAQ, ContentType.POLICY, ContentType.UPDATE],
    labels: {
      [ContentType.PAGE]: "Page",
      [ContentType.ARTICLE]: "Article",
      [ContentType.FAQ]: "FAQ",
      [ContentType.POLICY]: "Policy",
      [ContentType.UPDATE]: "Update",
    },
  },
  mediaType: {
    values: [MediaType.IMAGE, MediaType.VIDEO, MediaType.DOCUMENT],
    labels: {
      [MediaType.IMAGE]: "Image",
      [MediaType.VIDEO]: "Video",
      [MediaType.DOCUMENT]: "Document",
    },
  },
  mediaSource: {
    values: [MediaSource.USER_UPLOAD, MediaSource.CONTRACTOR_UPLOAD, MediaSource.SYSTEM],
    labels: {
      [MediaSource.USER_UPLOAD]: "User Upload",
      [MediaSource.CONTRACTOR_UPLOAD]: "Contractor Upload",
      [MediaSource.SYSTEM]: "System",
    },
  },
  projectType: {
    values: [ProjectType.BUILD, ProjectType.RENOVATION],
    labels: {
      [ProjectType.BUILD]: "Build",
      [ProjectType.RENOVATION]: "Renovation",
    },
  },
  crmEntityType: {
    values: [
      CRMEntityType.USER,
      CRMEntityType.BUILD_REQUEST,
      CRMEntityType.RENOVATION_REQUEST,
      CRMEntityType.LISTING,
      CRMEntityType.INQUIRY,
      CRMEntityType.CONTENT,
    ],
    labels: {
      [CRMEntityType.USER]: "User",
      [CRMEntityType.BUILD_REQUEST]: "Build Request",
      [CRMEntityType.RENOVATION_REQUEST]: "Renovation Request",
      [CRMEntityType.LISTING]: "Listing",
      [CRMEntityType.INQUIRY]: "Inquiry",
      [CRMEntityType.CONTENT]: "Content",
    },
  },
} as const;

export const DEFAULT_CURRENCY = "USD";
