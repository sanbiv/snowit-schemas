"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = __importDefault(require("../../../utils/firestore"));
const dbToForm = documentData => {
    let formData = firestore_1.default.dbToForm(documentData, {
        'user.birthday': 'date',
    });
    if (!formData.user) {
        formData.user = {};
    }
    return formData;
};
exports.default = dbToForm;
