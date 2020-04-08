"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
        {
            type: { width: 10 },
            durationHours: {
                width: 6,
                doShow: ({ formData }) => {
                    return formData.type === 'skipass';
                },
                help: "Indica una durata in ore! E' importante inserirla",
            },
        },
        {
            name: { width: 16 },
        },
        {
            districtUID: {
                width: 16,
                doShow: ({ formData }) => {
                    return formData.type === 'skipass';
                },
            },
        },
        {
            categoryUID: {
                width: 16,
                doShow: ({ formData }) => {
                    return formData.type === 'skipass' && formData.districtUID;
                },
            },
        },
    ],
    categoryUID: {
        'ui:widget': 'categoryPicker',
        'ui:placeholder': 'Seleziona categoria',
    },
    districtUID: {
        'ui:widget': 'districtPicker',
        'ui:placeholder': 'Seleziona distretto',
    },
};
