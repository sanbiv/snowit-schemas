import reduce from 'lodash/reduce';
import { buildTranslatedSchemaAttributes } from '../../../../utils/i18n';
import { DETAILS_EXTRA_INFO_TYPES } from './constants';

const buildDetailsSchema = () => {
  const properties = reduce(
    DETAILS_EXTRA_INFO_TYPES,
    (memo, val, key) => {
      // let schemaType = val.type;
      // let i18nProperties;
      memo[key] = {
        type: 'object',
        title: val.label,
        properties: {},
      };
      switch (val.type) {
        case 'text':
        default:
          // schemaType = 'string';
          memo[key].properties = buildTranslatedSchemaAttributes({
            body: { required: val.required },
          });
      }
      return memo;
    },
    {}
  );
  const schema = {
    type: 'object',
    title: 'Dettagli extra del prodotto',
    required: reduce(
      DETAILS_EXTRA_INFO_TYPES,
      (memo, val, key) => {
        if (val.required) {
          memo.push(key);
        }
        return memo;
      },
      []
    ),
    properties: {
      ...properties,
      metatags: {
        title: 'Metatags',
        type: 'object',
        // required: ['title', 'description', 'robots'],
        properties: {
          ...buildTranslatedSchemaAttributes({
            title: {
              type: 'string',
              title: 'Titolo',
              default: '',
            },
            description: {
              type: 'string',
              title: 'Descrizione',
              default: '',
            },
          }),
          robots: {
            type: 'string',
            title: 'Robots',
            default: '',
          },
          facebook: {
            title: 'Facebook',
            type: 'object',
            properties: {
              type: {
                type: 'string',
                title: 'Tipo',
                default: '',
              },
              ...buildTranslatedSchemaAttributes({
                title: {
                  type: 'string',
                  title: 'Titolo',
                  default: '',
                },
                description: {
                  type: 'string',
                  title: 'Descrizione',
                  default: '',
                },
              }),
              image: {
                type: 'string',
                title: 'Immagine',
                default: '',
              },
              siteName: {
                type: 'string',
                title: 'Nome sito',
                default: '',
              },
            },
          },
        },
      },
    },
  };
  return schema;
};

export { buildDetailsSchema };
