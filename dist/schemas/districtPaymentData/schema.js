"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: 'object',
    required: ['iban', 'bankName', 'accountholder'],
    properties: {
        iban: {
            type: 'string',
            title: 'IBAN',
        },
        bankName: {
            type: 'string',
            title: 'Nome banca',
        },
        accountHolder: {
            type: 'string',
            title: 'Intestato a',
        },
    },
};
exports.default = schema;
