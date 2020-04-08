"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const first_1 = __importDefault(require("lodash/first"));
const without_1 = __importDefault(require("lodash/without"));
const types_1 = require("../products/types/");
const types_2 = require("./types");
const tenants_1 = require("../widgets/tenants");
const i18n_1 = require("../../../utils/i18n");
const constants_1 = require("./constants");
const MODAL_INFO_TYPE_ENUMS = ['parking', 'POI'];
const MODAL_INFO_TYPE_ENUM_NAMES = ['Parcheggio', 'POI'];
const schema = {
    type: 'object',
    properties: Object.assign(Object.assign({ name: {
            type: 'string',
            title: 'Nome partner',
        }, permalink: {
            type: 'string',
            title: 'Permalink partner',
        }, cover: {
            type: 'string',
            title: 'Cover',
        }, pageTexts: {
            type: 'object',
            title: 'Testi pagina',
            properties: Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
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
            })),
        } }, i18n_1.buildTranslatedSchemaAttributes({
        openingTime: {
            title: 'Orari di apertura',
            type: 'string',
        },
    })), { type: {
            type: 'string',
            title: 'Tipo partner',
            enum: types_2.PARTNER_TYPE_ENUMS,
            enumNames: types_2.PARTNER_TYPE_ENUM_NAMES,
            default: first_1.default(types_2.PARTNER_TYPE_ENUMS),
        }, districtUID: {
            type: 'string',
            title: 'Distretto',
            default: '',
        }, tenant: {
            type: 'string',
            title: 'Tenant',
            enum: ['', ...tenants_1.WIDGET_TENANTS_ENUMS],
            enumNames: ['', ...tenants_1.WIDGET_TENANTS_ENUM_NAMES],
            default: '',
        }, parentUID: {
            type: 'string',
            title: 'Parent',
            default: '',
        }, active: {
            type: 'boolean',
            title: 'Attivo?',
        }, purchasable: {
            type: 'boolean',
            title: 'Acquisto attivo?',
        }, public: {
            type: 'boolean',
            title: 'Pubblico?',
        }, snowitCommission: {
            type: 'number',
            title: 'Commissioni snowit (%)',
        }, bccOrderEmail: {
            type: 'string',
            title: 'Email ricezione notifiche ordine',
            format: 'email',
        }, provider: {
            type: 'string',
            title: 'Provider',
            enum: constants_1.PROVIDERS_EMUMS,
            enumNames: constants_1.PROVIDERS_EMUM_NAMES,
        }, skidata: {
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
        }, axess: {
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
        }, skiwork: {
            type: 'object',
            title: 'Skiwork',
            properties: {
                partnerCode: { type: 'string', title: 'Codice scuola' },
            },
        }, easyrent: {
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
        }, openingCalendar: {
            type: 'object',
            title: 'Informazioni addizionali',
            properties: {
                calendarEnabled: {
                    type: 'boolean',
                    title: 'Abilita calendario disponibilità partner',
                },
                dateInterval: {
                    type: 'object',
                    title: 'Intervallo di date in cui i prodotti del partner sono disponibili',
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
                    title: 'Escludi le date del periodo in cui il partner non è disponibile',
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
        }, additionalInfo: {
            type: 'array',
            title: 'Informazioni addizionali',
            items: {
                type: 'object',
                properties: Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
                    header: {
                        title: 'Header',
                        type: 'string',
                    },
                    paragraph: {
                        title: 'Paragrafo',
                        type: 'string',
                    },
                })),
            },
        }, modalInfo: {
            type: 'array',
            title: 'Informazioni modale',
            items: {
                type: 'object',
                properties: Object.assign(Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
                    text: {
                        title: 'Testo',
                        type: 'string',
                    },
                })), { type: {
                        type: 'string',
                        title: 'Tipo',
                        items: {
                            type: 'string',
                            enum: MODAL_INFO_TYPE_ENUMS,
                            enumNames: MODAL_INFO_TYPE_ENUM_NAMES,
                        },
                    } }),
            },
        }, productTypes: {
            type: 'array',
            title: 'Tipologie di prodotti',
            items: {
                type: 'string',
                enum: types_1.PRODUCT_TYPE_ENUMS,
                enumNames: types_1.PRODUCT_TYPE_ENUM_NAMES,
            },
        }, address: {
            type: 'string',
            title: 'Indirizzo',
        }, location: {
            type: 'string',
            title: 'Località',
        }, externalLinks: {
            type: 'array',
            title: 'Link esterni',
            items: {
                type: 'object',
                properties: Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
                    title: {
                        title: 'Titolo',
                        type: 'string',
                    },
                    url: {
                        title: 'Url',
                        type: 'string',
                    },
                })),
            },
        }, metatags: {
            title: 'Metatags',
            type: 'object',
            properties: Object.assign(Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
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
            })), { robots: {
                    type: 'string',
                    title: 'Robots',
                    default: '',
                }, facebook: {
                    title: 'Facebook',
                    type: 'object',
                    properties: Object.assign(Object.assign({ type: {
                            type: 'string',
                            title: 'Tipo',
                            default: '',
                        } }, i18n_1.buildTranslatedSchemaAttributes({
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
                    })), { image: {
                            type: 'string',
                            title: 'Immagine',
                        }, siteName: {
                            type: 'string',
                            title: 'Nome sito',
                            default: '',
                        } }),
                } }),
        } }),
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
                        type: { enum: without_1.default(types_2.PARTNER_TYPE_ENUMS, 'district') },
                    },
                    required: ['districtUID'],
                },
            ],
        },
    },
};
exports.default = schema;
