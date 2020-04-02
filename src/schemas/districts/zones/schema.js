// import { buildTranslatedSchemaAttributes } from '../../../../utils/i18n';
// import first from 'lodash/first';
// import without from 'lodash/without';
// import { PARTNER_TYPE_ENUMS, PARTNER_TYPE_ENUM_NAMES } from './types';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: ['name', 'districtUID'],
  properties: {
    name: {
      type: 'string',
      title: 'Nome della zona',
    },
    permalink: {
      type: 'string',
      title: 'Permalink',
    },
    districtUID: {
      type: 'string',
      title: 'Distretto',
      default: '',
    },
    active: {
      type: 'boolean',
      title: 'Attivo?',
      default: true,
    },
  },
};

export default schema;
