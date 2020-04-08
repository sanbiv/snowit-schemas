"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zipObject_1 = __importDefault(require("lodash/zipObject"));
const TAXONOMY_TYPES = [
    'skipass',
    'rental',
    'experienceConcept',
    'bundle',
    'lesson',
    'food',
    'parking',
    'bundle:family-pack',
    'rental:bike',
    'hotel',
];
exports.TAXONOMY_TYPES = TAXONOMY_TYPES;
const TAXONOMY_TYPE_NAMES = [
    'Skipass',
    'Noleggio',
    'Esperienza',
    'Bundle',
    'Lezione',
    'Food',
    'Parking',
    'Piano famiglia',
    'Noleggio bici',
    'Hotel',
];
exports.TAXONOMY_TYPE_NAMES = TAXONOMY_TYPE_NAMES;
const DEFAULT_TAXONOMY_TYPE = 'skipass';
exports.DEFAULT_TAXONOMY_TYPE = DEFAULT_TAXONOMY_TYPE;
const TAXONOMY_TYPES_OBJECT = zipObject_1.default(TAXONOMY_TYPES, TAXONOMY_TYPE_NAMES);
exports.TAXONOMY_TYPES_OBJECT = TAXONOMY_TYPES_OBJECT;
const TAXONOMY_TYPE_COLORS = {
    skipass: 'teal',
    rental: 'olive',
    experienceConcept: 'violet',
    bundle: 'orange',
    food: 'red',
    parking: 'green',
    'bundle:family-pack': 'orange',
    'rental:bike': 'olive',
    hotel: 'grey',
};
exports.TAXONOMY_TYPE_COLORS = TAXONOMY_TYPE_COLORS;
