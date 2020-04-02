import _ from 'lodash';
import { translations } from './_definitions';
import {
  CHALLENGE_DISCIPLINES,
  CHALLENGE_TYPES,
  // CHALLENGE_DISCIPLINE_ENUMS,
  // CHALLENGE_DISCIPLINE_ENUM_NAMES,
  CHALLENGE_STATUS_ENUMS,
  CHALLENGE_STATUS_ENUM_NAMES,
} from './types';
import { LANGUAGES } from '../../app';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  definitions: {
    translations,
  },
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'Nome sfida',
      default: '',
    },
    description: {
      type: 'string',
      title: 'Descrizione',
      default: '',
    },
    allDistricts: {
      type: 'boolean',
      title: 'Tutti i distretti',
    },
    districtUID: {
      type: 'string',
      title: 'Distretto',
    },
    startDate: {
      type: 'string',
      title: 'Inizio',
      format: 'date',
    },
    endDate: {
      type: 'string',
      title: 'Fine',
      format: 'date',
    },
    hour: {
      type: 'number',
      title: 'ora inizio/fine',
      enum: _.range(0, 23),
      default: 0,
    },
    order: {
      type: 'number',
      title: 'Priorità (ordinamento delle sfide)',
      default: 10,
    },
    challengeTypes: {
      type: 'object',
      title: 'Tipo sfida',
      properties: _.mapValues(CHALLENGE_TYPES, type => {
        return {
          type: 'string',
          title: type.text,
          enum: type.enum,
        };
      }),
      default: {},
    },
    disciplines: {
      type: 'object',
      title: 'Discipline',
      // required: _.keys(CHALLENGE_DISCIPLINES),
      properties: _.mapValues(CHALLENGE_DISCIPLINES, discipline => {
        return {
          type: 'boolean',
          default: false,
          title: discipline.text,
        };
      }),
      default: {},
    },
    images: {
      type: 'object',
      title: 'Immagini',
      properties: {
        main: {
          type: 'string',
          title: 'Principale',
          // format: 'data-url',
        },
        banner: {
          type: 'string',
          title: 'Banner',
          // format: 'data-url',
        },
      },
    },
    termsCond: {
      type: 'string',
      title: 'Condizioni',
      default: '',
    },
    private: {
      type: 'boolean',
      title: 'Privata?',
      default: false,
    },
    status: {
      type: 'string',
      title: 'Stato',
      default: 'active',
      enum: CHALLENGE_STATUS_ENUMS,
      enumNames: CHALLENGE_STATUS_ENUM_NAMES,
    },
    // objectives: {
    //   type: 'array',
    //   title: 'Obiettivi',
    //   items: {
    //     type: 'string',
    //   },
    // },
    objectives: {
      type: 'array',
      title: 'Obiettivi (configurazione)',
      items: {
        type: 'object',
        required: ['type', 'treshold'],
        properties: {
          type: {
            type: 'string',
            title: 'Tipo obiettivo',
            enum: _.keys(CHALLENGE_TYPES),
            enumNames: _(CHALLENGE_TYPES)
              .values()
              .map(type => type.text),
            // enumNames: ['Distanza'],
          },
          treshold: {
            type: 'number',
            title: 'Soglia',
          },
          description: {
            type: 'string',
            title: 'Descrizione',
          },
        },
      },
    },
    translations: {
      type: 'object',
      title: 'Traduzioni',
      properties: _.mapValues(LANGUAGES, (display, code) => {
        return {
          title: display,
          key: code,
          $ref: '#/definitions/translations',
        };
      }),
    },
  },
};

export default schema;
