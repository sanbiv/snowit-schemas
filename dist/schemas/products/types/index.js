"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("lodash/keys"));
const map_1 = __importDefault(require("lodash/map"));
const isObject_1 = __importDefault(require("lodash/isObject"));
const isFunction_1 = __importDefault(require("lodash/isFunction"));
const isString_1 = __importDefault(require("lodash/isString"));
const PRODUCT_TYPES = {
    skipass: {
        icon: { name: 'ticket', color: 'purple' },
        text: 'Skipass',
        value: 'skipass',
        key: 'skipass',
    },
    snowitcard: {
        icon: { name: 'id card', color: 'blue' },
        text: 'Snowitcard',
        value: 'snowitcard',
        key: 'snowitcard',
    },
    insurance: {
        icon: { name: 'magic', color: 'green' },
        text: 'Assicuraz.',
        value: 'insurance',
        key: 'insurance',
    },
    coupon: {
        icon: { name: 'tags', color: 'orange' },
        text: 'Coupon/Gift cards',
        value: 'coupon',
        key: 'coupon',
    },
    experience: {
        icon: { name: 'fly', color: 'pink' },
        text: 'Esperienze',
        value: 'experience',
        key: 'experience',
    },
    rental: {
        icon: { name: 'handshake', color: 'brown' },
        text: 'Noleggio',
        value: 'rental',
        key: 'rental',
    },
    lesson: {
        icon: { name: 'book', color: 'red' },
        text: 'Lezioni',
        value: 'lesson',
        key: 'lesson',
    },
    bundle: {
        icon: { name: 'gift', color: 'teal' },
        text: 'Bundle',
        value: 'bundle',
        key: 'bundle',
    },
    food: {
        icon: { name: 'food', color: 'red' },
        text: 'Food',
        value: 'food',
        key: 'food',
    },
    parking: {
        icon: { name: 'car', color: 'green' },
        text: 'Parking',
        value: 'parking',
        key: 'parking',
    },
    'bundle:family-pack': {
        icon: { name: 'users', color: 'orange' },
        text: 'Piano famiglia',
        value: 'bundle:family-pack',
        key: 'bundle:family-pack',
    },
    'rental:bike': {
        icon: { name: 'bicycle', color: 'red' },
        text: 'Noleggio bici',
        value: 'rental:bike',
        key: 'rental:bike',
    },
    hotel: {
        icon: { name: 'hotel', color: 'grey' },
        text: 'Hotel',
        value: 'hotel',
        key: 'hotel',
    },
};
exports.PRODUCT_TYPES = PRODUCT_TYPES;
const DEFAULT_TYPE = 'skipass';
exports.DEFAULT_TYPE = DEFAULT_TYPE;
const PRODUCT_TYPE_ENUMS = keys_1.default(PRODUCT_TYPES);
exports.PRODUCT_TYPE_ENUMS = PRODUCT_TYPE_ENUMS;
const PRODUCT_TYPE_ENUM_NAMES = map_1.default(PRODUCT_TYPE_ENUMS, type => PRODUCT_TYPES[type].text);
exports.PRODUCT_TYPE_ENUM_NAMES = PRODUCT_TYPE_ENUM_NAMES;
const getProductPriceRule = product => {
    let productData = {};
    if (isObject_1.default(product)) {
        productData = isFunction_1.default(product.data) ? product.data() : product;
    }
    const { priceRule, type } = productData;
    if (priceRule)
        return priceRule;
    if (type === 'snowitcard' || type === 'coupon')
        return 'fixed';
    if (type === 'insurance')
        return 'fixedPerDuration';
    return 'dayByDay';
};
exports.getProductPriceRule = getProductPriceRule;
const getAttrPrices = productOrPriceRule => {
    const priceRule = isString_1.default(productOrPriceRule)
        ? productOrPriceRule
        : getProductPriceRule(productOrPriceRule);
    switch (priceRule) {
        case 'fixed':
            return 'fixedPrice';
        case 'fixedPerDuration':
            return 'fixedPricePerDuration';
        case 'dynamic':
            return 'dynamicPrices';
        default:
            return 'prices';
    }
};
exports.getAttrPrices = getAttrPrices;
