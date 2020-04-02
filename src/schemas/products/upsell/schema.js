import { PRODUCT_TYPE_ENUMS, PRODUCT_TYPE_ENUM_NAMES } from '../types';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = ({ product }) => {
  const jsonschema = {
    type: 'object',
    properties: {
      upsells: {
        type: 'array',
        items: {
          type: 'string',
        },
        title: 'Upsells',
      },
      crossSells: {
        type: 'object',
        title: 'Cross-sells',
        properties: {
          productTypes: {
            title: 'Tipologie di prodotto',
            type: 'array',
            items: {
              type: 'string',
              enum: PRODUCT_TYPE_ENUMS.filter(item => {
                if (!product) return false;
                return item !== product.type;
              }),
              enumNames: PRODUCT_TYPE_ENUM_NAMES.filter((item, key) => {
                if (!product) return false;
                return key !== PRODUCT_TYPE_ENUMS.indexOf(product.type);
              }),
            },
          },
        },
      },
      bondedProducts: {
        type: 'array',
        items: {
          type: 'string',
        },
        title: 'Prodotti vincolati',
      },
    },
  };

  return jsonschema;
};

export default schema;
