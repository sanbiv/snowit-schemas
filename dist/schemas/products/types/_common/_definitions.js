"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../../utils/i18n");
const constants_1 = require("../../constants");
const commonData = (params = {}) => {
    let schema = Object.assign(Object.assign(Object.assign({ withoutCommissions: {
            type: 'boolean',
            title: 'Senza commissione',
            default: false,
        }, snowitCommission: {
            type: 'number',
            title: 'Commissione snowit',
        } }, i18n_1.buildTranslatedSchemaAttributes({
        name: { title: 'Nome del prodotto', required: true },
        permalink: {
            type: 'string',
            title: 'Permalink',
            required: true,
        },
        description: 'Descrizione',
        feature: {
            type: 'string',
            title: 'Feature (dettagli aggiuntivi)',
        },
    })), { cover: {
            type: 'string',
            title: 'Cover',
        }, addressRequired: {
            type: 'boolean',
            title: 'Richiedi indirizzo!',
        }, optionalAssociation: {
            type: 'boolean',
            title: 'Associazione opzionale',
        }, unavailable: {
            type: 'boolean',
            title: 'Prodotto non disponibile',
            default: false,
        }, hidden: {
            type: 'boolean',
            title: 'Prodotto nascosto nei risultati',
            description: 'Usare questa modalità per vendere prodotti che devono essere disponibili in acquisto ma non mostrati nella lista',
            default: false,
        }, highlighted: {
            type: 'boolean',
            title: 'In evidenza',
            default: false,
        }, districtUID: {
            type: 'string',
            title: 'Distretto',
            default: '',
        }, partnerUID: {
            type: 'string',
            title: 'Partner',
            default: '',
        }, tenant: {
            type: 'boolean',
            title: 'Tenant',
            default: false,
        }, availability: {
            $ref: '#/definitions/availability',
        }, links: {
            $ref: '#/definitions/links',
        }, zoneUIDS: {
            type: 'object',
            title: 'Zone del distretto',
            properties: {},
        }, phoneRequired: {
            type: 'boolean',
            title: 'Telefono obbligatorio',
        }, wordpressGalleryActive: {
            type: 'boolean',
            title: 'Galleria Wordpress',
        }, wordpressGalleryTag: {
            type: 'string',
            title: 'Tag Wordpress',
        }, providerName: {
            type: 'string',
            title: 'Provider',
            enum: constants_1.PROVIDER_ENUMS,
            enumNames: constants_1.PROVIDER_ENUM_NAMES,
        } }), i18n_1.buildTranslatedSchemaAttributes({
        extraInfo: {
            type: 'string',
            title: 'Extra Info',
        },
        mailInfo: {
            type: 'string',
            title: 'Mail Info',
        },
    }));
    if (params.type !== 'bundle') {
        schema.venueUIDS = {
            type: 'object',
            title: 'Sedi del partner in cui è disponibile',
            properties: {},
        };
    }
    return schema;
};
exports.commonData = commonData;
const productItems = {
    type: 'array',
    title: 'Prodotti inclusi nel coupon/gift card',
    items: {
        type: 'object',
        required: ['productUID'],
        properties: {
            productUID: {
                type: 'string',
                title: 'Prodotto',
            },
        },
    },
};
exports.productItems = productItems;
const durationHours = {
    type: 'number',
    title: 'Durata in ore',
    enum: constants_1.DURATION_HOURS,
    enumNames: constants_1.DURATION_HOURS_NAMES,
};
exports.durationHours = durationHours;
const availability = {
    type: 'object',
    title: 'Disponibilità',
    properties: {
        daysAdvance: {
            type: 'number',
            title: 'Numero di giorni prenotazione',
            default: 0,
        },
        quantity: {
            type: 'number',
            title: 'Quantità disponibile',
        },
        quantityPerVenue: {
            type: 'boolean',
            title: 'Disponibilità per sede?',
        },
        calendarEnabled: {
            type: 'boolean',
            title: 'Abilita calendario disponibilità prodotto',
        },
        dateInterval: {
            type: 'object',
            title: 'Intervallo di date in cui il prodotto è disponibile',
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
            title: 'Escludi le date del periodo in cui il prodotto non è disponibile',
            items: {
                type: 'string',
                format: 'date',
            },
        },
        onlyDates: {
            type: 'array',
            title: 'Specifica le singole date in cui il prodotto è disponibile',
            items: {
                type: 'string',
                format: 'date',
            },
        },
    },
};
exports.availability = availability;
const links = {
    type: 'array',
    title: 'Collegamenti',
    items: {
        type: 'object',
        required: ['text', 'href'],
        properties: {
            href: {
                type: 'string',
                title: 'Link',
            },
            text: {
                type: 'string',
                title: 'Testo del link',
            },
            target: {
                type: 'string',
                enum: ['_blank', '_self'],
                enumNames: ['Nuova pagina', 'Stessa pagina (default)'],
                default: '_self',
            },
        },
    },
};
exports.links = links;
