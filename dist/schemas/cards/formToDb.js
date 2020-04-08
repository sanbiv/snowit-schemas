"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firestore_1 = __importDefault(require("../../../utils/firestore"));
const dates_1 = require("../../../utils/dates");
const schema_1 = __importDefault(require("./schema"));
const formToDb = formData => {
    const data = firestore_1.default.formToDb(formData, null, { schema: schema_1.default });
    if (data.user) {
        const birthday = data.user.birthday || data.user.birthdate;
        const birthdayMoment = birthday && dates_1.toMoment(birthday);
        if (birthdayMoment && birthdayMoment.isValid()) {
            data.user.birthday = birthdayMoment.toDate();
            data.user.birthdayString = birthdayMoment.format('YYYY-MM-DD');
        }
        else {
            data.user.birthday = null;
            data.user.birthdayString = null;
        }
        data.user = firestore_1.default.replaceNil(data.user, null);
    }
    return data;
};
exports.default = formToDb;
