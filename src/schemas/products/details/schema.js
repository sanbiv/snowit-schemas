import keys from 'lodash/keys';
import map from 'lodash/map';
import { buildTranslatedSchemaAttributes } from '../../../../utils/i18n';
import { DETAILS_GALLERY_TYPES } from './constants';
import { buildDetailsSchema } from './utils';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: [],
  properties: {
    _activeSection: {
      type: 'string',
      default: 'details',
      title: 'Inserisci dettagli extra e galleria immagini del prodotto',
      enum: ['details', 'gallery'],
      enumNames: ['Dettagli', 'Galleria'],
    },
    gallery: {
      type: 'array',
      title: 'Galleria',
      items: {
        type: 'object',
        required: ['type', 'titleTranslations'],
        properties: {
          type: {
            type: 'string',
            enum: keys(DETAILS_GALLERY_TYPES),
            enumNames: map(DETAILS_GALLERY_TYPES, type => type.label),
            default: 'image',
            title: 'Tipo oggetto',
          },
          ...buildTranslatedSchemaAttributes({
            title: { title: 'Titolo', required: true },
            description: 'Descrizione',
          }),
          image: {
            type: 'string',
            title: 'Immagine',
            // format: 'data-url',
          },
          videoId: {
            type: 'string',
            title: 'ID video youtube',
          },
          featured: {
            type: 'boolean',
            title: 'Featured',
          },
        },
      },
    },
    details: buildDetailsSchema(),
  },
};

export default schema;
