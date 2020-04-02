import { buildTranslatedSchemaAttributes } from '../../../../utils/i18n';
import reduce from 'lodash/reduce';
import { VENUE_TYPES } from './types';
// import first from 'lodash/first';
// import without from 'lodash/without';
// import { PARTNER_TYPE_ENUMS, PARTNER_TYPE_ENUM_NAMES } from './types';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: ['nameTranslations', 'partnerUID', 'districtUID'],
  properties: {
    ...buildTranslatedSchemaAttributes({
      name: { title: 'Nome luogo', required: true },
    }),
    partnerUID: {
      type: 'string',
      title: 'Partner',
      default: '',
    },
    districtUID: {
      type: 'string',
      title: 'Distretto',
    },
    active: {
      type: 'boolean',
      title: 'Attivo?',
    },
    point: {
      type: 'object',
      title: 'Posizione geografica',
      required: ['latitude', 'longitude'],
      properties: {
        longitude: {
          type: 'number',
        },
        latitude: {
          type: 'number',
        },
      },
    },
    types: {
      type: 'object',
      properties: reduce(
        VENUE_TYPES,
        (memo, title, key) => {
          const properties = memo;
          properties[key] = {
            type: 'boolean',
            default: key === 'other',
            title,
          };
          return properties;
        },
        {}
      ),
    },
    // types: {
    //   type: 'array',
    //   items: {
    //     type: 'string',
    //     enum: VENUE_TYPE_ENUMS,
    //     enumNames: VENUE_TYPE_ENUM_NAMES,
    //     default: 'other'
    //   }
    // }
  },
};

export default schema;
