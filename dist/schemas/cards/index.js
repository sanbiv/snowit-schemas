"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
exports.schema = schema_1.default;
const uiSchema_1 = __importDefault(require("./uiSchema"));
exports.uiSchema = uiSchema_1.default;
const schema_2 = __importDefault(require("./assignCard/schema"));
exports.assignSchema = schema_2.default;
const uiSchema_2 = __importDefault(require("./assignCard/uiSchema"));
exports.assignCardUiSchema = uiSchema_2.default;
exports.default = schema_1.default;