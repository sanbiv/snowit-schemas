"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: 'object',
    required: ['discountCodes', 'quantity'],
    properties: {
        discountCodes: {
            type: 'string',
            title: 'Codici sconto',
            description: 'Puoi inserire i codici sconto separati da spazio. Eventuali codici esistenti verranno ignorati. Non sono permessi codici contenenti . # $ [ o ]',
        },
        quantity: {
            type: 'number',
            title: 'Indica il numero di utilizzi di un codice',
            default: 1,
        },
    },
};
exports.default = schema;
