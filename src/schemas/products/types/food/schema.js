import {
  commonData,
  durationHours,
  availability,
  links,
} from '../_common/_definitions';

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
      default: 'food',
      enum: ['food'],
    },
    ...commonData(),
    durationHours: {
      $ref: '#/definitions/durationHours',
    },
    categoryUID: {
      type: 'string',
      title: 'Categoria',
      default: '',
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
  },
};

export default schema;
