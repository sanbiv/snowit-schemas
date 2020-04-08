"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../../_common/_definitions");
const constants_1 = require("../../../constants");
const schema = {
    definitions: {
        durationHours: _definitions_1.durationHours,
        availability: _definitions_1.availability,
        links: _definitions_1.links,
    },
    type: 'object',
    required: [
        'nameTranslations',
        'type',
        'equipmentType',
        'partnerUID',
        'districtUID',
    ],
    properties: Object.assign(Object.assign({ type: {
            type: 'string',
            title: 'Tipo prodotto',
            default: 'rental',
            enum: ['rental'],
        } }, _definitions_1.commonData()), { insuranceIncluded: {
            type: 'boolean',
            title: 'Assicurazione inclusa?',
            default: false,
        }, externalUID: {
            type: 'string',
            title: 'UID esterno',
        }, externalModelUID: {
            type: 'string',
            title: 'externalModelUID',
        }, categoryUID: {
            type: 'string',
            title: 'Categoria',
            default: '',
        }, equipmentType: {
            type: 'string',
            title: 'Tipo equipaggiamento',
            enum: constants_1.RENTAL_EQUIPMENT_TYPES,
            enumNames: constants_1.RENTAL_EQUIPMENT_TYPE_NAMES,
        }, durationHours: {
            $ref: '#/definitions/durationHours',
        }, bundle: {
            type: 'boolean',
            title: 'Vendita abbinata ad altri prodotti',
        }, options: {
            type: 'object',
            title: 'Seleziona le opzioni disponibili per questo prodotto',
            properties: {},
        }, level: {
            type: 'string',
            title: 'Livello',
            enumNames: constants_1.LEVEL_LIST_NAMES,
            enum: constants_1.LEVEL_LIST,
        } }),
};
exports.default = schema;
