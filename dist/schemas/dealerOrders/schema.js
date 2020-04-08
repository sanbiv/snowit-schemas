"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: 'object',
    required: [],
    properties: {
        cash: {
            type: 'boolean',
            title: 'Consegna e gestione in cassa',
            default: false,
        },
        snowitcard: {
            type: 'string',
            title: 'Numero snowitcard',
        },
        orderItemUID: {
            type: 'string',
            title: 'Skipass a cui stai associando la card',
        },
        snowitcardUser: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    title: 'Nome',
                },
                surname: {
                    type: 'string',
                    title: 'Cognome',
                },
            },
        },
        dealerNotes: {
            type: 'string',
            title: 'Note sulla consegna',
        },
    },
};
exports.default = schema;
