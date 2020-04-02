import zipObject from 'lodash/zipObject';

const TAXONOMY_TYPES = [
  'skipass',
  'rental',
  'experienceConcept',
  'bundle',
  'lesson',
  'food',
  'parking',
  'bundle:family-pack',
  'rental:bike',
  'hotel',
];
const TAXONOMY_TYPE_NAMES = [
  'Skipass',
  'Noleggio',
  'Esperienza',
  'Bundle',
  'Lezione',
  'Food',
  'Parking',
  'Piano famiglia',
  'Noleggio bici',
  'Hotel',
];
const DEFAULT_TAXONOMY_TYPE = 'skipass';
const TAXONOMY_TYPES_OBJECT = zipObject(TAXONOMY_TYPES, TAXONOMY_TYPE_NAMES);
const TAXONOMY_TYPE_COLORS = {
  skipass: 'teal',
  rental: 'olive',
  experienceConcept: 'violet',
  bundle: 'orange',
  food: 'red',
  parking: 'green',
  'bundle:family-pack': 'orange',
  'rental:bike': 'olive',
  hotel: 'grey',
};

export {
  TAXONOMY_TYPES,
  TAXONOMY_TYPE_NAMES,
  DEFAULT_TAXONOMY_TYPE,
  TAXONOMY_TYPES_OBJECT,
  TAXONOMY_TYPE_COLORS,
};
