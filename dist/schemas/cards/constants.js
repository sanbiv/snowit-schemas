"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NOT_ASSIGNED = 'not-assigned';
exports.NOT_ASSIGNED = NOT_ASSIGNED;
const PENDING = 'pending';
exports.PENDING = PENDING;
const WARNING = 'warning';
exports.WARNING = WARNING;
const VALID = 'valid';
exports.VALID = VALID;
const REJECTED = 'rejected';
exports.REJECTED = REJECTED;
const ERROR = 'error';
exports.ERROR = ERROR;
const STATUSES = [NOT_ASSIGNED, PENDING, WARNING, VALID, REJECTED];
exports.STATUSES = STATUSES;
const STATUS_NAMES = [
    'Non assegnato',
    'In attesa',
    '[DA VALIDARE]',
    'Valido',
    'Rifiutato',
];
exports.STATUS_NAMES = STATUS_NAMES;
const DEFAULT_CARD_LENGTH = 8;
exports.DEFAULT_CARD_LENGTH = DEFAULT_CARD_LENGTH;
const DEFAULT_CARD_PADDING = '0';
exports.DEFAULT_CARD_PADDING = DEFAULT_CARD_PADDING;
