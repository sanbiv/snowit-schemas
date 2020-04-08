"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_common/_definitions");
const constants_1 = require("../../constants");
const schema = ({ formData }) => {
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
                default: 'skipass',
                enum: ['skipass'],
            } }, _definitions_1.commonData()), { barcode: {
                type: 'string',
                title: 'Codice a barre',
                enum: constants_1.BARCODE_TYPES,
                enumNames: constants_1.BARCODE_TYPE_NAMES,
                default: '-',
            }, onlyPickup: {
                type: 'boolean',
                title: 'Solo Pickup',
                default: false,
            }, insuranceIncluded: {
                type: 'boolean',
                title: 'Assicurazione inclusa?',
                default: false,
            }, categoryUID: {
                type: 'string',
                title: 'Categoria',
                default: '',
            }, subCategoryUID: {
                type: 'string',
                title: 'Sottocategoria',
            }, durationHours: {
                $ref: '#/definitions/durationHours',
            }, externalUID: {
                type: 'string',
                title: 'ID esterno (sistema del comprensorio)',
            }, partnerDelayedPayment: {
                type: 'boolean',
                title: 'Pagamento al comprensorio in seconda instanza',
            }, bundle: {
                type: 'boolean',
                title: 'Vendita abbinata ad altri prodotti',
            }, options: {
                type: 'object',
                title: 'Seleziona le opzioni disponibili per questo prodotto',
                properties: {},
            }, insuranceUIDS: {
                title: 'Assicurazioni',
                type: 'array',
                items: {
                    type: 'string',
                    title: 'Seleziona assicurazione',
                },
            } }),
    };
    if (formData.providerName) {
        schema.required.push('externalUID');
    }
    return schema;
};
exports.default = schema;
