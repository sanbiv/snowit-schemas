"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
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
            default: 'bundle',
            enum: ['bundle'],
        } }, _definitions_1.commonData({ type: 'bundle' })), { categoryUID: {
            type: 'string',
            title: 'Categoria',
            default: '',
        }, durationHours: {
            $ref: '#/definitions/durationHours',
        }, partnerDelayedPayment: {
            type: 'boolean',
            title: 'Pagamento al partner in seconda instanza',
        }, _productItems: {
            type: 'array',
            title: 'Prodotti nel bundle',
            items: {
                type: 'object',
                properties: {
                    productUID: {
                        title: 'Seleziona prodotto',
                        type: 'string',
                    },
                    quantity: {
                        title: 'Qta',
                        type: 'number',
                        default: 1,
                    },
                },
            },
        }, options: {
            type: 'object',
            title: 'Seleziona le opzioni disponibili per questo prodotto',
            properties: {},
        }, adults: {
            type: 'number',
            title: 'Adulti',
        }, juniors: {
            type: 'number',
            title: 'Junior',
        }, kids: {
            type: 'number',
            title: 'Kids',
        }, durationType: {
            type: 'string',
            title: 'Tipo durata',
            default: 'day',
            enumNames: constants_1.DURATION_TYPE_NAMES,
            enum: constants_1.DURATION_TYPES,
        } }),
};
exports.default = schema;
