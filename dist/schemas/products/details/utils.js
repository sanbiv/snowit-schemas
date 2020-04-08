"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const i18n_1 = require("../../../../utils/i18n");
const constants_1 = require("./constants");
const buildDetailsSchema = () => {
    const properties = reduce_1.default(constants_1.DETAILS_EXTRA_INFO_TYPES, (memo, val, key) => {
        memo[key] = {
            type: 'object',
            title: val.label,
            properties: {},
        };
        switch (val.type) {
            case 'text':
            default:
                memo[key].properties = i18n_1.buildTranslatedSchemaAttributes({
                    body: { required: val.required },
                });
        }
        return memo;
    }, {});
    const schema = {
        type: 'object',
        title: 'Dettagli extra del prodotto',
        required: reduce_1.default(constants_1.DETAILS_EXTRA_INFO_TYPES, (memo, val, key) => {
            if (val.required) {
                memo.push(key);
            }
            return memo;
        }, []),
        properties: Object.assign(Object.assign({}, properties), { metatags: {
                title: 'Metatags',
                type: 'object',
                properties: Object.assign(Object.assign({}, i18n_1.buildTranslatedSchemaAttributes({
                    title: {
                        type: 'string',
                        title: 'Titolo',
                        default: '',
                    },
                    description: {
                        type: 'string',
                        title: 'Descrizione',
                        default: '',
                    },
                })), { robots: {
                        type: 'string',
                        title: 'Robots',
                        default: '',
                    }, facebook: {
                        title: 'Facebook',
                        type: 'object',
                        properties: Object.assign(Object.assign({ type: {
                                type: 'string',
                                title: 'Tipo',
                                default: '',
                            } }, i18n_1.buildTranslatedSchemaAttributes({
                            title: {
                                type: 'string',
                                title: 'Titolo',
                                default: '',
                            },
                            description: {
                                type: 'string',
                                title: 'Descrizione',
                                default: '',
                            },
                        })), { image: {
                                type: 'string',
                                title: 'Immagine',
                                default: '',
                            }, siteName: {
                                type: 'string',
                                title: 'Nome sito',
                                default: '',
                            } }),
                    } }),
            } }),
    };
    return schema;
};
exports.buildDetailsSchema = buildDetailsSchema;
