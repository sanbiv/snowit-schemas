"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DETAILS_GALLERY_TYPES = {
    image: {
        label: 'Immagine',
    },
    youtube: {
        label: 'Youtube',
    },
};
exports.DETAILS_GALLERY_TYPES = DETAILS_GALLERY_TYPES;
const DETAILS_EXTRA_INFO_TYPES = {
    fullDescription: {
        label: 'Descrizione completa',
        type: 'text',
        html: true,
        i18n: true,
        required: false,
    },
    conditions: {
        label: 'Condizioni',
        type: 'text',
        html: true,
        i18n: true,
        required: false,
    },
};
exports.DETAILS_EXTRA_INFO_TYPES = DETAILS_EXTRA_INFO_TYPES;
