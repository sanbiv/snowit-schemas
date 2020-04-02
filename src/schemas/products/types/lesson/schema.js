import {
  commonData,
  durationHours,
  availability,
  links,
} from '../_common/_definitions';
import {
  LESSON_LEVEL_ENUMS,
  LESSON_LEVEL_ENUM_NAMES,
  LESSON_TYPE_ENUMS,
  LESSON_TYPE_ENUM_NAMES,
  LESSON_SUBTYPE_ENUMS,
  LESSON_SUBTYPE_ENUM_NAMES,
} from './constants';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  definitions: {
    durationHours,
    availability,
    links,
  },
  type: 'object',
  required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
  properties: {
    type: {
      type: 'string',
      title: 'Tipo prodotto',
      default: 'lesson',
      enum: ['lesson'],
    },
    participantsAmount: {
      type: 'number',
      title: 'N. partecipanti',
    },
    participantsLevel: {
      type: 'string',
      title: 'Livello partecipanti',
      enum: LESSON_LEVEL_ENUMS,
      enumNames: LESSON_LEVEL_ENUM_NAMES,
    },
    lessonType: {
      type: 'string',
      title: 'Tipo lezione',
      enum: LESSON_TYPE_ENUMS,
      enumNames: LESSON_TYPE_ENUM_NAMES,
    },
    categoryUID: {
      type: 'string',
      title: 'Categoria',
      default: '',
    },
    subCategoryUID: {
      type: 'string',
      title: 'Sottocategoria',
    },
    externalUID: {
      type: 'string',
      title: 'ID esterno (codice corso)',
    },
    ...commonData(),
    durationHours: {
      $ref: '#/definitions/durationHours',
    },
    partnerDelayedPayment: {
      type: 'boolean',
      title: 'Pagamento al partner in seconda instanza',
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
    specialty: {
      type: 'string',
      title: 'Specialità (id)',
    },
  },
};

export default schema;
