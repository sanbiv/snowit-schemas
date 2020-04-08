"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_common/_definitions");
const schema = {
    definitions: {
        durationHours: _definitions_1.durationHours,
        availability: _definitions_1.availability,
        links: _definitions_1.links,
    },
    type: 'object',
    required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
    properties: Object.assign(Object.assign({ type: {
            type: 'string',
            title: 'Tipo prodotto',
            default: 'hotel',
            enum: ['hotel'],
        } }, _definitions_1.commonData()), { durationHours: {
            $ref: '#/definitions/durationHours',
        }, categoryUID: {
            type: 'string',
            title: 'Categoria',
            default: '',
        }, partnerDelayedPayment: {
            type: 'boolean',
            title: 'Pagamento al partner in seconda instanza',
        }, bundle: {
            type: 'boolean',
            title: 'Vendita abbinata ad altri prodotti',
        }, options: {
            type: 'object',
            title: 'Seleziona le opzioni disponibili per questo prodotto',
            properties: {},
        } }),
};
exports.default = schema;
