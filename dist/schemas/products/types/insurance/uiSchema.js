"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _uiDefinitions_1 = require("../_common/_uiDefinitions");
exports.default = Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
        ..._uiDefinitions_1.commonDataUILayout,
        {
            productType: {
                width: 6,
            },
            default: {
                width: 6,
            },
            durationHours: {
                width: 4,
                doShow: ({ formData }) => {
                    return !formData.default;
                },
            },
        },
        {
            externalProductUID: {
                width: 16,
            },
        },
        {
            bundle: {
                width: 16,
                doShow: ({ formData }) => {
                    return formData.type !== 'coupon';
                },
            },
        },
    ] }, _uiDefinitions_1.commonDataUIAdvanced());
