"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const types_1 = require("../types");
const uiSchema = ({ formData: form }) => {
    const jsonUiSchema = {
        classNames: 'form-root',
        couponCodes: {
            'ui:widget': 'textarea',
        },
        'ui:field': 'layout',
        'ui:layout': [
            { couponCodes: { width: 16 } },
            {
                quantity: { width: 6 },
                type: { width: 10, doDisable: ({ formData: data }) => data.$lockType },
            },
            {
                _: {
                    width: 16,
                    render: (_a) => {
                        var { formData } = _a, props = __rest(_a, ["formData"]);
                        return (<semantic_ui_react_1.Message icon="warning circle" color="red" content={`Attenzione, Hai indicato il limite di utilizzi a ${formData.quantity} volte. Sei sicuro?`}/>);
                    },
                    verticalAlign: 'middle',
                    doShow: ({ formData }) => formData.quantity > 1,
                },
            },
            {
                name: { width: 8 },
                termsCond: { width: 4 },
            },
            {
                _: {
                    width: 16,
                    render: (_a) => {
                        var { formData } = _a, props = __rest(_a, ["formData"]);
                        return (<semantic_ui_react_1.Message icon="warning circle" color="yellow" content={`Attenzione, quando selezioni ${types_1.COUPON_TYPES.SNOWIT} il prodotto DEVE avere nel dettaglio, tutte le date in cui è disponibile.`}/>);
                    },
                    verticalAlign: 'middle',
                    doShow: ({ formData }) => formData.type === 'SNOWITAPP',
                },
            },
            {
                setExplicitDates: {
                    width: 5,
                    doShow: ({ formData }) => formData.type !== 'SNOWITAPP',
                },
            },
            {
                onlyDates: {
                    width: 16,
                    doShow: ({ formData }) => formData.type !== 'SNOWITAPP' && formData.setExplicitDates,
                },
            },
            {
                validFrom: {
                    width: 8,
                    doShow: ({ formData }) => formData.type !== 'SNOWITAPP' && !formData.setExplicitDates,
                },
                validUntil: {
                    width: 8,
                    doShow: ({ formData }) => formData.type !== 'SNOWITAPP' && !formData.setExplicitDates,
                },
            },
            {
                excludedDates: {
                    width: 16,
                    doShow: ({ formData }) => formData.type !== 'SNOWITAPP' && !formData.setExplicitDates,
                },
            },
        ],
        onlyDates: {
            'ui:field': 'inlineMultipleDatesPicker',
            'ui:options': {
                numberOfMonths: 4,
            },
        },
        excludedDates: {
            'ui:field': 'inlineMultipleDatesPicker',
            'ui:options': {
                numberOfMonths: 4,
                negative: true,
            },
        },
    };
    return jsonUiSchema;
};
exports.default = uiSchema;
