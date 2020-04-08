"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chunk_1 = __importDefault(require("lodash/chunk"));
const reduce_1 = __importDefault(require("lodash/reduce"));
const types_1 = require("../products/types");
exports.default = {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
        { district: { width: 5 }, name: { width: 6 }, permalink: { width: 5 } },
        { icon_on: { width: 10 }, nation: { width: 6 } },
        { purchasable: { width: 4 }, active: { width: 4 } },
        { popupAlert: { width: 16, doShow: ({ formData }) => formData.active } },
        { productTypes: { width: 16 } },
    ],
    popupAlert: {
        'ui:widget': 'textarea',
    },
    productTypes: {
        'ui:field': 'layout',
        'ui:layout': chunk_1.default(types_1.PRODUCT_TYPE_ENUMS, 3).map(row => reduce_1.default(row, (cols, type) => {
            cols[type] = { width: 5 };
            return cols;
        }, {})),
    },
};
