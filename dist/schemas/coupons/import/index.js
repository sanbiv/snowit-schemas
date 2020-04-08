"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
exports.COUPON_TYPES = types_1.COUPON_TYPE_ENUMS;
exports.DEFAULT_COUPON_TYPE = types_1.DEFAULT_COUPON_TYPE;
const schema_1 = __importDefault(require("./schema"));
exports.schema = schema_1.default;
const uiSchema_1 = __importDefault(require("./uiSchema"));
exports.uiSchema = uiSchema_1.default;
exports.default = schema_1.default;