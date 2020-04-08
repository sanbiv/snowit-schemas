import { ProductType, RentalBikeEquipments, RentalEquipments, LessonType } from '../types/products';

export const PRODUCT_TYPES: ProductType[] = [
  'skipass',
  'insurance',
  'snowitcard',
  'coupon',
  'experience',
  'rental',
  'rental~bike',
  'bundle',
  'bundle~family-pack',
  'lesson',
  'food',
  'parking',
  'hotel',
];

export const RENTAL_EQUIPMENTS: RentalEquipments[] = ['ski', 'snowboard', 'other'];
export const RENTAL_BIKE_EQUIPMENTS: RentalBikeEquipments[] = ['bike', 'other'];
export const LESSON_TYPES: LessonType[] = ['ski', 'bike', 'other'];