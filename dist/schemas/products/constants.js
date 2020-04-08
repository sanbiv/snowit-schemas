"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = __importDefault(require("lodash/range"));
const map_1 = __importDefault(require("lodash/map"));
const without_1 = __importDefault(require("lodash/without"));
const products_1 = require("../../../utils/products");
const PROVIDER_ENUMS = ['skidata', 'axess', 'skiwork', 'easyrent', 'none'];
exports.PROVIDER_ENUMS = PROVIDER_ENUMS;
const PROVIDER_ENUM_NAMES = [
    'Skidata',
    'Axess',
    'Skiwork',
    'Easyrent',
    'Nessuno',
];
exports.PROVIDER_ENUM_NAMES = PROVIDER_ENUM_NAMES;
const HOURS = range_1.default(0, 12);
exports.HOURS = HOURS;
const DAYS = range_1.default(1, 8).map(day => day * 24);
exports.DAYS = DAYS;
const DURATION_HOURS = [...HOURS, ...DAYS];
exports.DURATION_HOURS = DURATION_HOURS;
const DURATION_HOURS_NAMES = DURATION_HOURS.map(products_1.displayDuration);
exports.DURATION_HOURS_NAMES = DURATION_HOURS_NAMES;
const BUNDLE_NO_LIMIT = -1;
exports.BUNDLE_NO_LIMIT = BUNDLE_NO_LIMIT;
const BUNDLE_SAME_QUANTITY = -2;
exports.BUNDLE_SAME_QUANTITY = BUNDLE_SAME_QUANTITY;
const BUNDLE_ITEM_QUANTITY_ENUMS = without_1.default(range_1.default(-2, 20), 0);
exports.BUNDLE_ITEM_QUANTITY_ENUMS = BUNDLE_ITEM_QUANTITY_ENUMS;
const BUNDLE_ITEM_QUANTITY_ENUM_NAMES = map_1.default(BUNDLE_ITEM_QUANTITY_ENUMS, val => {
    if (val === BUNDLE_NO_LIMIT) {
        return 'Nessun limite';
    }
    else if (val === BUNDLE_SAME_QUANTITY) {
        return 'Rapporto 1 a 1 (stessa quantità del prodotto in oggetto)';
    }
    return `Se presente ${val} volta/e nel carrello`;
});
exports.BUNDLE_ITEM_QUANTITY_ENUM_NAMES = BUNDLE_ITEM_QUANTITY_ENUM_NAMES;
const PRICE_RULES = ['fixed', 'fixedPerDuration', 'dayByDay', 'dynamic'];
exports.PRICE_RULES = PRICE_RULES;
const PRICE_RULES_NAMES = [
    'Prezzo fisso',
    'Prezzo fisso (moltiplicato per durata)',
    'Prezzo giorno per giorno (legacy mode)',
    'Prezzo dinamico (stagionale)',
];
exports.PRICE_RULES_NAMES = PRICE_RULES_NAMES;
const PRICE_RULE_DEFAULT_VALUE = 'dayByDay';
exports.PRICE_RULE_DEFAULT_VALUE = PRICE_RULE_DEFAULT_VALUE;
const PRICE_RULE_DURATION = ['day', 'hour'];
exports.PRICE_RULE_DURATION = PRICE_RULE_DURATION;
const PRICE_RULE_DURATION_NAMES = ['Prezzo giornaliero', 'Prezzo orario'];
exports.PRICE_RULE_DURATION_NAMES = PRICE_RULE_DURATION_NAMES;
const RENTAL_EQUIPMENT_TYPES = ['ski', 'snowboard', 'other'];
exports.RENTAL_EQUIPMENT_TYPES = RENTAL_EQUIPMENT_TYPES;
const RENTAL_EQUIPMENT_TYPE_NAMES = ['Sci', 'Snowboard', 'Altro'];
exports.RENTAL_EQUIPMENT_TYPE_NAMES = RENTAL_EQUIPMENT_TYPE_NAMES;
const DURATION_TYPES = ['day', 'night'];
exports.DURATION_TYPES = DURATION_TYPES;
const DURATION_TYPE_NAMES = ['Giorni', 'Notti'];
exports.DURATION_TYPE_NAMES = DURATION_TYPE_NAMES;
const LEVEL_LIST = ['beginner', 'intermediate', 'advanced'];
exports.LEVEL_LIST = LEVEL_LIST;
const LEVEL_LIST_NAMES = ['Beginner', 'Intermediate', 'Advanced'];
exports.LEVEL_LIST_NAMES = LEVEL_LIST_NAMES;
const BARCODE_TYPES = ['reserved', 'simple', '-'];
exports.BARCODE_TYPES = BARCODE_TYPES;
const BARCODE_TYPE_NAMES = ['Riservato', 'Semplice', 'Nessuno'];
exports.BARCODE_TYPE_NAMES = BARCODE_TYPE_NAMES;
