"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const status = {
    type: 'string',
    enum: constants_1.STATUSES,
    enumNames: constants_1.STATUS_NAMES,
};
exports.status = status;
const user = {
    type: 'object',
    required: ['name', 'birthday'],
    properties: {
        name: { type: 'string', title: 'Nome' },
        surname: { type: 'string', title: 'Cognome' },
        birthday: { type: 'string', title: 'Data di nascita', format: 'date' },
        city: { type: 'string', title: 'Città' },
        fisi: { type: 'string', title: 'FISI' },
    },
};
exports.user = user;
