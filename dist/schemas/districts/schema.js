"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const types_1 = require("../products/types");
const schema = {
    type: 'object',
    required: ['district', 'name'],
    properties: {
        district: {
            type: 'string',
            title: 'Codice',
            description: 'Codice stazione (deve essere univoco)',
        },
        name: {
            type: 'string',
            title: 'Nome visualizzato',
        },
        permalink: {
            type: 'string',
            title: 'Permalink',
        },
        icon: {
            type: 'string',
            title: 'Logo del distretto',
        },
        nation: {
            type: 'string',
            title: 'Nazione',
        },
        active: {
            type: 'boolean',
            title: 'Attivo?',
        },
        purchasable: {
            type: 'boolean',
            title: 'Acquisto attivo?',
        },
        popupAlert: {
            type: 'string',
            title: 'Popup alert',
        },
        bccOrderEmail: {
            type: 'string',
            title: 'Email BCC',
        },
        productTypes: {
            type: 'object',
            title: 'Tipologia di prodotti disponibili nel comprensorio',
            properties: reduce_1.default(types_1.PRODUCT_TYPES, (memo, productTypeDetails, productType) => {
                const properties = memo;
                properties[productType] = {
                    type: 'boolean',
                    title: productTypeDetails.text,
                };
                return properties;
            }, {}),
        },
    },
};
exports.default = schema;
