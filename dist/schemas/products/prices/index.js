"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
exports.schema = schema_1.default;
const uiSchema_1 = __importDefault(require("./uiSchema"));
exports.uiSchema = uiSchema_1.default;
const optionSchema = {
    type: 'object',
    properties: {
        available: {
            type: 'boolean',
            title: 'Disponibile',
            default: true,
        },
        included: {
            type: 'boolean',
            title: 'Incluso nel prezzo?',
        },
        price: {
            type: 'number',
            title: 'Prezzo opzione',
        },
        ignoreQuantity: {
            type: 'boolean',
            title: 'Il prezzo ignora la quantità',
        },
    },
};
exports.optionSchema = optionSchema;
const optionUiSchema = {
    'ui:field': 'layout',
    'ui:layout': [
        {
            available: { width: 3 },
            included: { width: 3 },
            price: { width: 6 },
            ignoreQuantity: { width: 4 },
        },
    ],
};
exports.optionUiSchema = optionUiSchema;
exports.default = schema_1.default;
