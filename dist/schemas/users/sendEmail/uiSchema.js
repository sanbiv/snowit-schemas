"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uiSchema = ({ formData }) => {
    return {
        classNames: 'form-root',
        'ui:field': 'layout',
        'ui:layout': [
            { type: { width: 16 } },
            {
                subject: {
                    width: 16,
                    doShow: ({ formData }) => {
                        return formData.type === 'raw';
                    },
                },
            },
            {
                message: {
                    width: 16,
                    doShow: ({ formData }) => {
                        return formData.type === 'raw';
                    },
                },
            },
        ],
        message: { 'ui:widget': 'wysiwyg' },
    };
};
exports.default = uiSchema;
