"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_common/_definitions");
const constants_1 = require("../../constants");
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
            default: 'experience',
            enum: ['experience'],
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
        }, adults: {
            type: 'number',
            title: 'Adulti (numero di persone)',
        }, durationType: {
            type: 'string',
            title: 'Tipo durata',
            default: 'day',
            enumNames: constants_1.DURATION_TYPE_NAMES,
            enum: constants_1.DURATION_TYPES,
        } }),
};
exports.default = schema;
