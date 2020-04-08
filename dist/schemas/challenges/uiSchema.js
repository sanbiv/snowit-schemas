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
const lodash_1 = __importDefault(require("lodash"));
const types_1 = require("./types");
const constants_1 = require("../../constants");
const disciplinesCount = lodash_1.default.size(types_1.CHALLENGE_DISCIPLINES);
const disciplinesColumnSize = parseInt(16 / disciplinesCount, 10);
const typesCount = lodash_1.default.size(types_1.CHALLENGE_TYPES);
const typeColumnSize = parseInt(16 / typesCount, 10);
exports.default = {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
        {
            name: {
                width: 16,
            },
        },
        {
            description: {
                width: 16,
            },
        },
        {
            allDistricts: {
                width: 4,
            },
            districtUID: {
                width: 12,
                doShow: ({ formData }) => {
                    return formData.allDistricts ? false : true;
                },
            },
        },
        {
            status: {
                width: 4,
            },
            private: {
                width: 4,
            },
            order: {
                width: 4,
            },
        },
        {
            startDate: {
                width: 6,
                doShow: ({ formData }) => {
                    return formData.status === 'active';
                },
            },
            endDate: {
                width: 6,
                doShow: ({ formData }) => {
                    return formData.status === 'active';
                },
            },
            hour: {
                width: 4,
                doShow: ({ formData }) => {
                    return formData.status === 'active';
                },
            },
        },
        {
            disciplines: { width: 16 },
        },
        {
            challengeTypes: { width: 16 },
        },
        {
            images: {
                width: 16,
            },
        },
        {
            objectives: {
                width: 16,
            },
        },
        {
            price: {
                width: 16,
            },
        },
        {
            translations: {
                width: 16,
            },
        },
        {
            _: {
                width: 16,
                render: ({ formData }) => {
                    return <semantic_ui_react_1.Message content="NON ANCORA ATTIVO" error/>;
                },
            },
        },
    ],
    description: {
        'ui:widget': 'textarea',
    },
    allDistricts: {
        'ui:description': 'Se deselezionato è una sfida nazionale.',
    },
    districtUID: {
        'ui:widget': 'districtPicker',
        'ui:placeholder': 'Seleziona distretto',
    },
    disciplines: {
        'ui:field': 'layout',
        'ui:layout': [
            lodash_1.default.mapValues(types_1.CHALLENGE_DISCIPLINES, () => ({
                width: disciplinesColumnSize,
            })),
        ],
    },
    images: {
        'ui:field': 'layout',
        'ui:layout': [{ main: { width: 8 }, banner: { width: 8 } }],
        main: {
            'ui:widget': 'file',
            'ui:options': {
                accept: 'image/*',
            },
        },
        banner: {
            'ui:widget': 'file',
            'ui:options': {
                accept: 'image/*',
            },
        },
    },
    challengeTypes: {
        'ui:field': 'layout',
        title: 'Tipo sfida',
        'ui:layout': [
            lodash_1.default.mapValues(types_1.CHALLENGE_TYPES, () => ({
                width: typeColumnSize,
            })),
        ],
    },
    translations: Object.assign({ 'ui:field': 'layout', 'ui:layout': [
            lodash_1.default.mapValues(constants_1.LANGUAGES, () => ({
                width: 16,
            })),
        ] }, lodash_1.default.mapValues(constants_1.LANGUAGES, () => ({
        'ui:field': 'layout',
        'ui:layout': [
            {
                _: {
                    render: (_a) => {
                        var { formData } = _a, props = __rest(_a, ["formData"]);
                        const { key } = props.schema;
                        return constants_1.LANGUAGE_FLAGS[key] ? (<semantic_ui_react_1.Flag name={constants_1.LANGUAGE_FLAGS[key]}/>) : null;
                    },
                    verticalAlign: 'middle',
                },
                name: { width: 8 },
                termsCond: { width: 7 },
            },
            {
                bonus: { width: 16 },
            },
            {
                bonusShortText: { width: 16 },
            },
        ],
        termsCond: {
            'ui:widget': 'textarea',
        },
        bonus: {
            items: {
                'ui:widget': 'textarea',
            },
        },
    }))),
    objectives: {
        'ui:options': {
            addLabel: 'Aggiungi obiettivo',
            removeConfirmLabel: 'Rimuovi obiettivo',
            emptyAllButton: true,
        },
        items: {
            'ui:field': 'layout',
            'ui:layout': [
                {
                    type: { width: 3 },
                    treshold: { width: 3 },
                    description: { width: 10 },
                },
            ],
            'ui:options': {},
            description: {
                'ui:widget': 'textarea',
            },
        },
    },
};
