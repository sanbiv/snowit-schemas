import reduce from 'lodash/reduce';
import keys from 'lodash/keys';

const PARTNER_TYPES_OBJECT = {
  district: {
    label: 'Comprensorio',
    color: 'teal',
    icon: 'building',
  },
  rental: {
    label: 'Noleggio',
    color: 'orange',
    icon: 'dollar',
  },
  customerCare: {
    label: 'Customer care',
    color: 'blue',
    icon: 'users',
  },
  experience: {
    label: 'Esperienze',
    color: 'brown',
    icon: 'map signs',
  },
  food: {
    label: 'Food',
    color: 'red',
    icon: 'food',
  },
  parking: {
    label: 'Parking',
    color: 'green',
    icon: 'car',
  },
  other: {
    label: 'Altro',
    color: 'purple',
    icon: 'circle',
  },
  lesson: {
    label: 'Lesson',
    color: 'red',
    icon: 'book',
  },
  'bundle:family-pack': {
    label: 'Piano famiglia',
    color: 'orange',
    icon: 'users',
  },
  'rental:bike': {
    label: 'Noleggio bici',
    color: 'red',
    icon: 'bicycle',
  },
  hotel: {
    label: 'Hotel',
    color: 'grey',
    icon: 'hotel',
  },
};
const PARTNER_TYPE_ENUMS = keys(PARTNER_TYPES_OBJECT);
const PARTNER_TYPE_ENUM_NAMES = reduce(
  PARTNER_TYPES_OBJECT,
  (memo, opt) => {
    memo.push(opt.label);
    return memo;
  },
  []
);

export { PARTNER_TYPE_ENUMS, PARTNER_TYPE_ENUM_NAMES, PARTNER_TYPES_OBJECT };
