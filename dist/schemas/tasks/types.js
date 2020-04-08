"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../products/types/");
const WIDGET_TYPES_ENUMS = [
    'home',
    ...types_1.PRODUCT_TYPE_ENUMS,
    'up-selling',
    'cross-selling',
];
exports.WIDGET_TYPES_ENUMS = WIDGET_TYPES_ENUMS;
const WIDGET_TYPES_ENUM_NAMES = [
    'Home',
    ...types_1.PRODUCT_TYPE_ENUM_NAMES,
    'Up-selling',
    'Cross-selling',
];
exports.WIDGET_TYPES_ENUM_NAMES = WIDGET_TYPES_ENUM_NAMES;
