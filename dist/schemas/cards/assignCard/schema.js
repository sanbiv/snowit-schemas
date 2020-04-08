"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_definitions");
const constants_1 = require("../constants");
const schema = {
    definitions: {
        status: _definitions_1.status,
        user: _definitions_1.user,
    },
    type: 'object',
    required: ['name', 'user', 'userUID', 'status'],
    properties: {
        user: {
            $ref: '#/definitions/user',
            title: 'Utente (associazione)',
        },
        status: {
            $ref: '#/definitions/status',
            title: 'Stato',
            default: constants_1.NOT_ASSIGNED,
        },
        userUID: {
            type: 'string',
            title: 'Login (utente autenticato)',
        },
        name: {
            type: 'string',
            title: 'Nome della card',
        },
    },
};
exports.default = schema;
