"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_common/_definitions");
const _giftCard_1 = require("../_common/_giftCard");
const schema = ({ formData }) => {
    const jsonSchema = {
        definitions: {
            productItems: _definitions_1.productItems,
            availability: _definitions_1.availability,
            links: _definitions_1.links,
            giftCardProductsRules: _giftCard_1.schema({ formData }),
        },
        type: 'object',
        required: ['type', 'nameTranslations', 'partnerUID', 'districtUID'],
        properties: Object.assign(Object.assign({ type: {
                type: 'string',
                title: 'Tipo prodotto',
                default: 'coupon',
                enum: ['coupon'],
            } }, _definitions_1.commonData()), { insuranceIncluded: {
                type: 'boolean',
                title: 'Assicurazione inclusa?',
                default: false,
            }, partnerDelayedPayment: {
                type: 'boolean',
                title: 'Pagamento al partner in seconda instanza',
                default: false,
            }, openGiftCard: {
                type: 'boolean',
                title: 'Imposta regole prodotti per la giftcard',
                default: true,
            }, _productItems: {
                $ref: '#/definitions/productItems',
                default: [],
            }, giftCardProductsRules: {
                $ref: '#/definitions/giftCardProductsRules',
            }, redeemAvailability: {
                type: 'object',
                title: 'Riscatto del coupon/giftcard',
                required: ['dateInterval'],
                default: {},
                properties: {
                    dateInterval: {
                        type: 'object',
                        title: 'Intervallo di date in cui il coupon/giftcard è riscattabile',
                        properties: {
                            from: {
                                type: 'string',
                                title: 'Data inizio',
                                format: 'date',
                            },
                            to: {
                                type: 'string',
                                title: 'Data fine',
                                format: 'date',
                            },
                        },
                    },
                    exceptDates: {
                        type: 'array',
                        title: 'Escludi le date del periodo in cui il coupon/gift-card non è riscattabile',
                        items: {
                            type: 'string',
                            format: 'date',
                        },
                    },
                    onlyDates: {
                        type: 'array',
                        title: 'Specifica le singole date in cui il coupon/gift-card è riscattabile',
                        items: {
                            type: 'string',
                            format: 'date',
                        },
                    },
                },
            }, options: {
                type: 'object',
                title: 'Seleziona le opzioni disponibili per questo prodotto',
                properties: {},
            } }),
    };
    return jsonSchema;
};
exports.default = schema;
