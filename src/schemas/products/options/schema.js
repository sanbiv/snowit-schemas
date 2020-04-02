import { buildTranslatedSchemaAttributes } from '../../../../utils/i18n';
import { PRODUCT_TYPE_ENUMS, PRODUCT_TYPE_ENUM_NAMES } from '../types';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: ['nameTranslations'],
  properties: {
    productType: {
      type: 'string',
      title: 'Tipologia prodotto',
      enum: PRODUCT_TYPE_ENUMS,
      enumNames: PRODUCT_TYPE_ENUM_NAMES,
    },
    ...buildTranslatedSchemaAttributes({
      name: { title: 'Nome del prodotto', required: true },
      description: 'Descrizione',
    }),
    addressRequired: {
      type: 'boolean',
      title: 'Questa opzione richiede indirizzo',
      default: false,
    },
    cover: {
      type: 'string',
      title: 'Immagine',
    },
    externalUID: {
      type: 'string',
      title: 'UID Esterno',
    },
  },
};

export default schema;
