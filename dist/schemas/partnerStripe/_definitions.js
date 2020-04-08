"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const lodash_1 = __importDefault(require("lodash"));
const countries_1 = require("../shared/countries");
const COUNTRY_KEYS = lodash_1.default.keys(countries_1.COUNTRIES);
const COUNTRY_NAMES = lodash_1.default.values(countries_1.COUNTRIES);
const year = new Date().getFullYear();
const country = {
    type: 'string',
    title: 'Nazione',
    enum: COUNTRY_KEYS,
    enumNames: COUNTRY_NAMES,
    default: countries_1.DEFAULT_COUNTRY,
};
exports.country = country;
const address = {
    type: 'object',
    required: ['city', 'line1', 'postalCode'],
    properties: {
        city: { type: 'string', title: 'Città' },
        country,
        line1: { type: 'string', title: 'Indirizzo' },
        postalCode: { type: 'string', title: 'CAP' },
    },
};
exports.address = address;
const dob = {
    type: 'object',
    required: ['day', 'month', 'year'],
    properties: {
        day: {
            type: 'integer',
            enum: lodash_1.default.range(1, 32),
            title: 'Giorno',
        },
        month: {
            type: 'integer',
            enum: lodash_1.default.range(1, 13),
            enumNames: moment_1.default.months(),
            title: 'Mese',
        },
        year: {
            type: 'integer',
            enum: lodash_1.default.range(year - 120, year - 17),
            title: 'Anno',
        },
    },
};
exports.dob = dob;
const companyType = {
    type: 'string',
    enum: ['company', 'individual'],
    enumNames: ['Società/azienda', 'Individuale'],
    default: 'company',
};
exports.companyType = companyType;
