"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../utils/i18n");
exports.default = Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
        {
            districtUID: { width: 13 },
            priority: { width: 3 },
        },
        {
            startDate: { width: 8 },
            endDate: { width: 8 },
        },
        {
            nameTranslations: { width: 16 },
        },
        {
            onlyDates: {
                width: 16,
                doShow: ({ formData }) => !formData.exceptDates || formData.exceptDates.length === 0,
            },
        },
        {
            exceptDates: {
                width: 16,
                doShow: ({ formData }) => !formData.onlyDates || formData.onlyDates.length === 0,
            },
        },
    ], districtUID: {
        'ui:widget': 'districtPicker',
        'ui:options': {
            all: true,
        },
    }, exceptDates: {
        'ui:field': 'inlineMultipleDatesPicker',
        'ui:options': {
            numberOfMonths: 6,
            negative: true,
        },
    }, onlyDates: {
        'ui:field': 'inlineMultipleDatesPicker',
        'ui:options': {
            numberOfMonths: 6,
        },
    } }, i18n_1.buildUiSchemaLayout({
    name: { columns: 2 },
}));
