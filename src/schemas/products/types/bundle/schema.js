import { DURATION_TYPES, DURATION_TYPE_NAMES } from '../../constants';

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
      default: 'bundle',
      enum: ['bundle'],
    },
    ...commonData({ type: 'bundle' }),
    categoryUID: {
      type: 'string',
      title: 'Categoria',
      default: '',
    },
    durationHours: {
      $ref: '#/definitions/durationHours',
    },
    partnerDelayedPayment: {
      type: 'boolean',
      title: 'Pagamento al partner in seconda instanza',
    },
    _productItems: {
      type: 'array',
      title: 'Prodotti nel bundle',
      items: {
        type: 'object',
        properties: {
          productUID: {
            title: 'Seleziona prodotto',
            type: 'string',
          },
          quantity: {
            title: 'Qta',
            type: 'number',
            default: 1,
          },
        },
      },
    },
    options: {
      type: 'object',
      title: 'Seleziona le opzioni disponibili per questo prodotto',
      properties: {},
    },
    adults: {
      type: 'number',
      title: 'Adulti',
    },
    juniors: {
      type: 'number',
      title: 'Junior',
    },
    kids: {
      type: 'number',
      title: 'Kids',
    },
    durationType: {
      type: 'string',
      title: 'Tipo durata',
      default: 'day',
      enumNames: DURATION_TYPE_NAMES,
      enum: DURATION_TYPES,
    },
  },
};

export default schema;
