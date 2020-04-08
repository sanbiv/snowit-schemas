"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const types_1 = require("./types");
const constants_1 = require("../products/constants");
const schema = {
    type: 'object',
    required: [
        'code',
        'name',
        'type',
        'districtUID',
        'products',
        'usageLeft',
        'usageMax',
        'validUntil',
    ],
    properties: {
        code: {
            type: 'string',
            title: 'Codice coupon',
        },
        name: {
            type: 'string',
            title: 'Nome del coupon',
        },
        type: {
            type: 'string',
            title: 'Richiedi indirizzo!',
            enum: types_1.COUPON_TYPE_ENUMS,
            enumNames: types_1.COUPON_TYPE_ENUM_NAMES,
            default: lodash_1.default.first(types_1.COUPON_TYPE_ENUMS),
        },
        description: {
            type: 'string',
            title: 'Descrizione',
            default: '',
        },
        districtUID: {
            type: 'string',
            title: 'Distretto',
            default: '',
        },
        categoryUID: {
            type: 'string',
            title: 'Categoria',
            default: '',
        },
        durationHours: {
            type: 'number',
            title: 'Durata in ore',
            enum: constants_1.DURATION_HOURS,
            enumNames: constants_1.DURATION_HOURS_NAMES,
        },
        externalUID: {
            type: 'string',
            title: 'ID esterno (del comprensorio)',
        },
        partnerDelayedPayment: {
            type: 'boolean',
            title: 'Pagamento al comprensorio in seconda instanza',
        },
        price: {
            type: 'number',
            title: 'Prezzo del prodotto',
        },
        _productItems: {
            type: 'array',
            title: 'Prodotti inclusi nel coupon/gift card',
            items: {
                type: 'object',
                required: ['productUID'],
                properties: {
                    productUID: {
                        type: 'string',
                        title: 'Prodotto',
                    },
                },
            },
        },
    },
};
exports.default = schema;
