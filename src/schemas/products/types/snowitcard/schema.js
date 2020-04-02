import { commonData, availability, links } from '../_common/_definitions';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  definitions: {
    availability,
    links,
  },
  type: 'object',
  required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
  properties: {
    type: {
      type: 'string',
      title: 'Tipo prodotto',
      default: 'snowitcard',
      enum: ['snowitcard'],
    },
    default: {
      type: 'boolean',
      title: 'Carta di default',
      default: false,
    },
    ...commonData(),
    insuranceIncluded: {
      type: 'boolean',
      title: 'Assicurazione inclusa?',
      default: false,
    },
    bundle: {
      type: 'boolean',
      title: 'Vendita abbinata ad altri prodotti',
    },
  },
};

export default schema;
