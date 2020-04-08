"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("lodash/keys"));
const map_1 = __importDefault(require("lodash/map"));
const i18n_1 = require("../../../../utils/i18n");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const schema = {
    type: 'object',
    required: [],
    properties: {
        _activeSection: {
            type: 'string',
            default: 'details',
            title: 'Inserisci dettagli extra e galleria immagini del prodotto',
            enum: ['details', 'gallery'],
            enumNames: ['Dettagli', 'Galleria'],
        },
        gallery: {
            type: 'array',
            title: 'Galleria',
            items: {
                type: 'object',
                required: ['type', 'titleTranslations'],
                properties: Object.assign(Object.assign({ type: {
                        type: 'string',
                        enum: keys_1.default(constants_1.DETAILS_GALLERY_TYPES),
                        enumNames: map_1.default(constants_1.DETAILS_GALLERY_TYPES, type => type.label),
                        default: 'image',
                        title: 'Tipo oggetto',
                    } }, i18n_1.buildTranslatedSchemaAttributes({
                    title: { title: 'Titolo', required: true },
                    description: 'Descrizione',
                })), { image: {
                        type: 'string',
                        title: 'Immagine',
                    }, videoId: {
                        type: 'string',
                        title: 'ID video youtube',
                    }, featured: {
                        type: 'boolean',
                        title: 'Featured',
                    } }),
            },
        },
        details: utils_1.buildDetailsSchema(),
    },
};
exports.default = schema;
