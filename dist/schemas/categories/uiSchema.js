"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../utils/i18n");
exports.default = Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
        {
            taxonomyType: { width: 8, doDisable: ({ formData }) => formData._id },
        },
        {
            permalinkTranslations: { width: 16 },
        },
        {
            partnerUID: {
                width: 4,
            },
            tenant: {
                width: 4,
            },
            districtUID: {
                width: 4,
            },
        },
        {
            position: { width: 16 },
        },
        {
            bornAfter: { width: 6 },
            bornBefore: { width: 6 },
            documentsRequired: { width: 4, verticalAlign: 'middle' },
        },
        {
            nameTranslations: { width: 16 },
        },
        {
            image: { width: 16 },
        },
        {
            externalUID: { width: 10 },
            alwaysPurchasable: { width: 6, verticalAlign: 'middle' },
        },
        {
            subCategories: { width: 16 },
        },
        {
            ageMin: { width: 8 },
            ageMax: { width: 8 },
        },
    ], partnerUID: {
        'ui:widget': 'partnerPicker',
        'ui:placeholder': 'Seleziona il partner',
    }, districtUID: {
        'ui:widget': 'districtPicker',
        'ui:help': 'Distretto (se diverso da partner)',
        'ui:options': {
            all: true,
        },
    }, image: {
        'ui:widget': 'fileOld',
        'ui:options': {
            accept: 'image/*',
        },
    }, subCategories: {
        'ui:options': {
            addLabel: 'Aggiungi sottocategoria',
            removeConfirmLabel: 'Rimuovi sottocategoria',
            emptyAllButton: true,
        },
        items: {
            'ui:field': 'layout',
            'ui:layout': [{ name: { width: 8 }, externalUID: { width: 8 } }],
        },
    }, position: {
        'ui:help': "Indica la posizione nell'elenco delle categorie",
    } }, i18n_1.buildUiSchemaLayout({
    name: { columns: 2 },
    permalink: { columns: 2 },
}));
