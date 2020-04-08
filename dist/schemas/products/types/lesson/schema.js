"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_common/_definitions");
const constants_1 = require("./constants");
const schema = {
    definitions: {
        durationHours: _definitions_1.durationHours,
        availability: _definitions_1.availability,
        links: _definitions_1.links,
    },
    type: 'object',
    required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
    properties: Object.assign(Object.assign({ type: {
            type: 'string',
            title: 'Tipo prodotto',
            default: 'lesson',
            enum: ['lesson'],
        }, participantsAmount: {
            type: 'number',
            title: 'N. partecipanti',
        }, participantsLevel: {
            type: 'string',
            title: 'Livello partecipanti',
            enum: constants_1.LESSON_LEVEL_ENUMS,
            enumNames: constants_1.LESSON_LEVEL_ENUM_NAMES,
        }, lessonType: {
            type: 'string',
            title: 'Tipo lezione',
            enum: constants_1.LESSON_TYPE_ENUMS,
            enumNames: constants_1.LESSON_TYPE_ENUM_NAMES,
        }, categoryUID: {
            type: 'string',
            title: 'Categoria',
            default: '',
        }, subCategoryUID: {
            type: 'string',
            title: 'Sottocategoria',
        }, externalUID: {
            type: 'string',
            title: 'ID esterno (codice corso)',
        } }, _definitions_1.commonData()), { durationHours: {
            $ref: '#/definitions/durationHours',
        }, partnerDelayedPayment: {
            type: 'boolean',
            title: 'Pagamento al partner in seconda instanza',
        }, bundle: {
            type: 'boolean',
            title: 'Vendita abbinata ad altri prodotti',
        }, options: {
            type: 'object',
            title: 'Seleziona le opzioni disponibili per questo prodotto',
            properties: {},
        }, specialty: {
            type: 'string',
            title: 'Specialità (id)',
        } }),
};
exports.default = schema;
