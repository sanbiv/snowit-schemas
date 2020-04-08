"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const _definitions_1 = require("./_definitions");
const types_1 = require("./types");
const app_1 = require("../../app");
const schema = {
    definitions: {
        translations: _definitions_1.translations,
    },
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'string',
            title: 'Nome sfida',
            default: '',
        },
        description: {
            type: 'string',
            title: 'Descrizione',
            default: '',
        },
        allDistricts: {
            type: 'boolean',
            title: 'Tutti i distretti',
        },
        districtUID: {
            type: 'string',
            title: 'Distretto',
        },
        startDate: {
            type: 'string',
            title: 'Inizio',
            format: 'date',
        },
        endDate: {
            type: 'string',
            title: 'Fine',
            format: 'date',
        },
        hour: {
            type: 'number',
            title: 'ora inizio/fine',
            enum: lodash_1.default.range(0, 23),
            default: 0,
        },
        order: {
            type: 'number',
            title: 'Priorità (ordinamento delle sfide)',
            default: 10,
        },
        challengeTypes: {
            type: 'object',
            title: 'Tipo sfida',
            properties: lodash_1.default.mapValues(types_1.CHALLENGE_TYPES, type => {
                return {
                    type: 'string',
                    title: type.text,
                    enum: type.enum,
                };
            }),
            default: {},
        },
        disciplines: {
            type: 'object',
            title: 'Discipline',
            properties: lodash_1.default.mapValues(types_1.CHALLENGE_DISCIPLINES, discipline => {
                return {
                    type: 'boolean',
                    default: false,
                    title: discipline.text,
                };
            }),
            default: {},
        },
        images: {
            type: 'object',
            title: 'Immagini',
            properties: {
                main: {
                    type: 'string',
                    title: 'Principale',
                },
                banner: {
                    type: 'string',
                    title: 'Banner',
                },
            },
        },
        termsCond: {
            type: 'string',
            title: 'Condizioni',
            default: '',
        },
        private: {
            type: 'boolean',
            title: 'Privata?',
            default: false,
        },
        status: {
            type: 'string',
            title: 'Stato',
            default: 'active',
            enum: types_1.CHALLENGE_STATUS_ENUMS,
            enumNames: types_1.CHALLENGE_STATUS_ENUM_NAMES,
        },
        objectives: {
            type: 'array',
            title: 'Obiettivi (configurazione)',
            items: {
                type: 'object',
                required: ['type', 'treshold'],
                properties: {
                    type: {
                        type: 'string',
                        title: 'Tipo obiettivo',
                        enum: lodash_1.default.keys(types_1.CHALLENGE_TYPES),
                        enumNames: lodash_1.default(types_1.CHALLENGE_TYPES)
                            .values()
                            .map(type => type.text),
                    },
                    treshold: {
                        type: 'number',
                        title: 'Soglia',
                    },
                    description: {
                        type: 'string',
                        title: 'Descrizione',
                    },
                },
            },
        },
        translations: {
            type: 'object',
            title: 'Traduzioni',
            properties: lodash_1.default.mapValues(app_1.LANGUAGES, (display, code) => {
                return {
                    title: display,
                    key: code,
                    $ref: '#/definitions/translations',
                };
            }),
        },
    },
};
exports.default = schema;
