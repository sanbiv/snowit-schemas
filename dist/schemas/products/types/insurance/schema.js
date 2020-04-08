"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _definitions_1 = require("../_common/_definitions");
const __1 = require("../");
const schema = () => {
    const productTypesEnums = __1.PRODUCT_TYPE_ENUMS.filter(type => type !== 'insurance');
    const productTypesEnumNames = __1.PRODUCT_TYPE_ENUM_NAMES.filter((_type, index) => index !== __1.PRODUCT_TYPE_ENUMS.indexOf('insurance'));
    return {
        definitions: {
            availability: _definitions_1.availability,
            links: _definitions_1.links,
            durationHours: _definitions_1.durationHours,
        },
        type: 'object',
        required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
        properties: Object.assign(Object.assign({ type: {
                type: 'string',
                title: 'Tipo prodotto',
                default: 'insurance',
                enum: ['insurance'],
            }, productType: {
                type: 'string',
                title: 'Assicurazione su',
                enum: productTypesEnums,
                enumNames: productTypesEnumNames,
            }, default: {
                type: 'boolean',
                title: 'Assicurazione di default',
                default: false,
            }, durationHours: {
                $ref: '#/definitions/durationHours',
                description: "Durata di validità dell'assicurazione (vale per tutti gli skipass di durata uguale o inferiore)",
            } }, _definitions_1.commonData()), { insuranceIncluded: {
                type: 'boolean',
                title: 'Assicurazione inclusa?',
                default: false,
            }, bundle: {
                type: 'boolean',
                title: 'Vendita abbinata ad altri prodotti',
            }, externalProductUID: {
                type: 'string',
                title: 'ID esterno (sistema del comprensorio)',
            } }),
    };
};
exports.default = schema;
