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
                width: 8,
                description: "Indica la durata dell'esperienza in ore",
            },
            categoryUID: {
                width: 8,
                doShow: ({ formData }) => {
                    return formData.partnerUID;
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
            adults: {
                width: 8,
            },
            durationType: {
                width: 8,
            },
        },
    ] }, _uiDefinitions_1.commonDataUIAdvanced()), { categoryUID: {
        'ui:widget': 'categoryPicker',
        'ui:options': {
            allowClear: true,
            conditions: () => ({ taxonomyType: 'experienceConcept' }),
        },
    }, partnerDelayedPayment: {
        'ui:description': 'Se deselezionato il pagamento al comprensorio viene eseguito quando un cliente effettua ordine.',
    }, options: {
        'ui:description': 'I prezzi delle opzioni vengono definiti nel listino prezzi',
    } });
