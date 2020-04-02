import keys from 'lodash/keys';
import map from 'lodash/map';
import isObject from 'lodash/isObject';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
// skypass, snowitcard, insurance, coupon, experience, rental, variant, lesson, bundle
const PRODUCT_TYPES = {
  skipass: {
    icon: { name: 'ticket', color: 'purple' },
    text: 'Skipass',
    value: 'skipass',
    key: 'skipass',
  },
  snowitcard: {
    icon: { name: 'id card', color: 'blue' },
    text: 'Snowitcard',
    value: 'snowitcard',
    key: 'snowitcard',
  },
  insurance: {
    icon: { name: 'magic', color: 'green' },
    text: 'Assicuraz.',
    value: 'insurance',
    key: 'insurance',
  },
  coupon: {
    icon: { name: 'tags', color: 'orange' },
    text: 'Coupon/Gift cards',
    value: 'coupon',
    key: 'coupon',
  },
  experience: {
    icon: { name: 'fly', color: 'pink' },
    text: 'Esperienze',
    value: 'experience',
    key: 'experience',
  },
  rental: {
    icon: { name: 'handshake', color: 'brown' },
    text: 'Noleggio',
    value: 'rental',
    key: 'rental',
  },
  lesson: {
    icon: { name: 'book', color: 'red' },
    text: 'Lezioni',
    value: 'lesson',
    key: 'lesson',
  },
  bundle: {
    icon: { name: 'gift', color: 'teal' },
    text: 'Bundle',
    value: 'bundle',
    key: 'bundle',
  },
  food: {
    icon: { name: 'food', color: 'red' },
    text: 'Food',
    value: 'food',
    key: 'food',
  },
  parking: {
    icon: { name: 'car', color: 'green' },
    text: 'Parking',
    value: 'parking',
    key: 'parking',
  },
  'bundle:family-pack': {
    icon: { name: 'users', color: 'orange' },
    text: 'Piano famiglia',
    value: 'bundle:family-pack',
    key: 'bundle:family-pack',
  },
  'rental:bike': {
    icon: { name: 'bicycle', color: 'red' },
    text: 'Noleggio bici',
    value: 'rental:bike',
    key: 'rental:bike',
  },
  hotel: {
    icon: { name: 'hotel', color: 'grey' },
    text: 'Hotel',
    value: 'hotel',
    key: 'hotel',
  },
  // variant: {
  //   icon: { name: 'tags', color: 'orange' },
  //   text: 'Coupon/Gift cards',
  //   value: 'coupon',
  //   key: 'coupon',
  // },
};

const DEFAULT_TYPE = 'skipass';

const PRODUCT_TYPE_ENUMS = keys(PRODUCT_TYPES);
const PRODUCT_TYPE_ENUM_NAMES = map(
  PRODUCT_TYPE_ENUMS,
  type => PRODUCT_TYPES[type].text
);

// const LEGACY_PRODUCT_TYPES_FIXED_PRICE = ['coupon', 'insurance', 'snowitcard'];

const getProductPriceRule = product => {
  let productData = {};
  if (isObject(product)) {
    productData = isFunction(product.data) ? product.data() : product;
  }
  const { priceRule, type } = productData;
  if (priceRule) return priceRule;
  // se la regola non viene trovata, la modifico in base al comportamento basato su type (stagione 2017-2018)
  if (type === 'snowitcard' || type === 'coupon') return 'fixed';
  if (type === 'insurance') return 'fixedPerDuration';
  return 'dayByDay';
};

const getAttrPrices = productOrPriceRule => {
  const priceRule = isString(productOrPriceRule)
    ? productOrPriceRule
    : getProductPriceRule(productOrPriceRule);
  switch (priceRule) {
    case 'fixed':
      return 'fixedPrice';
    case 'fixedPerDuration':
      return 'fixedPricePerDuration';
    case 'dynamic':
      return 'dynamicPrices';
    default:
      return 'prices';
  }
};

export {
  DEFAULT_TYPE,
  PRODUCT_TYPES,
  PRODUCT_TYPE_ENUMS,
  PRODUCT_TYPE_ENUM_NAMES,
  // LEGACY_PRODUCT_TYPES_FIXED_PRICE,
  getProductPriceRule,
  getAttrPrices,
};
