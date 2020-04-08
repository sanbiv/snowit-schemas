"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _uiDefinitions_1 = require("../_common/_uiDefinitions");
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
exports.default = ({ formData }) => {
    return Object.assign(Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
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
                subCategoryUID: {
                    width: 6,
                    doShow: ({ formData }) => {
                        return formData.districtUID && formData.categoryUID;
                    },
                },
            },
            {
                externalUID: {
                    width: 5,
                    doShow: ({ formData }) => {
                        return formData.districtUID;
                    },
                },
            },
            {
                bundle: {
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
                onlyPickup: { width: 6 },
                barcode: { width: 10 },
            },
            {
                insuranceIncluded: {
                    width: 4,
                },
                insuranceUIDS: {
                    width: 8,
                },
            },
            {
                details: { width: 16 },
            },
        ] }, _uiDefinitions_1.commonDataUIAdvanced()), { categoryUID: {
            'ui:widget': 'categoryPicker',
            'ui:placeholder': 'Seleziona categoria',
            'ui:options': {
                allowClear: true,
                conditions: null,
            },
        }, subCategoryUID: {
            'ui:widget': 'subCategoryPicker',
            'ui:placeholder': 'Seleziona sotto categoria',
            'ui:options': {
                allowClear: true,
                collection: null,
            },
        }, partnerDelayedPayment: {
            'ui:description': 'Se deselezionato il pagamento al comprensorio viene eseguito quando un cliente effettua ordine.',
        }, options: {
            'ui:description': 'I prezzi delle opzioni vengono definiti nel listino prezzi',
        }, insuranceUIDS: {
            items: {
                'ui:widget': 'productPicker',
                'ui:placeholder': 'Seleziona assicurazione',
                'ui:options': {
                    conditions: [
                        ['type', '==', 'insurance'],
                    ],
                },
            },
        } });
};
