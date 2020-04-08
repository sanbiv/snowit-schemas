"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const priceRule = {
    type: 'string',
    title: 'Regola prezzo',
    enum: constants_1.PRICE_RULES,
    enumNames: constants_1.PRICE_RULES_NAMES,
    default: constants_1.PRICE_RULE_DEFAULT_VALUE,
};
exports.priceRule = priceRule;
const priceDuration = {
    type: 'string',
    title: 'Prezzo/durata',
    enum: constants_1.PRICE_RULE_DURATION,
    enumNames: constants_1.PRICE_RULE_DURATION_NAMES,
    default: constants_1.PRICE_RULE_DURATION[0],
};
exports.priceDuration = priceDuration;
const fixedPrice = {
    type: 'object',
    title: 'Prezzo fisso',
    properties: {
        price: {
            type: 'number',
            title: 'Prezzo',
            minimum: 0,
        },
        discount: {
            type: 'number',
            title: 'Sconto %',
        },
        externalPrice: {
            type: 'number',
            title: 'Prezzo esterno',
            minimum: 0,
        },
    },
};
exports.fixedPrice = fixedPrice;
const pricePerDay = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            title: 'Nome',
        },
        price: {
            type: 'number',
            title: 'Prezzo',
            minimum: 0,
        },
        discount: {
            type: 'number',
            title: 'Sconto %',
        },
        date: {
            type: 'string',
            title: 'Data',
            format: 'date',
        },
        externalPrice: {
            type: 'number',
            title: 'Prezzo esterno',
            minimum: 0,
        },
    },
};
exports.pricePerDay = pricePerDay;
const dynamicPrice = {
    type: 'object',
    properties: {
        price: {
            type: 'number',
            title: 'Prezzo',
            minimum: 0,
        },
        seasonUID: {
            type: 'string',
            title: 'Stagione (periodo)',
        },
        discount: {
            type: 'number',
            title: 'Sconto %',
        },
        externalPrice: {
            type: 'number',
            title: 'Prezzo esterno',
            minimum: 0,
        },
        dynamicDiscounts: {
            type: 'array',
            title: 'Sconti dinamici',
            items: {
                type: 'object',
                required: ['daysBefore', 'discount'],
                properties: {
                    daysBefore: {
                        type: 'number',
                        title: 'Giorni',
                        minimum: 0,
                    },
                    discount: {
                        type: 'number',
                        title: 'Sconto',
                        minimum: 0,
                        maximum: 100,
                    },
                },
            },
        },
    },
};
exports.dynamicPrice = dynamicPrice;
const schema = {
    type: 'object',
    required: ['priceRule'],
    properties: {
        priceRule,
        fixedPrice: Object.assign({}, fixedPrice),
        fixedPricePerDuration: Object.assign(Object.assign({}, fixedPrice), { properties: Object.assign(Object.assign({}, fixedPrice.properties), { duration: priceDuration }) }),
        dynamicPrices: {
            type: 'array',
            title: 'Listino prezzi stagionali',
            items: dynamicPrice,
        },
        prices: {
            type: 'array',
            title: 'Listino prezzi (giorno per giorno)',
            items: pricePerDay,
        },
    },
};
exports.default = schema;
