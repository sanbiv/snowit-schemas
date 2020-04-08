"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CHALLENGE_STATUS_ENUMS = ['active', 'expired'];
exports.CHALLENGE_STATUS_ENUMS = CHALLENGE_STATUS_ENUMS;
const CHALLENGE_STATUS_ENUM_NAMES = ['Attiva', 'Terminata'];
exports.CHALLENGE_STATUS_ENUM_NAMES = CHALLENGE_STATUS_ENUM_NAMES;
const CHALLENGE_TYPES = {
    calories: {
        text: 'Calorie',
        enum: ['cal'],
    },
    distance: {
        text: 'Distanza',
        enum: ['km'],
    },
    velAvg: {
        text: 'Velocità media',
        enum: ['km/h'],
    },
    altitude: {
        text: 'Altitudine',
        enum: ['m', 'km'],
    },
    skitracks: {
        text: 'Skitracks',
        enum: ['piste'],
    },
    days: {
        text: 'Giorni',
        enum: ['days'],
    },
};
exports.CHALLENGE_TYPES = CHALLENGE_TYPES;
const CHALLENGE_DISCIPLINES = {
    ski: {
        icon: { name: 'circle', color: 'blue' },
        text: 'Sci',
        value: 'ski',
        key: 'ski',
    },
    snowboard: {
        icon: { name: 'circle', color: 'red' },
        text: 'Snowboard',
        value: 'snowboard',
        key: 'snowboard',
    },
    bob: {
        icon: { name: 'circle', color: 'green' },
        text: 'Bob',
        value: 'bob',
        key: 'bob',
    },
    crossCountry: {
        icon: { name: 'circle', color: 'orange' },
        text: 'Cross Country',
        value: 'crossCountry',
        key: 'crossCountry',
    },
    skiMountaineering: {
        icon: { name: 'circle', color: 'purple' },
        text: 'Ski Mountaineering',
        value: 'skiMountaineering',
        key: 'skiMountaineering',
    },
    snowshoes: {
        icon: { name: 'circle', color: 'olive' },
        text: 'Snowshoes',
        value: 'snowshoes',
        key: 'snowshoes',
    },
    telemark: {
        icon: { name: 'circle', color: 'pink' },
        text: 'Telemark',
        value: 'telemark',
        key: 'telemark',
    },
};
exports.CHALLENGE_DISCIPLINES = CHALLENGE_DISCIPLINES;
