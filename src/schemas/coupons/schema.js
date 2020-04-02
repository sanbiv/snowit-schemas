import _ from 'lodash';
import { COUPON_TYPE_ENUMS, COUPON_TYPE_ENUM_NAMES } from './types';
import { DURATION_HOURS, DURATION_HOURS_NAMES } from '../products/constants';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: [
    'code',
    'name',
    'type',
    'districtUID',
    'products',
    'usageLeft',
    'usageMax',
    'validUntil',
  ],
  properties: {
    code: {
      type: 'string',
      title: 'Codice coupon',
    },
    name: {
      type: 'string',
      title: 'Nome del coupon',
    },
    type: {
      type: 'string',
      title: 'Richiedi indirizzo!',
      enum: COUPON_TYPE_ENUMS,
      enumNames: COUPON_TYPE_ENUM_NAMES,
      default: _.first(COUPON_TYPE_ENUMS),
    },
    description: {
      type: 'string',
      title: 'Descrizione',
      default: '',
    },
    districtUID: {
      type: 'string',
      title: 'Distretto',
      default: '',
    },
    categoryUID: {
      type: 'string',
      title: 'Categoria',
      default: '',
    },
    durationHours: {
      type: 'number',
      title: 'Durata in ore',
      enum: DURATION_HOURS,
      enumNames: DURATION_HOURS_NAMES,
    },
    externalUID: {
      type: 'string',
      title: 'ID esterno (del comprensorio)',
    },
    partnerDelayedPayment: {
      type: 'boolean',
      title: 'Pagamento al comprensorio in seconda instanza',
    },
    price: {
      type: 'number',
      title: 'Prezzo del prodotto',
    },
    _productItems: {
      type: 'array',
      title: 'Prodotti inclusi nel coupon/gift card',
      items: {
        type: 'object',
        required: ['productUID'],
        properties: {
          productUID: {
            type: 'string',
            title: 'Prodotto',
          },
        },
      },
    },
  },
};

export default schema;
