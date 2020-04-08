"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        classNames: 'form-root',
        'ui:field': 'layout',
        'ui:layout': [
            {
                title: { width: 10 },
                type: { width: 6 },
            },
            {
                tenant: { width: 10 },
                category: { width: 6 },
            },
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
        ],
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
    };
};
