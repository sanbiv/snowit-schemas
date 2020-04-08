"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: 'object',
    properties: {
        priceCodes: {
            type: 'string',
            title: 'Inserisci gli id dei prodotti sui quali vuoi copiare le impostazioni',
            description: 'Puoi inserire gli id separati da spazio. ',
        },
    },
};
exports.default = schema;
