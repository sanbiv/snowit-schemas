"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const keys_1 = __importDefault(require("lodash/keys"));
const PARTNER_TYPES_OBJECT = {
    district: {
        label: 'Comprensorio',
        color: 'teal',
        icon: 'building',
    },
    rental: {
        label: 'Noleggio',
        color: 'orange',
        icon: 'dollar',
    },
    customerCare: {
        label: 'Customer care',
        color: 'blue',
        icon: 'users',
    },
    experience: {
        label: 'Esperienze',
        color: 'brown',
        icon: 'map signs',
    },
    food: {
        label: 'Food',
        color: 'red',
        icon: 'food',
    },
    parking: {
        label: 'Parking',
        color: 'green',
        icon: 'car',
    },
    other: {
        label: 'Altro',
        color: 'purple',
        icon: 'circle',
    },
    lesson: {
        label: 'Lesson',
        color: 'red',
        icon: 'book',
    },
    'bundle:family-pack': {
        label: 'Piano famiglia',
        color: 'orange',
        icon: 'users',
    },
    'rental:bike': {
        label: 'Noleggio bici',
        color: 'red',
        icon: 'bicycle',
    },
    hotel: {
        label: 'Hotel',
        color: 'grey',
        icon: 'hotel',
    },
};
exports.PARTNER_TYPES_OBJECT = PARTNER_TYPES_OBJECT;
const PARTNER_TYPE_ENUMS = keys_1.default(PARTNER_TYPES_OBJECT);
exports.PARTNER_TYPE_ENUMS = PARTNER_TYPE_ENUMS;
const PARTNER_TYPE_ENUM_NAMES = reduce_1.default(PARTNER_TYPES_OBJECT, (memo, opt) => {
    memo.push(opt.label);
    return memo;
}, []);
exports.PARTNER_TYPE_ENUM_NAMES = PARTNER_TYPE_ENUM_NAMES;
