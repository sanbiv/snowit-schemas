"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../utils/i18n");
const types_1 = require("../types");
const schema = {
    type: 'object',
    required: ['nameTranslations'],
    properties: Object.assign(Object.assign({ productType: {
            type: 'string',
            title: 'Tipologia prodotto',
            enum: types_1.PRODUCT_TYPE_ENUMS,
            enumNames: types_1.PRODUCT_TYPE_ENUM_NAMES,
        } }, i18n_1.buildTranslatedSchemaAttributes({
        name: { title: 'Nome del prodotto', required: true },
        description: 'Descrizione',
    })), { addressRequired: {
            type: 'boolean',
            title: 'Questa opzione richiede indirizzo',
            default: false,
        }, cover: {
            type: 'string',
            title: 'Immagine',
        }, externalUID: {
            type: 'string',
            title: 'UID Esterno',
        } }),
};
exports.default = schema;
