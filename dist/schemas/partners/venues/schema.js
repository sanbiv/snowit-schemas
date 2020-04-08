"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../utils/i18n");
const reduce_1 = __importDefault(require("lodash/reduce"));
const types_1 = require("./types");
const schema = {
    type: 'object',
    required: ['nameTranslations', 'partnerUID', 'districtUID'],
    properties: Object.assign(Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
        name: { title: 'Nome luogo', required: true },
    })), { partnerUID: {
            type: 'string',
            title: 'Partner',
            default: '',
        }, districtUID: {
            type: 'string',
            title: 'Distretto',
        }, active: {
            type: 'boolean',
            title: 'Attivo?',
        }, point: {
            type: 'object',
            title: 'Posizione geografica',
            required: ['latitude', 'longitude'],
            properties: {
                longitude: {
                    type: 'number',
                },
                latitude: {
                    type: 'number',
                },
            },
        }, types: {
            type: 'object',
            properties: reduce_1.default(types_1.VENUE_TYPES, (memo, title, key) => {
                const properties = memo;
                properties[key] = {
                    type: 'boolean',
                    default: key === 'other',
                    title,
                };
                return properties;
            }, {}),
        } }),
};
exports.default = schema;
