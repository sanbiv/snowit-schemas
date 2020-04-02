import {
  commonData,
  productItems,
  availability,
  links,
} from '../_common/_definitions';
import { schema as giftCardProductsRulesBuilder } from '../_common/_giftCard';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = ({ formData }) => {
  const jsonSchema = {
    definitions: {
      productItems,
      availability,
      links,
      giftCardProductsRules: giftCardProductsRulesBuilder({ formData }),
    },
    type: 'object',
    required: ['type', 'nameTranslations', 'partnerUID', 'districtUID'],
    properties: {
      type: {
        type: 'string',
        title: 'Tipo prodotto',
        default: 'coupon',
        enum: ['coupon'],
      },
      ...commonData(),
      insuranceIncluded: {
        type: 'boolean',
        title: 'Assicurazione inclusa?',
        default: false,
      },
      partnerDelayedPayment: {
        type: 'boolean',
        title: 'Pagamento al partner in seconda instanza',
        default: false,
      },
      openGiftCard: {
        type: 'boolean',
        title: 'Imposta regole prodotti per la giftcard',
        default: true,
      },
      _productItems: {
        $ref: '#/definitions/productItems',
        default: [],
      },
      giftCardProductsRules: {
        $ref: '#/definitions/giftCardProductsRules',
      },
      redeemAvailability: {
        type: 'object',
        title: 'Riscatto del coupon/giftcard',
        required: ['dateInterval'],
        default: {},
        properties: {
          dateInterval: {
            type: 'object',
            // required: ['from', 'to'],
            title:
              'Intervallo di date in cui il coupon/giftcard è riscattabile',
            properties: {
              from: {
                type: 'string',
                title: 'Data inizio',
                format: 'date',
              },
              to: {
                type: 'string',
                title: 'Data fine',
                format: 'date',
              },
            },
          },
          exceptDates: {
            type: 'array',
            title:
              'Escludi le date del periodo in cui il coupon/gift-card non è riscattabile',
            items: {
              type: 'string',
              format: 'date',
            },
          },
          onlyDates: {
            type: 'array',
            title:
              'Specifica le singole date in cui il coupon/gift-card è riscattabile',
            items: {
              type: 'string',
              format: 'date',
              // title: 'Data valida',
            },
          },
        },
      },
      options: {
        type: 'object',
        title: 'Seleziona le opzioni disponibili per questo prodotto',
        properties: {},
      },
    },
  };

  return jsonSchema;
};

export default schema;
