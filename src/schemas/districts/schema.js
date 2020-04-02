import reduce from 'lodash/reduce';
import { PRODUCT_TYPES } from '../products/types';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: ['district', 'name'],
  properties: {
    district: {
      type: 'string',
      title: 'Codice',
      description: 'Codice stazione (deve essere univoco)',
    },
    name: {
      type: 'string',
      title: 'Nome visualizzato',
    },
    permalink: {
      type: 'string',
      title: 'Permalink',
    },
    icon: {
      type: 'string',
      title: 'Logo del distretto',
    },
    nation: {
      type: 'string',
      title: 'Nazione',
    },
    active: {
      type: 'boolean',
      title: 'Attivo?',
    },
    purchasable: {
      type: 'boolean',
      title: 'Acquisto attivo?',
    },
    popupAlert: {
      type: 'string',
      title: 'Popup alert',
    },
    bccOrderEmail: {
      type: 'string',
      title: 'Email BCC',
    },
    productTypes: {
      type: 'object',
      title: 'Tipologia di prodotti disponibili nel comprensorio',
      properties: reduce(
        PRODUCT_TYPES,
        (memo, productTypeDetails, productType) => {
          const properties = memo;
          properties[productType] = {
            type: 'boolean',
            title: productTypeDetails.text,
          };
          return properties;
        },
        {}
      ),
    },
  },
};

export default schema;
