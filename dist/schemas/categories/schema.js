"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const i18n_1 = require("../../../utils/i18n");
const tenants_1 = require("../widgets/tenants");
const schema = {
    type: 'object',
    properties: Object.assign(Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
        name: { title: 'Nome della categoria', required: true },
        permalink: {
            type: 'string',
            title: 'Permalink',
        },
    })), { taxonomyType: {
            type: 'string',
            title: 'Tassonomia',
            default: 'skipass',
            enum: constants_1.TAXONOMY_TYPES,
            enumNames: constants_1.TAXONOMY_TYPE_NAMES,
        }, image: {
            type: 'string',
            title: 'Immagine',
        }, districtUID: {
            type: 'string',
            title: 'Distretto',
            default: '',
        }, partnerUID: {
            type: 'string',
            title: 'Partner',
            default: '',
        }, tenant: {
            type: 'string',
            title: 'Tenant',
            enum: ['', ...tenants_1.WIDGET_TENANTS_ENUMS],
            enumNames: ['', ...tenants_1.WIDGET_TENANTS_ENUM_NAMES],
            default: '',
        }, externalUID: {
            type: 'string',
            title: 'ID esterno',
        }, alwaysPurchasable: {
            type: 'boolean',
            title: 'Sempre acquistabile',
        }, ageMin: {
            type: 'number',
            title: 'Età minima',
        }, ageMax: {
            type: 'number',
            title: 'Età massima',
        }, bornAfter: {
            type: 'string',
            title: 'Nato dopo il',
            format: 'date',
        }, bornBefore: {
            type: 'string',
            title: 'Nato prima del',
            format: 'date',
        }, documentsRequired: {
            type: 'boolean',
            title: 'Documenti richiesti?',
        }, position: {
            type: 'number',
            title: 'Posizione',
        }, subCategories: {
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
        } }),
    required: ['nameTranslations', 'districtUID', 'taxonomyType'],
};
exports.default = schema;
