"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const keys_1 = __importDefault(require("lodash/keys"));
const DISCOUNT_TYPES = {
    percentage: {
        label: 'Percentuale',
    },
    amount: {
        label: 'Totale',
    },
};
exports.DISCOUNT_TYPES = DISCOUNT_TYPES;
const DISCOUNT_TYPE_ENUMS = keys_1.default(DISCOUNT_TYPES);
exports.DISCOUNT_TYPE_ENUMS = DISCOUNT_TYPE_ENUMS;
const DISCOUNT_TYPE_ENUM_NAMES = reduce_1.default(DISCOUNT_TYPES, (memo, opt) => {
    memo.push(opt.label);
    return memo;
}, []);
exports.DISCOUNT_TYPE_ENUM_NAMES = DISCOUNT_TYPE_ENUM_NAMES;
const DEFAULT_TYPE = 'percentage';
exports.DEFAULT_TYPE = DEFAULT_TYPE;
