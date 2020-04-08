"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const translations = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            title: 'Nome',
        },
        bonus: {
            type: 'array',
            items: {
                title: 'Bonus',
                type: 'string',
            },
        },
        bonusShortText: {
            type: 'string',
            title: 'Bonus (descrizione breve)',
        },
        termsCond: {
            type: 'string',
            title: 'Condizioni',
        },
    },
};
exports.translations = translations;
