import { buildTranslatedSchemaAttributes } from '../../../../utils/i18n';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: ['nameTranslations'],
  properties: {
    ...buildTranslatedSchemaAttributes({
      name: { title: 'Nome dello slot', required: true },
      description: 'Descrizione',
    }),
    externalUID: {
      type: 'string',
      title: 'UID esterno',
    },
  },
};

export default schema;
