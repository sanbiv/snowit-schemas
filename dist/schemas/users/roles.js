"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const ROLES = {
    USER: {
        label: 'Utente',
        icon: 'users',
        color: 'grey',
    },
    ADMIN: {
        label: 'Amministratore',
        icon: 'key',
        color: 'red',
    },
    PARTNER: {
        label: 'Partner',
        icon: 'building',
        color: 'teal',
    },
};
exports.ROLES = ROLES;
const DEFAULT_ROLE = 'USER';
exports.DEFAULT_ROLE = DEFAULT_ROLE;
const ROLE_ENUMS = lodash_1.default.keys(ROLES);
exports.ROLE_ENUMS = ROLE_ENUMS;
const ROLE_ENUM_NAMES = lodash_1.default.map(ROLE_ENUMS, role => ROLES[role].label);
exports.ROLE_ENUM_NAMES = ROLE_ENUM_NAMES;
exports.default = ROLES;
