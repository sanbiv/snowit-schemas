import reduce from 'lodash/reduce';

const COUPON_TYPE_ENUMS = ['SNOWITAPP', 'GIFTCARD', 'EASYWELFARE', 'FIERA'];
const COUPON_TYPE_ENUM_NAMES = [
  'Snowit App (Standard Coupon)',
  'Gift Card',
  'EasyWelfare',
  'Fiera',
];

const COUPON_TYPES = reduce(
  COUPON_TYPE_ENUMS,
  (memo, type, index) => {
    return {
      ...memo,
      [type]: COUPON_TYPE_ENUM_NAMES[index],
    };
  },
  {}
);

const DEFAULT_COUPON_TYPE = 'EASYWELFARE';

const REDEEM_TYPE_ENUMS = {
  all: { key: 'all', text: 'Tutti', value: 'all' },
  used: { key: 'used', text: 'Riscattati', value: 'used' },
  not_used: { key: 'not-used', text: 'Da riscattare', value: 'not-used' },
};

export {
  COUPON_TYPE_ENUMS,
  COUPON_TYPE_ENUM_NAMES,
  COUPON_TYPES,
  DEFAULT_COUPON_TYPE,
  REDEEM_TYPE_ENUMS,
};
