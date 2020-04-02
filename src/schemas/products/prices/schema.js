// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
import {
  PRICE_RULES,
  PRICE_RULES_NAMES,
  PRICE_RULE_DEFAULT_VALUE,
  PRICE_RULE_DURATION,
  PRICE_RULE_DURATION_NAMES,
} from '../constants';

const priceRule = {
  type: 'string',
  title: 'Regola prezzo',
  enum: PRICE_RULES,
  enumNames: PRICE_RULES_NAMES,
  default: PRICE_RULE_DEFAULT_VALUE,
};

const priceDuration = {
  type: 'string',
  title: 'Prezzo/durata',
  enum: PRICE_RULE_DURATION,
  enumNames: PRICE_RULE_DURATION_NAMES,
  default: PRICE_RULE_DURATION[0],
};

const fixedPrice = {
  type: 'object',
  // required: ['price'],
  title: 'Prezzo fisso',
  properties: {
    price: {
      type: 'number',
      title: 'Prezzo',
      minimum: 0,
      // default: 0
    },
    // productUID: {
    //   type: 'string',
    //   title: 'Prodotto',
    // },
    discount: {
      type: 'number',
      title: 'Sconto %',
    },
    externalPrice: {
      type: 'number',
      title: 'Prezzo esterno',
      minimum: 0,
    },
  },
};

const pricePerDay = {
  type: 'object',
  // required: ['price'],
  // title: 'Prezzi per giorni',
  properties: {
    name: {
      type: 'string',
      title: 'Nome',
    },
    price: {
      type: 'number',
      title: 'Prezzo',
      minimum: 0,
      // default: 0
    },
    discount: {
      type: 'number',
      title: 'Sconto %',
    },
    date: {
      type: 'string',
      title: 'Data',
      format: 'date',
    },
    // productUID: {
    //   type: 'string',
    //   title: 'Prodotto',
    // },
    externalPrice: {
      type: 'number',
      title: 'Prezzo esterno',
      minimum: 0,
    },
  },
};

const dynamicPrice = {
  type: 'object',
  // required: ['price', 'seasonUID'],
  properties: {
    price: {
      type: 'number',
      title: 'Prezzo',
      minimum: 0,
      // default: 0
    },
    seasonUID: {
      type: 'string',
      title: 'Stagione (periodo)',
    },
    discount: {
      type: 'number',
      title: 'Sconto %',
    },
    externalPrice: {
      type: 'number',
      title: 'Prezzo esterno',
      minimum: 0,
    },
    dynamicDiscounts: {
      type: 'array',
      title: 'Sconti dinamici',
      items: {
        type: 'object',
        required: ['daysBefore', 'discount'],
        properties: {
          daysBefore: {
            type: 'number',
            title: 'Giorni',
            minimum: 0,
          },
          discount: {
            type: 'number',
            title: 'Sconto',
            minimum: 0,
            maximum: 100,
          },
        },
      },
    },
  },
};

const schema = {
  type: 'object',
  required: ['priceRule'],
  properties: {
    priceRule,
    fixedPrice: {
      ...fixedPrice,
    },
    fixedPricePerDuration: {
      ...fixedPrice,
      //required: ['price', 'duration'],
      properties: {
        ...fixedPrice.properties,
        duration: priceDuration,
      },
    },
    dynamicPrices: {
      type: 'array',
      title: 'Listino prezzi stagionali',
      items: dynamicPrice,
    },
    prices: {
      type: 'array',
      title: 'Listino prezzi (giorno per giorno)',
      items: pricePerDay,
    },
  },
};

export { priceRule, priceDuration, fixedPrice, pricePerDay, dynamicPrice };

export default schema;
