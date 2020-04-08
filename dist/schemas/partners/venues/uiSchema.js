"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../utils/i18n");
const types_1 = require("./types");
const reduce_1 = __importDefault(require("lodash/reduce"));
const chunk_1 = __importDefault(require("lodash/chunk"));
exports.default = Object.assign(Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
        {
            active: {
                width: 4,
            },
            partnerUID: {
                width: 6,
                doDisable: ({ formData }) => formData._id,
            },
            districtUID: {
                width: 6,
                doDisable: ({ formData }) => formData._id,
            },
        },
        {
            types: { width: 16 },
        },
        {
            nameTranslations: { width: 16 },
        },
        {
            point: { width: 16 },
        },
    ], partnerUID: {
        'ui:widget': 'partnerPicker',
        'ui:placeholder': 'Seleziona partner',
    }, districtUID: {
        'ui:widget': 'districtPicker',
        'ui:placeholder': 'Seleziona distretto',
    }, point: {
        'ui:field': 'geoPoint',
    } }, i18n_1.buildUiSchemaLayout({
    name: { columns: 2 },
})), { types: {
        'ui:field': 'layout',
        'ui:layout': chunk_1.default(types_1.VENUE_TYPE_ENUMS, 3).map(row => reduce_1.default(row, (cols, type) => {
            cols[type] = { width: 5 };
            return cols;
        }, {})),
    } });
