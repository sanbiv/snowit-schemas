"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const COUPON_TYPE_ENUMS = ['SNOWITAPP', 'GIFTCARD', 'EASYWELFARE', 'FIERA'];
exports.COUPON_TYPE_ENUMS = COUPON_TYPE_ENUMS;
const COUPON_TYPE_ENUM_NAMES = [
    'Snowit App (Standard Coupon)',
    'Gift Card',
    'EasyWelfare',
    'Fiera',
];
exports.COUPON_TYPE_ENUM_NAMES = COUPON_TYPE_ENUM_NAMES;
const COUPON_TYPES = reduce_1.default(COUPON_TYPE_ENUMS, (memo, type, index) => {
    return Object.assign(Object.assign({}, memo), { [type]: COUPON_TYPE_ENUM_NAMES[index] });
}, {});
exports.COUPON_TYPES = COUPON_TYPES;
const DEFAULT_COUPON_TYPE = 'EASYWELFARE';
exports.DEFAULT_COUPON_TYPE = DEFAULT_COUPON_TYPE;
const REDEEM_TYPE_ENUMS = {
    all: { key: 'all', text: 'Tutti', value: 'all' },
    used: { key: 'used', text: 'Riscattati', value: 'used' },
    not_used: { key: 'not-used', text: 'Da riscattare', value: 'not-used' },
};
exports.REDEEM_TYPE_ENUMS = REDEEM_TYPE_ENUMS;
