"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_common/_definitions");
const schema = {
    definitions: {
        availability: _definitions_1.availability,
        links: _definitions_1.links,
    },
    type: 'object',
    required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
    properties: Object.assign(Object.assign({ type: {
            type: 'string',
            title: 'Tipo prodotto',
            default: 'snowitcard',
            enum: ['snowitcard'],
        }, default: {
            type: 'boolean',
            title: 'Carta di default',
            default: false,
        } }, _definitions_1.commonData()), { insuranceIncluded: {
            type: 'boolean',
            title: 'Assicurazione inclusa?',
            default: false,
        }, bundle: {
            type: 'boolean',
            title: 'Vendita abbinata ad altri prodotti',
        } }),
};
exports.default = schema;
