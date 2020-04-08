"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dobLayout = {
    'ui:field': 'layout',
    'ui:layout': [
        {
            day: { width: 4 },
            month: { width: 4 },
            year: { width: 4 },
        },
    ],
};
const addressLayout = {
    'ui:field': 'layout',
    'ui:layout': [
        { line1: { width: 16 } },
        {
            country: { width: 4 },
            city: { width: 8 },
            postalCode: { width: 4 },
        },
    ],
};
exports.default = {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
        {
            email: { width: 16 },
        },
        {
            legalEntity: { width: 16 },
        },
        {
            personalAddress: { width: 16 },
        },
    ],
    legalEntity: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                type: { width: 5 },
                businessName: { width: 11 },
            },
            { businessTaxId: { width: 8 }, website: { width: 8 } },
            {
                firstName: { width: 8 },
                lastName: { width: 8 },
            },
            { address: { width: 16 } },
            { dob: { width: 16 } },
            { additionalOwners: { width: 16 } },
        ],
        dob: dobLayout,
        address: addressLayout,
        additionalOwners: {
            items: {
                'ui:field': 'layout',
                'ui:layout': [
                    {
                        firstName: { width: 8 },
                        lastName: { width: 8 },
                    },
                    { address: { width: 16 } },
                    { dob: { width: 16 } },
                ],
                dob: dobLayout,
                address: addressLayout,
            },
        },
    },
    personalAddress: addressLayout,
};
