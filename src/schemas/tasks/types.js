import {
  PRODUCT_TYPE_ENUMS,
  PRODUCT_TYPE_ENUM_NAMES,
} from '../products/types/';

const WIDGET_TYPES_ENUMS = [
  'home',
  ...PRODUCT_TYPE_ENUMS,
  'up-selling',
  'cross-selling',
];
const WIDGET_TYPES_ENUM_NAMES = [
  'Home',
  ...PRODUCT_TYPE_ENUM_NAMES,
  'Up-selling',
  'Cross-selling',
];

export { WIDGET_TYPES_ENUMS, WIDGET_TYPES_ENUM_NAMES };
