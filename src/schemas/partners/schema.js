import first from 'lodash/first';
import without from 'lodash/without';
import {
  PRODUCT_TYPE_ENUMS,
  PRODUCT_TYPE_ENUM_NAMES,
} from '../products/types/';
import { PARTNER_TYPE_ENUMS, PARTNER_TYPE_ENUM_NAMES } from './types';
import {
  WIDGET_TENANTS_ENUMS,
  WIDGET_TENANTS_ENUM_NAMES,
} from '../widgets/tenants';
import { buildTranslatedSchemaAttributes } from '../../../utils/i18n';
import { PROVIDERS_EMUMS, PROVIDERS_EMUM_NAMES } from './constants';

const MODAL_INFO_TYPE_ENUMS = ['parking', 'POI'];
const MODAL_INFO_TYPE_ENUM_NAMES = ['Parcheggio', 'POI'];

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Nome partner',
    },
    permalink: {
      type: 'string',
      title: 'Permalink partner',
    },
    cover: {
      type: 'string',
      // format: 'data-url',
      title: 'Cover',
    },
    pageTexts: {
      type: 'object',
      title: 'Testi pagina',
      properties: {
        ...buildTranslatedSchemaAttributes({
          title: {
            title: 'Titolo',
            type: 'string',
          },
          subtitle: {
            title: 'Sottotitolo',
            type: 'string',
          },
          description: {
            title: 'Descrizione',
            type: 'string',
          },
          buyProductsCta: {
            title: 'Call to action (acquista prodotti)',
            type: 'string',
          },
          buyProductsDescription: {
            title: 'Descrizione (acquista prodotti)',
            type: 'string',
          },
        }),
      },
    },
    ...buildTranslatedSchemaAttributes({
      openingTime: {
        title: 'Orari di apertura',
        type: 'string',
      },
    }),
    type: {
      type: 'string',
      title: 'Tipo partner',
      enum: PARTNER_TYPE_ENUMS,
      enumNames: PARTNER_TYPE_ENUM_NAMES,
      default: first(PARTNER_TYPE_ENUMS),
    },
    districtUID: {
      type: 'string',
      title: 'Distretto',
      default: '',
    },
    tenant: {
      type: 'string',
      title: 'Tenant',
      enum: ['', ...WIDGET_TENANTS_ENUMS],
      enumNames: ['', ...WIDGET_TENANTS_ENUM_NAMES],
      default: '',
    },
    parentUID: {
      type: 'string',
      title: 'Parent',
      default: '',
    },
    active: {
      type: 'boolean',
      title: 'Attivo?',
    },
    purchasable: {
      type: 'boolean',
      title: 'Acquisto attivo?',
    },
    public: {
      type: 'boolean',
      title: 'Pubblico?',
    },
    snowitCommission: {
      type: 'number',
      title: 'Commissioni snowit (%)',
    },
    bccOrderEmail: {
      type: 'string',
      title: 'Email ricezione notifiche ordine',
      format: 'email',
    },
    provider: {
      type: 'string',
      title: 'Provider',
      enum: PROVIDERS_EMUMS,
      enumNames: PROVIDERS_EMUM_NAMES,
    },
    skidata: {
      type: 'object',
      title: 'Skidata',
      properties: {
        catalog_id: { type: 'string', title: 'Id catalogo' },
        catalog_version: { type: 'integer', title: 'Versione catalogo' },
        client_name: { type: 'string', title: 'Client name' },
        code: { type: 'string', title: 'Code' },
        username: { type: 'string', title: 'Username' },
        working_client_name: { type: 'string', title: 'Working cient name' },
      },
    },
    axess: {
      type: 'object',
      title: 'Axess',
      properties: {
        code: { type: 'string', title: 'Codice' },
        countryCode: { type: 'string', title: 'Codice nazione' },
        loginId: { type: 'string', title: 'Login id' },
        loginMode: { type: 'string', title: 'Login mode' },
        poolNo: { type: 'number', title: 'Pool Number' },
        posNo: { type: 'number', title: 'POS Number' },
        projectNo: { type: 'number', title: 'Project Number' },
        soapCode: { type: 'string', title: 'SOAP (code)' },
        soapUsername: { type: 'string', title: 'SOAP (username)' },
        username: { type: 'string', title: 'Username' },
      },
    },
    skiwork: {
      type: 'object',
      title: 'Skiwork',
      properties: {
        partnerCode: { type: 'string', title: 'Codice scuola' },
      },
    },
    easyrent: {
      type: 'object',
      title: 'Easyrent',
      properties: {
        access_id: { type: 'string', title: 'access_id' },
        er_branchid: { type: 'string', title: 'er_branchid', default: '' },
        er_depotlocationid: {
          type: 'string',
          title: 'er_depotlocationid',
          default: '',
        },
      },
    },
    openingCalendar: {
      type: 'object',
      title: 'Informazioni addizionali',
      properties: {
        calendarEnabled: {
          type: 'boolean',
          title: 'Abilita calendario disponibilità partner',
        },
        dateInterval: {
          type: 'object',
          title:
            'Intervallo di date in cui i prodotti del partner sono disponibili',
          properties: {
            from: {
              type: 'string',
              title: 'Data inizio',
              format: 'date',
            },
            to: {
              type: 'string',
              title: 'Data fine',
              format: 'date',
            },
          },
        },
        exceptDates: {
          type: 'array',
          title:
            'Escludi le date del periodo in cui il partner non è disponibile',
          items: {
            type: 'string',
            format: 'date',
          },
        },
        onlyDates: {
          type: 'array',
          title: 'Specifica le singole date in cui il partner è disponibile',
          items: {
            type: 'string',
            format: 'date',
          },
        },
      },
    },
    additionalInfo: {
      type: 'array',
      title: 'Informazioni addizionali',
      items: {
        type: 'object',
        properties: {
          ...buildTranslatedSchemaAttributes({
            header: {
              title: 'Header',
              type: 'string',
            },
            paragraph: {
              title: 'Paragrafo',
              type: 'string',
            },
          }),
        },
      },
    },
    modalInfo: {
      type: 'array',
      title: 'Informazioni modale',
      items: {
        type: 'object',
        properties: {
          ...buildTranslatedSchemaAttributes({
            text: {
              title: 'Testo',
              type: 'string',
            },
          }),
          type: {
            type: 'string',
            title: 'Tipo',
            items: {
              type: 'string',
              enum: MODAL_INFO_TYPE_ENUMS,
              enumNames: MODAL_INFO_TYPE_ENUM_NAMES,
            },
          },
        },
      },
    },
    productTypes: {
      type: 'array',
      title: 'Tipologie di prodotti',
      items: {
        type: 'string',
        enum: PRODUCT_TYPE_ENUMS,
        enumNames: PRODUCT_TYPE_ENUM_NAMES,
      },
    },
    address: {
      type: 'string',
      title: 'Indirizzo',
    },
    location: {
      type: 'string',
      title: 'Località',
    },
    externalLinks: {
      type: 'array',
      title: 'Link esterni',
      items: {
        type: 'object',
        properties: {
          ...buildTranslatedSchemaAttributes({
            title: {
              title: 'Titolo',
              type: 'string',
            },
            url: {
              title: 'Url',
              type: 'string',
            },
          }),
        },
      },
    },
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
              // format: 'data-url',
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
  required: ['name', 'type', 'permalink'],
  dependencies: {
    type: {
      oneOf: [
        {
          properties: {
            type: { enum: ['district'] },
          },
        },
        {
          properties: {
            type: { enum: without(PARTNER_TYPE_ENUMS, 'district') },
          },
          required: ['districtUID'],
        },
      ],
    },
  },
};

export default schema;
