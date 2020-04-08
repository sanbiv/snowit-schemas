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
                description: "Indica la durata dell'esperienza in ore",
            },
            categoryUID: { width: 6 },
            equipmentType: { width: 6 },
        },
        {
            bundle: {
                width: 16,
                doShow: ({ formData }) => {
                    return formData.type !== 'coupon';
                },
            },
        },
        {
            externalUID: { width: 6 },
            externalModelUID: { width: 6 },
            insuranceIncluded: { width: 4 },
        },
        {
            options: {
                width: 16,
                doShow: ({ formData }) => formData._productOptions && !isEmpty_1.default(formData._productOptions),
            },
        },
        {
            level: {
                width: 16,
            },
        },
    ] }, _uiDefinitions_1.commonDataUIAdvanced()), { categoryUID: {
        'ui:widget': 'categoryPicker',
        'ui:placeholder': 'Seleziona categoria',
        'ui:options': {
            allowClear: true,
            conditions: () => ({ taxonomyType: 'rental' }),
        },
    }, partnerDelayedPayment: {
        'ui:description': 'Se deselezionato il pagamento al comprensorio viene eseguito quando un cliente effettua ordine.',
    }, options: {
        'ui:description': 'I prezzi delle opzioni vengono definiti nel listino prezzi',
    } });
