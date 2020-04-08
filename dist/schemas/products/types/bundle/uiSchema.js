"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _uiDefinitions_1 = require("../_common/_uiDefinitions");
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
exports.default = Object.assign(Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
        ..._uiDefinitions_1.commonDataUILayout,
        {
            durationHours: {
                width: 4,
                description: 'Indica la durata dello skipass durata in ore',
            },
            categoryUID: {
                width: 6,
                doShow: ({ formData }) => {
                    return formData.districtUID;
                },
            },
        },
        {
            _productItems: {
                width: 16,
            },
        },
        {
            options: {
                width: 16,
                doShow: ({ formData }) => formData._productOptions && !isEmpty_1.default(formData._productOptions),
            },
        },
        {
            adults: {
                width: 8,
            },
            juniors: {
                width: 8,
            },
            kids: {
                width: 8,
            },
        },
        {
            durationType: {
                width: 8,
            },
        },
    ] }, _uiDefinitions_1.commonDataUIAdvanced()), { categoryUID: {
        'ui:widget': 'categoryPicker',
        'ui:placeholder': 'Seleziona categoria',
        'ui:options': {
            allowClear: true,
            conditions: [['taxonomyType', '==', 'bundle']],
        },
    }, _productItems: {
        items: {
            'ui:field': 'layout',
            'ui:layout': [{ productUID: { width: 12 }, quantity: { width: 4 } }],
            productUID: {
                'ui:widget': 'productPicker',
                'ui:placeholder': 'Seleziona prodotto',
                'ui:options': {},
            },
        },
    }, options: {
        'ui:description': 'I prezzi delle opzioni vengono definiti nel listino prezzi',
    } });
