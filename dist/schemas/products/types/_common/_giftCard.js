"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const IconProductType_1 = __importDefault(require("../../../../../screens/Products/components/IconProductType"));
const reduce_1 = __importDefault(require("lodash/reduce"));
const chunk_1 = __importDefault(require("lodash/chunk"));
const each_1 = __importDefault(require("lodash/each"));
const filter_1 = __importDefault(require("lodash/filter"));
const index_1 = require("../index");
const _definitions_1 = require("./_definitions");
const hasDuration = type => {
    if (type === 'snowitcard')
        return false;
    return true;
};
const schema = ({ formData }) => {
    const jsonSchema = {
        type: 'object',
        title: 'Regole e prodotti inclusi',
        properties: {
            productTypes: {
                type: 'object',
                title: 'Tipologia prodotti per cui è valido lo sconto',
                properties: reduce_1.default(index_1.PRODUCT_TYPES, (memo, productTypeDetails, productType) => {
                    if (productType === 'coupon')
                        return memo;
                    const properties = memo;
                    properties[productType] = {
                        type: 'boolean',
                        title: productTypeDetails.text,
                        default: true,
                    };
                    return properties;
                }, {}),
            },
        },
    };
    const defaultProductDetailsSchema = ({ productType }) => {
        const schema = {
            type: 'object',
            properties: {
                quantity: {
                    type: 'number',
                    title: 'Quantità inclusa',
                    default: 1,
                },
                allCategories: {
                    type: 'boolean',
                    title: 'Tutte le categorie',
                    default: true,
                },
                categoryUIDS: {
                    type: 'array',
                    title: 'Categorie incluse',
                    items: {
                        title: `Categoria ${index_1.PRODUCT_TYPES[productType].text}`,
                        type: 'string',
                    },
                },
            },
        };
        if (hasDuration(productType)) {
            schema.properties = Object.assign(Object.assign({}, schema.properties), { durationHours: Object.assign(Object.assign({}, _definitions_1.durationHours), { title: 'Durata massima' }) });
        }
        return schema;
    };
    each_1.default(index_1.PRODUCT_TYPES, (productDetails, productType) => {
        if (productType === 'coupon')
            return;
        let productTypeSchema = Object.assign({}, defaultProductDetailsSchema({ productType }));
        jsonSchema.properties[productType] = productTypeSchema;
    });
    return jsonSchema;
};
exports.schema = schema;
const uiSchema = ({ formData }) => {
    const jsonUiSchema = {
        'ui:field': 'layout',
        'ui:layout': [
            {
                productTypes: { width: 16 },
            },
        ],
        productTypes: {
            'ui:field': 'layout',
            'ui:layout': chunk_1.default(filter_1.default(index_1.PRODUCT_TYPE_ENUMS, type => type !== 'coupon'), 5).map(row => reduce_1.default(row, (cols, type) => {
                cols[type] = { width: 3 };
                return cols;
            }, {})),
        },
    };
    each_1.default(index_1.PRODUCT_TYPES, (productDetails, productType) => {
        jsonUiSchema['ui:layout'].push({
            [productType]: {
                width: 16,
                doShow: ({ formData }) => formData.productTypes[productType],
            },
        });
        let taxonomyType = productType;
        if (productType === 'experience') {
            taxonomyType = 'experienceConcept';
        }
        jsonUiSchema[productType] = {
            'ui:field': 'layout',
            'ui:layoutOptions': {
                gridProps: {
                    verticalAlign: 'middle',
                },
            },
            'ui:layout': [
                {
                    _: {
                        width: 1,
                        render: () => (<react_1.default.Fragment>
                <strong>{index_1.PRODUCT_TYPES[productType].text}</strong>
                <IconProductType_1.default type={productType} size="big"/>
              </react_1.default.Fragment>),
                        textAlign: 'left',
                    },
                    quantity: { width: 2 },
                    durationHours: {
                        width: 3,
                        doShow: () => hasDuration(productType),
                    },
                },
                {
                    _: {
                        width: 1,
                        render: () => null,
                    },
                    allCategories: { width: 3 },
                    categoryUIDS: {
                        width: 5,
                        doShow: ({ formData: data }) => !data.allCategories,
                    },
                },
            ],
            categoryUIDS: {
                items: {
                    'ui:widget': 'categoryPicker',
                    'ui:placeholder': 'Tutte le categorie',
                    'ui:options': {
                        allowClear: true,
                        taxonomyType,
                    },
                },
            },
        };
    });
    return jsonUiSchema;
};
exports.uiSchema = uiSchema;
