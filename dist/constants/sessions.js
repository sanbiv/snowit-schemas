"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISCIPLINES = ['ski', 'snowboard', 'bob', 'crossCountry', 'skiMountaineering', 'snowshoes', 'telemark', 'skating', 'bike'];
exports.DISCIPLINE_ALIASES = {
    sci: 'ski',
    cross_country: 'crossCountry',
    crosscountry: 'crossCountry',
    ski_mountaineering: 'skiMountaineering',
    skimountaineering: 'skiMountaineering'
};
exports.DEFAULT_DISCIPLINE = 'ski';
exports.SESSION_STATUSES = [
    'start',
    'active',
    'pause',
    'closed'
];
exports.TRACK_MOTION = [
    'stationary', 'moving'
];
exports.TRACK_ACTIVITIES = [
    'still', 'in_vehicle', 'on_bicycle', 'on_foot', 'running', 'walking'
];
exports.DEFAULT_PAL = 7;
exports.DISCIPLINE_PAL = {
    ski: 7,
    snowboard: 4.299999999999999,
    crossCountry: 6.7999999999999998,
    snowshoes: 7.7000000000000002,
    skating: 5.5,
    bob: 5,
    skiMountaineering: 7,
    telemark: 7,
    bike: 8.5
};
