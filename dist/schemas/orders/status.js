"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const STATUSES = {
    pending: {
        text: 'In attesa',
        key: 'pending',
        value: 'pending',
        icon: { name: 'wait', color: 'orange' },
    },
    shipped: {
        text: 'Inviato',
        key: 'shipped',
        value: 'shipped',
        icon: { name: 'shipping', color: 'blue' },
    },
    canceled: {
        text: 'Annullato',
        key: 'canceled',
        value: 'canceled',
        icon: { name: 'ban', color: 'red' },
    },
    delivered: {
        text: 'Consegnato',
        key: 'delivered',
        value: 'delivered',
        icon: { name: 'user circle outline', color: 'green' },
    },
    cash: {
        text: 'Consegnato (gestione cassa offline)',
        key: 'cash',
        value: 'cash',
        icon: { name: 'user circle outline', color: 'green' },
    },
};
exports.STATUSES = STATUSES;
const STATUS_ENUM = lodash_1.default.keys(STATUSES);
exports.STATUS_ENUM = STATUS_ENUM;
const STATUS_ENUM_NAMES = lodash_1.default.map(STATUS_ENUM, status => STATUSES[status].text);
exports.STATUS_ENUM_NAMES = STATUS_ENUM_NAMES;
exports.default = { STATUSES, STATUS_ENUM, STATUS_ENUM_NAMES };
