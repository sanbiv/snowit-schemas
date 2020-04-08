"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./types/coupon/schema"));
const uiSchema_1 = __importDefault(require("./types/coupon/uiSchema"));
const schema_2 = __importDefault(require("./types/experience/schema"));
const uiSchema_2 = __importDefault(require("./types/experience/uiSchema"));
const schema_3 = __importDefault(require("./types/insurance/schema"));
const uiSchema_3 = __importDefault(require("./types/insurance/uiSchema"));
const schema_4 = __importDefault(require("./types/rental/schema"));
const uiSchema_4 = __importDefault(require("./types/rental/uiSchema"));
const schema_5 = __importDefault(require("./types/skipass/schema"));
const uiSchema_5 = __importDefault(require("./types/skipass/uiSchema"));
const schema_6 = __importDefault(require("./types/snowitcard/schema"));
const uiSchema_6 = __importDefault(require("./types/snowitcard/uiSchema"));
const schema_7 = __importDefault(require("./types/bundle/schema"));
const uiSchema_7 = __importDefault(require("./types/bundle/uiSchema"));
const schema_8 = __importDefault(require("./types/lesson/schema"));
const uiSchema_8 = __importDefault(require("./types/lesson/uiSchema"));
const schema_9 = __importDefault(require("./types/food/schema"));
const uiSchema_9 = __importDefault(require("./types/food/uiSchema"));
const schema_10 = __importDefault(require("./types/parking/schema"));
const uiSchema_10 = __importDefault(require("./types/parking/uiSchema"));
const schema_11 = __importDefault(require("./types/bundle/family/schema"));
const uiSchema_11 = __importDefault(require("./types/bundle/family/uiSchema"));
const schema_12 = __importDefault(require("./types/rental/bike/schema"));
const uiSchema_12 = __importDefault(require("./types/rental/bike/uiSchema"));
const schema_13 = __importDefault(require("./types/hotel/schema"));
const uiSchema_13 = __importDefault(require("./types/hotel/uiSchema"));
exports.default = {
    coupon: { schema: schema_1.default, uiSchema: uiSchema_1.default },
    experience: { schema: schema_2.default, uiSchema: uiSchema_2.default },
    insurance: { schema: schema_3.default, uiSchema: uiSchema_3.default },
    rental: { schema: schema_4.default, uiSchema: uiSchema_4.default },
    skipass: { schema: schema_5.default, uiSchema: uiSchema_5.default },
    snowitcard: { schema: schema_6.default, uiSchema: uiSchema_6.default },
    bundle: { schema: schema_7.default, uiSchema: uiSchema_7.default },
    lesson: { schema: schema_8.default, uiSchema: uiSchema_8.default },
    food: { schema: schema_9.default, uiSchema: uiSchema_9.default },
    parking: { schema: schema_10.default, uiSchema: uiSchema_10.default },
    'bundle:family-pack': {
        schema: schema_11.default,
        uiSchema: uiSchema_11.default,
    },
    'rental:bike': {
        schema: schema_12.default,
        uiSchema: uiSchema_12.default,
    },
    hotel: { schema: schema_13.default, uiSchema: uiSchema_13.default },
};
