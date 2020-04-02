import { TAXONOMY_TYPES, TAXONOMY_TYPE_NAMES } from './constants';
import { buildTranslatedSchemaAttributes } from '../../../utils/i18n';
import {
  WIDGET_TENANTS_ENUMS,
  WIDGET_TENANTS_ENUM_NAMES,
} from '../widgets/tenants';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  properties: {
    ...buildTranslatedSchemaAttributes({
      name: { title: 'Nome della categoria', required: true },
      permalink: {
        type: 'string',
        title: 'Permalink',
      },
    }),
    taxonomyType: {
      type: 'string',
      title: 'Tassonomia',
      default: 'skipass',
      enum: TAXONOMY_TYPES,
      enumNames: TAXONOMY_TYPE_NAMES,
    },
    image: {
      type: 'string',
      title: 'Immagine',
      // format: 'data-url',
    },
    districtUID: {
      type: 'string',
      title: 'Distretto',
      default: '',
    },
    partnerUID: {
      type: 'string',
      title: 'Partner',
      default: '',
    },
    tenant: {
      type: 'string',
      title: 'Tenant',
      enum: ['', ...WIDGET_TENANTS_ENUMS],
      enumNames: ['', ...WIDGET_TENANTS_ENUM_NAMES],
      default: '',
    },
    externalUID: {
      type: 'string',
      title: 'ID esterno',
    },
    alwaysPurchasable: {
      type: 'boolean',
      title: 'Sempre acquistabile',
    },
    ageMin: {
      type: 'number',
      title: 'Età minima',
    },
    ageMax: {
      type: 'number',
      title: 'Età massima',
    },
    bornAfter: {
      type: 'string',
      title: 'Nato dopo il',
      format: 'date',
    },
    bornBefore: {
      type: 'string',
      title: 'Nato prima del',
      format: 'date',
    },
    documentsRequired: {
      type: 'boolean',
      title: 'Documenti richiesti?',
    },
    position: {
      type: 'number',
      title: 'Posizione',
    },
    subCategories: {
      type: 'array',
      title: 'Sottocategorie',
      items: {
        type: 'object',
        required: ['name', 'externalUID'],
        properties: {
          name: {
            type: 'string',
            title: 'Nome',
          },
          externalUID: {
            type: 'string',
            title: 'ID esterno',
          },
        },
      },
    },
  },
  required: ['nameTranslations', 'districtUID', 'taxonomyType'],
};

export default schema;
