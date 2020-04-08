"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("lodash/keys"));
const values_1 = __importDefault(require("lodash/values"));
const VENUE_TYPES = {
    pickup: 'Pickup',
    entrance: 'Ingresso',
    other: 'Altro',
};
exports.VENUE_TYPES = VENUE_TYPES;
const VENUE_TYPE_ENUMS = keys_1.default(VENUE_TYPES);
exports.VENUE_TYPE_ENUMS = VENUE_TYPE_ENUMS;
const VENUE_TYPE_ENUM_NAMES = values_1.default(VENUE_TYPES);
exports.VENUE_TYPE_ENUM_NAMES = VENUE_TYPE_ENUM_NAMES;
exports.default = {
    VENUE_TYPES,
    VENUE_TYPE_ENUMS,
    VENUE_TYPE_ENUM_NAMES,
};
