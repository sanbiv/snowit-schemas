import reduce from 'lodash/reduce';
import keys from 'lodash/keys';

const DISCOUNT_TYPES = {
  percentage: {
    label: 'Percentuale',
  },
  amount: {
    label: 'Totale',
  },
};
const DISCOUNT_TYPE_ENUMS = keys(DISCOUNT_TYPES);
const DISCOUNT_TYPE_ENUM_NAMES = reduce(
  DISCOUNT_TYPES,
  (memo, opt) => {
    memo.push(opt.label);
    return memo;
  },
  []
);
const DEFAULT_TYPE = 'percentage';

export {
  DEFAULT_TYPE,
  DISCOUNT_TYPES,
  DISCOUNT_TYPE_ENUMS,
  DISCOUNT_TYPE_ENUM_NAMES,
};
