"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const schema = ({ formData }) => {
    let required = ['type'];
    return {
        type: 'object',
        required,
        properties: {
            type: {
                type: 'string',
                title: 'Tipo',
                enum: constants_1.EMAIL_TYPE_ENUMS,
                enumNames: constants_1.EMAIL_TYPE_ENUM_NAMES,
            },
            subject: {
                type: 'string',
                title: 'Oggetto',
            },
            message: {
                type: 'string',
                title: 'Message',
            },
        },
    };
};
exports.default = schema;
