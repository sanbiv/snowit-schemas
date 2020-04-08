"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("lodash/keys"));
const DISCIPLINE_LEVELS = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    expert: 'Esperto',
};
exports.DISCIPLINE_LEVELS = DISCIPLINE_LEVELS;
const DISCIPLINES = {
    snowboard: 'Snowboard',
    ski: 'Sci',
};
exports.DISCIPLINES = DISCIPLINES;
const POLICIES_OBJECT = {
    communication: 'Comunicazioni promozionali',
    privacy: 'Accettazione privacy',
    profiling: 'Profilazione',
    thirdPartiesCommunication: 'Comunicazioni promozionali terze parti',
    thirdParties: 'Terze parti',
};
exports.POLICIES_OBJECT = POLICIES_OBJECT;
const POLICIES = keys_1.default(POLICIES_OBJECT);
exports.POLICIES = POLICIES;
exports.default = {
    DISCIPLINES,
    DISCIPLINE_LEVELS,
    POLICIES,
};
