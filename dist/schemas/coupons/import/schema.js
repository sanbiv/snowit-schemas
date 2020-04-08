"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const schema = {
    type: 'object',
    required: ['couponCodes', 'quantity', 'type'],
    properties: {
        couponCodes: {
            type: 'string',
            title: 'Codici coupons',
            description: 'Puoi inserire i codici coupons separati da virgola, spazio, ritorno a capo o punte e virgola. Eventuali codici esistenti verranno ignorati. Non sono permessi codici contenenti . # $ [ o ]',
        },
        quantity: {
            type: 'number',
            title: 'Indica il numero di utilizzi di un codice',
            default: 1,
        },
        type: {
            type: 'string',
            title: 'Tipo codice coupon da generare',
            enum: types_1.COUPON_TYPE_ENUMS,
            enumNames: types_1.COUPON_TYPE_ENUM_NAMES,
            default: types_1.DEFAULT_COUPON_TYPE,
        },
        setExplicitDates: {
            type: 'boolean',
            title: 'Imposta date specifiche',
            default: false,
        },
        validFrom: {
            type: 'string',
            title: 'Valido dal',
            format: 'date',
            default: '2019-12-01',
        },
        validUntil: {
            type: 'string',
            title: 'Valido fino al',
            format: 'date',
            default: '2020-05-31',
        },
        onlyDates: {
            type: 'array',
            title: 'Indica le date in cui rendere riscattabile il coupon',
            items: {
                type: 'string',
                title: 'Data',
                format: 'date',
            },
        },
        excludedDates: {
            type: 'array',
            title: 'Date escluse (non è possibile riscattare il coupon)',
            items: {
                type: 'string',
                title: 'Data',
                format: 'date',
            },
        },
    },
};
exports.default = schema;
