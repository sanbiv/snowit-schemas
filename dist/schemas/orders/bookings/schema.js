"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("../../../../utils/i18n");
const first_1 = __importDefault(require("lodash/first"));
const schema = ({ product, slots, venues } = {}) => () => {
    const { availability: { quantityPerVenue } = {} } = product;
    const required = ['date', 'productUID', 'quantity'];
    let properties = {
        date: {
            type: 'string',
            format: 'date',
            title: 'Data della prenotazione',
        },
        quantity: {
            type: 'number',
            title: 'Quantità prenotate',
            default: 1,
        },
        confirmed: {
            type: 'boolean',
            title: 'Confermata?',
            default: true,
        },
        orderUID: {
            type: 'string',
            title: 'Id ordine',
        },
        productUID: {
            type: 'string',
            title: 'Prodotto',
            default: product._id,
        },
        slotUID: {
            type: 'string',
            title: 'Slot',
            enum: slots && slots.map(slot => slot._id),
            enumNames: slots && slots.map(slot => i18n_1.translate(slot, 'name')),
            default: slots && slots.length === 1 ? first_1.default(slots)._id : undefined,
        },
        notes: {
            type: 'string',
            title: 'Note',
        },
    };
    if (slots && slots.length > 0) {
        required.push('slotUID');
    }
    if (quantityPerVenue && venues && venues.length > 0) {
        required.push('venueUID');
        properties = Object.assign(Object.assign({}, properties), { venueUID: {
                type: 'string',
                title: 'Sede',
                enum: venues && venues.map(venue => venue._id),
                enumNames: venues && venues.map(venue => i18n_1.translate(venue, 'name')),
                default: venues && venues.length === 1 ? first_1.default(venues)._id : undefined,
            } });
    }
    return {
        type: 'object',
        required,
        properties,
    };
};
exports.default = schema;
