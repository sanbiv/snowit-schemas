"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("./categories");
const tenants_1 = require("./tenants");
const types_1 = require("./types");
const schema = formData => {
    let required = ['title', 'category', 'description', 'link', 'price'];
    return {
        type: 'object',
        required,
        properties: {
            title: {
                type: 'string',
                title: 'Titolo',
                default: '',
            },
            category: {
                type: 'string',
                title: 'Categoria',
                enum: categories_1.WIDGET_CATEGORIES_ENUMS,
                enumNames: categories_1.WIDGET_CATEGORIES_ENUM_NAMES,
            },
            description: {
                type: 'string',
                title: 'Descrizione',
                default: '',
            },
            type: {
                type: 'string',
                title: 'Tipo',
                default: '',
                enum: types_1.WIDGET_TYPES_ENUMS,
                enumNames: types_1.WIDGET_TYPES_ENUM_NAMES,
            },
            image: {
                type: 'string',
                title: 'Immagine',
            },
            link: {
                type: 'string',
                title: 'Link',
                default: '',
            },
            target: {
                type: 'string',
                title: 'Target',
                enum: ['', '_blank'],
                enumNames: ['None', '_blank'],
            },
            position: {
                type: 'number',
                title: 'Posizione',
                default: 0,
            },
            price: {
                type: 'number',
                title: 'Prezzo',
                default: 0,
            },
            partnerUID: {
                type: 'string',
                title: 'Partner',
            },
            tenant: {
                type: 'string',
                title: 'Tenant',
                enum: ['', ...tenants_1.WIDGET_TENANTS_ENUMS],
                enumNames: ['', ...tenants_1.WIDGET_TENANTS_ENUM_NAMES],
                default: '',
            },
            active: {
                type: 'boolean',
                title: 'Attivo?',
                default: true,
            },
        },
    };
};
exports.default = schema;
