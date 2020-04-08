"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
exports.schema = schema_1.default;
const uiSchema_1 = __importDefault(require("./uiSchema"));
exports.uiSchema = uiSchema_1.default;
const uiSchemaPaymentOnly_1 = __importDefault(require("./uiSchemaPaymentOnly"));
exports.uiSchemaPaymentOnly = uiSchemaPaymentOnly_1.default;
const uiSchemaDocuments_1 = __importDefault(require("./uiSchemaDocuments"));
exports.uiSchemaDocuments = uiSchemaDocuments_1.default;
exports.default = schema_1.default;
