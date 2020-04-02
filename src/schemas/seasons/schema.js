import { buildTranslatedSchemaAttributes } from '../../../utils/i18n';
// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: [
    'nameTranslations',
    'districtUID',
    'startDate',
    'endDate',
    'priority',
  ],
  properties: {
    ...buildTranslatedSchemaAttributes({
      name: { title: 'Nome della stagione', required: true },
    }),
    priority: {
      type: 'number',
      title: 'Priorità',
      default: 10,
    },
    districtUID: {
      type: 'string',
      title: 'Distretto',
      default: '',
    },
    startDate: {
      type: 'string',
      title: 'Data inizio',
      format: 'date',
    },
    endDate: {
      type: 'string',
      title: 'Data fine',
      format: 'date',
    },
    onlyDates: {
      type: 'array',
      title: 'Impostazione valida solo per le date specificate',
      items: {
        type: 'string',
        format: 'date',
        title: 'Data valida',
      },
    },
    exceptDates: {
      type: 'array',
      title: 'Impostazione non valida nelle date specificate',
      items: {
        type: 'string',
        format: 'date',
        title: 'Data da escludere',
      },
    },
  },
};

export default schema;
