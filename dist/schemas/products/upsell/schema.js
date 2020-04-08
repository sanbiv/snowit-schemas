"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const schema = ({ product }) => {
    const jsonschema = {
        type: 'object',
        properties: {
            upsells: {
                type: 'array',
                items: {
                    type: 'string',
                },
                title: 'Upsells',
            },
            crossSells: {
                type: 'object',
                title: 'Cross-sells',
                properties: {
                    productTypes: {
                        title: 'Tipologie di prodotto',
                        type: 'array',
                        items: {
                            type: 'string',
                            enum: types_1.PRODUCT_TYPE_ENUMS.filter(item => {
                                if (!product)
                                    return false;
                                return item !== product.type;
                            }),
                            enumNames: types_1.PRODUCT_TYPE_ENUM_NAMES.filter((item, key) => {
                                if (!product)
                                    return false;
                                return key !== types_1.PRODUCT_TYPE_ENUMS.indexOf(product.type);
                            }),
                        },
                    },
                },
            },
            bondedProducts: {
                type: 'array',
                items: {
                    type: 'string',
                },
                title: 'Prodotti vincolati',
            },
        },
    };
    return jsonschema;
};
exports.default = schema;
