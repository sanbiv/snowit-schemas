"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const types_1 = require("./types");
const types_2 = require("../products/types");
const i18n_1 = require("../../../utils/i18n");
const schema = {
    type: 'object',
    properties: Object.assign(Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
        name: { title: 'Titolo', required: true },
        description: 'Descrizione',
    })), { type: {
            type: 'string',
            title: 'Tipo sconto',
            enum: types_1.DISCOUNT_TYPE_ENUMS,
            enumNames: types_1.DISCOUNT_TYPE_ENUM_NAMES,
            default: types_1.DEFAULT_TYPE,
        }, code: {
            type: 'string',
            title: 'Codice sconto',
        }, active: {
            type: 'boolean',
            title: 'Attivo?',
            default: true,
        }, value: {
            type: 'number',
            title: 'Valore/importo sconto',
        }, combinable: {
            type: 'boolean',
            title: 'Cumulabile con altri codici sconto',
            description: 'Un codice può essere una sola volta per ordine',
        }, combinableWithProductDiscounts: {
            type: 'boolean',
            title: 'Cumulabile con altri sconti sui prodotto',
        }, minOrderValue: {
            type: 'number',
            title: "Valore minimo dell'ordine",
            description: "Lo sconto sarà valido solo se l'ordine è uguale o superiore al valore indicato",
        }, minDiscountValue: {
            type: 'number',
            title: 'Importo sconto minimo',
            description: 'Se impostato, lo sconto sarà uguale o superiore al valore indicato',
        }, maxDiscountValue: {
            type: 'number',
            title: 'Importo sconto massimo',
            description: 'Se impostato, lo sconto sarà inferiore o uguale al valore indicato',
        }, allDistricts: {
            type: 'boolean',
            title: 'Tutti i distretti?',
            default: true,
        }, districtUIDS: {
            type: 'array',
            title: 'Distretti in cui è valido lo sconto',
            default: [],
            items: {
                type: 'string',
            },
        }, allPartners: {
            type: 'boolean',
            title: 'Tutti i partner?',
            default: true,
        }, partnerUIDS: {
            type: 'array',
            title: 'Partners per cui è valido lo sconto',
            default: [],
            items: {
                type: 'string',
            },
        }, allCategories: {
            type: 'boolean',
            title: 'Tutti le categorie?',
            default: true,
        }, categoryUIDS: {
            type: 'array',
            title: 'Categorie  per cui è valido lo sconto',
            default: [],
            items: {
                type: 'string',
            },
        }, productTypes: {
            type: 'object',
            title: 'Tipologia prodotti per cui è valido lo sconto',
            properties: reduce_1.default(types_2.PRODUCT_TYPES, (memo, productTypeDetails, productType) => {
                const properties = memo;
                properties[productType] = {
                    type: 'boolean',
                    title: productTypeDetails.text,
                    default: true,
                };
                return properties;
            }, {}),
        }, allProducts: {
            type: 'boolean',
            title: 'Tutti i prodotti?',
            default: true,
        }, productUIDS: {
            type: 'array',
            title: 'Prodotti per cui è valido lo sconto',
            default: [],
            items: {
                type: 'string',
            },
        }, dateInterval: {
            type: 'object',
            required: ['from', 'to'],
            title: 'Intervallo di date in cui è valido lo sconto',
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
        }, onlyDates: {
            type: 'array',
            title: 'Sconto valido solo nelle date specificate',
            items: {
                type: 'string',
                format: 'date',
                title: 'Data valida',
            },
        }, exceptDates: {
            type: 'array',
            title: 'Date in cui lo sconto non è valido',
            items: {
                type: 'string',
                format: 'date',
                title: 'Data da escludere',
            },
        }, usageMax: {
            type: 'number',
            title: 'Numero di utilizzi del codice sconto (in globale)',
        }, usagePerUser: {
            type: 'number',
            default: 1,
            title: 'Numero di utilizzi per utente',
        }, validateItemDate: {
            type: 'boolean',
            title: 'Verica validità per data prodotto',
            description: 'Se flaggato, controlla la data in cui viene utilizzato il prodotto (quindi la data del prodotto acquistato)',
        } }),
    required: [
        'nameTranslations',
        'type',
        'value',
        'active',
        'productTypes',
        'dateInterval',
        'code',
    ],
};
exports.default = schema;
