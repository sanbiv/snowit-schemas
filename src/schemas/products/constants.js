import range from 'lodash/range';
import map from 'lodash/map';
import without from 'lodash/without';
import { displayDuration } from '../../../utils/products';

const PROVIDER_ENUMS = ['skidata', 'axess', 'skiwork', 'easyrent', 'none'];
const PROVIDER_ENUM_NAMES = [
  'Skidata',
  'Axess',
  'Skiwork',
  'Easyrent',
  'Nessuno',
];
const HOURS = range(0, 12);
const DAYS = range(1, 8).map(day => day * 24);
const DURATION_HOURS = [...HOURS, ...DAYS];
const DURATION_HOURS_NAMES = DURATION_HOURS.map(displayDuration);

const BUNDLE_NO_LIMIT = -1;
const BUNDLE_SAME_QUANTITY = -2;

const BUNDLE_ITEM_QUANTITY_ENUMS = without(range(-2, 20), 0);
const BUNDLE_ITEM_QUANTITY_ENUM_NAMES = map(BUNDLE_ITEM_QUANTITY_ENUMS, val => {
  if (val === BUNDLE_NO_LIMIT) {
    return 'Nessun limite';
  } else if (val === BUNDLE_SAME_QUANTITY) {
    return 'Rapporto 1 a 1 (stessa quantità del prodotto in oggetto)';
  }
  return `Se presente ${val} volta/e nel carrello`;
});
// export {
//   PROVIDER_NAMES
// };
const PRICE_RULES = ['fixed', 'fixedPerDuration', 'dayByDay', 'dynamic'];
const PRICE_RULES_NAMES = [
  'Prezzo fisso',
  'Prezzo fisso (moltiplicato per durata)',
  'Prezzo giorno per giorno (legacy mode)',
  'Prezzo dinamico (stagionale)',
];
const PRICE_RULE_DEFAULT_VALUE = 'dayByDay';

const PRICE_RULE_DURATION = ['day', 'hour'];
const PRICE_RULE_DURATION_NAMES = ['Prezzo giornaliero', 'Prezzo orario'];

const RENTAL_EQUIPMENT_TYPES = ['ski', 'snowboard', 'other'];
const RENTAL_EQUIPMENT_TYPE_NAMES = ['Sci', 'Snowboard', 'Altro'];

const DURATION_TYPES = ['day', 'night'];
const DURATION_TYPE_NAMES = ['Giorni', 'Notti'];

const LEVEL_LIST = ['beginner', 'intermediate', 'advanced'];
const LEVEL_LIST_NAMES = ['Beginner', 'Intermediate', 'Advanced'];

const BARCODE_TYPES = ['reserved', 'simple', '-'];
const BARCODE_TYPE_NAMES = ['Riservato', 'Semplice', 'Nessuno'];

export {
  PROVIDER_ENUMS,
  PROVIDER_ENUM_NAMES,
  HOURS,
  DAYS,
  DURATION_HOURS,
  DURATION_HOURS_NAMES,
  BUNDLE_NO_LIMIT,
  BUNDLE_SAME_QUANTITY,
  BUNDLE_ITEM_QUANTITY_ENUMS,
  BUNDLE_ITEM_QUANTITY_ENUM_NAMES,
  PRICE_RULES,
  PRICE_RULES_NAMES,
  PRICE_RULE_DEFAULT_VALUE,
  PRICE_RULE_DURATION,
  PRICE_RULE_DURATION_NAMES,
  RENTAL_EQUIPMENT_TYPES,
  RENTAL_EQUIPMENT_TYPE_NAMES,
  DURATION_TYPES,
  DURATION_TYPE_NAMES,
  LEVEL_LIST,
  LEVEL_LIST_NAMES,
  BARCODE_TYPES,
  BARCODE_TYPE_NAMES,
};
