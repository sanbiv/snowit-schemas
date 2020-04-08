"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = formData => {
    let tenantInfo = { partnerUID: { width: 6 }, tenant: { width: 6 } };
    if (formData._user &&
        formData._user.profile &&
        formData._user.profile.type === 'PARTNER') {
        tenantInfo = {};
    }
    return {
        classNames: 'form-root',
        'ui:field': 'layout',
        'ui:layout': [
            {
                title: { width: 5 },
                type: { width: 5 },
                category: { width: 6 },
            },
            tenantInfo,
            {
                description: { width: 10 },
                image: { width: 6 },
            },
            {
                link: { width: 10 },
                target: { width: 6 },
            },
            {
                price: { width: 8 },
                position: { width: 8 },
            },
            {
                active: { width: 16 },
            },
        ],
        image: {
            'ui:widget': 'file',
            'ui:options': {
                accept: 'image/*',
            },
        },
        description: {
            'ui:widget': 'textarea',
        },
        price: {
            'ui:options': {
                inputProps: {
                    icon: 'eur',
                    iconPosition: 'left',
                },
            },
        },
        partnerUID: {
            'ui:widget': 'partnerPicker',
            'ui:options': {
                allowClear: true,
            },
        },
    };
};
