import keys from 'lodash/keys';
import values from 'lodash/values';

const VENUE_TYPES = {
  pickup: 'Pickup',
  entrance: 'Ingresso',
  other: 'Altro',
};

const VENUE_TYPE_ENUMS = keys(VENUE_TYPES);
const VENUE_TYPE_ENUM_NAMES = values(VENUE_TYPES);

export { VENUE_TYPES, VENUE_TYPE_ENUMS, VENUE_TYPE_ENUM_NAMES };

export default {
  VENUE_TYPES,
  VENUE_TYPE_ENUMS,
  VENUE_TYPE_ENUM_NAMES,
};
