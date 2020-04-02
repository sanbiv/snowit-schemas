import {
  commonData,
  durationHours,
  availability,
  links,
} from '../_common/_definitions';
import {
  RENTAL_EQUIPMENT_TYPES,
  RENTAL_EQUIPMENT_TYPE_NAMES,
  LEVEL_LIST,
  LEVEL_LIST_NAMES,
} from '../../constants';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  definitions: {
    durationHours,
    availability,
    links,
  },
  type: 'object',
  required: [
    'nameTranslations',
    'type',
    'equipmentType',
    'partnerUID',
    'districtUID',
  ],
  properties: {
    type: {
      type: 'string',
      title: 'Tipo prodotto',
      default: 'rental',
      enum: ['rental'],
    },
    ...commonData(),
    insuranceIncluded: {
      type: 'boolean',
      title: 'Assicurazione inclusa?',
      default: false,
    },
    externalUID: {
      type: 'string',
      title: 'UID esterno',
    },
    externalModelUID: {
      type: 'string',
      title: 'externalModelUID',
    },
    categoryUID: {
      type: 'string',
      title: 'Categoria',
      default: '',
    },
    equipmentType: {
      type: 'string',
      title: 'Tipo equipaggiamento',
      enum: RENTAL_EQUIPMENT_TYPES,
      enumNames: RENTAL_EQUIPMENT_TYPE_NAMES,
    },
    durationHours: {
      $ref: '#/definitions/durationHours',
    },
    bundle: {
      type: 'boolean',
      title: 'Vendita abbinata ad altri prodotti',
    },
    options: {
      type: 'object',
      title: 'Seleziona le opzioni disponibili per questo prodotto',
      properties: {},
    },
    level: {
      type: 'string',
      title: 'Livello',
      enumNames: LEVEL_LIST_NAMES,
      enum: LEVEL_LIST,
    },
  },
};

export default schema;
