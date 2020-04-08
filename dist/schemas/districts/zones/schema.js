"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = {
    type: 'object',
    required: ['name', 'districtUID'],
    properties: {
        name: {
            type: 'string',
            title: 'Nome della zona',
        },
        permalink: {
            type: 'string',
            title: 'Permalink',
        },
        districtUID: {
            type: 'string',
            title: 'Distretto',
            default: '',
        },
        active: {
            type: 'boolean',
            title: 'Attivo?',
            default: true,
        },
    },
};
exports.default = schema;
