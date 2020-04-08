"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const moment_1 = __importDefault(require("moment"));
const year = new Date().getFullYear();
exports.default = {
    type: 'object',
    required: ['date', 'epoc', 'formatted'],
    properties: {
        date: {
            type: 'object',
            required: ['year', 'month', 'day'],
            properties: {
                year: {
                    type: 'integer',
                    enum: lodash_1.default.range(year - 100, year + 10),
                },
                month: {
                    type: 'integer',
                    enum: lodash_1.default.range(1, 12),
                    enumNames: moment_1.default.months(),
                },
                day: { type: 'integer', enum: lodash_1.default.range(1, 31) },
            },
        },
        epoc: { type: 'integer' },
        formatted: { type: 'string' },
    },
};
