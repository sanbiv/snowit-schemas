import { DocumentData } from './firestore';
import { Dictionary, Options } from './utils';
import { AllValidDates } from './dateTimes';
import { ProviderName } from './providers';

export { ProviderName };
export type ProductType = 'skipass' | 'snowitcard' | 'bundle' | 'bundle~family-pack' | 'coupon' | 'rental' | 'rental~bike' | 'experience' | 'lesson' | 'insurance' | 'food' | 'parking' | 'hotel';
export type PriceRule = 'dynamic' | 'fixed' | 'dayByDay' | 'fixedPerDuration';
export type FixedPricePerDuration = 'day' | 'hour';
export type Barcode = 'simple' | 'reserved' | null;

type BaseProduct = DocumentData & {
  uid: string;
  barcode?: Barcode;
  options: Dictionary<ItemOption>;

  hasSlots?: boolean;
  hasVenues?: boolean;

  zoneUIDS: string[];
};

/**
 * Prodotto in products/
 */
export type Product = BaseProduct & {
  type: ProductType;
  providerName?: ProviderName;
  priceRule: PriceRule;

  availability: Availability | null;
  // parentUID?: string | null;

  tenant: string | null;
  districtUID: string;
  partnerUID: string;

  hasVariants?: boolean;
  variants?: ProductVariant[];

  zoneUIDS: string[];
};

/**
 * products/:productUID/variants
 */
export type ProductVariant = BaseProduct & {
  productParentUID: string | null;
  availability?: Pick<Availability, 'quantity' | 'quantityPerVenue' | 'quantitySlotsEnabled'> | null;
  available?: boolean;
}

export type ProductDetails = DocumentData & {
  type: string;
  html?: string;
  body?: string;
};

export type GalleryItem = DocumentData & {
  type: string;
  path: string;
  featured: boolean;
  videoId?: string | null;
  name: string;
  description?: string;
};

export type PriceRuleOptions = Options & {
  duration: FixedPricePerDuration;
}
export type Price = DocumentData & {
  rule: PriceRule;
  uid: string;
  price: number;
  externalPrice: number;
  discount: number | null;
  dynamicDiscount?: any;
  date?: Date | string | null;
  ruleOptions?: PriceRuleOptions;
  options?: Dictionary<ProductOptionPrice>;
  variants?: Dictionary<VariantPrice>;
};

/**
 * Opzione del prodotto
 */
export interface ItemOption {
  available: boolean;
  included: boolean;
  selected?: boolean;
  externalPrice: null | number;
  price: null | number;
  ignoreQuantity: null | boolean;
  addressRequired: boolean;
  name: string;
  cover?: string | null;
}

export type ProductOptionPrice = Pick<ItemOption, 'available' | 'included' | 'externalPrice' | 'price' | 'ignoreQuantity'>;

export type VariantPrice = Pick<Price, 'externalPrice' | 'price' | 'discount' | 'dynamicDiscount'> & {
  available?: boolean; // default true
}

export type Category = DocumentData & {
  name: string;
  documentsRequired: boolean;
  bornBefore: string | number;
  bornAfter: string | number;
  districtUID: string;
}

export type Slot = DocumentData & {
  uid: string;
  name?: string;
  externalUID?: string;
  quantity?: number;
}

export type Availability = DocumentData & {
  calendarEnabled?: boolean;
  quantity?: number;
  quantityPerVenue?: boolean;
  quantitySlotsEnabled?: boolean;
  onlyDates?: AllValidDates[] | null;
  dateInterval: {
    from: AllValidDates;
    to: AllValidDates;
  };
  exceptDates?: AllValidDates[] | null;
}

export interface AvailabilityInfo {
  price: number | null;
  available: boolean;
  slotUID?: string;
  slotName?: string;
  venueUID?: string;
  maxQuantity: number;
  leftovers: number | null;
  booked: number | null;

  external?: boolean;
  bookings?: Booking[];
}

export type Booking = DocumentData & {
  aggregated?: boolean;
  uid: null | string;
  providerName?: ProviderName;
  productUID: string;
  variantUID: string | null;
  partnerUID: string | null;
  date: string;
  year: number;
  month: number;
  day: number;
  dateTime?: null | Date;
  venueUID: string | null;
  slotUID: string | null;
  zoneUID: string | null;
  quantity: number;
  userUID: string | null;
  createdAt: Date;
  confirmed: boolean;
  durationDays?: number;
  dateRange?: [string, string];
  providerRequest?: Dictionary<any> | null;
  providerResponse?: Dictionary<any> | null;
  leftovers?: number;
  hasVariants: boolean;
}

export type AggregatedBooking = Pick<Booking, 'date' | 'variantUID' | 'partnerUID' | 'dateTime' | 'venueUID' | 'slotUID' | 'zoneUID' | 'quantity' | 'confirmed'> & {
  uid?: string | null;
  aggregated: true;
  bookingUIDS: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type RentalEquipments = 'ski' | 'snowboard' | 'other';
export type RentalBikeEquipments = 'bike' | 'other';
export type LessonType =  'ski' | 'bike' | 'other';