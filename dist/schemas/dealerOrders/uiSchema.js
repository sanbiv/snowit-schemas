"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
exports.default = {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
        {
            cash: {
                width: 16,
                doShow: ({ formData }) => formData.status === 'pending',
            },
        },
        {
            snowitcard: {
                width: 16,
                doDisable: ({ formData }) => formData.$$delivered,
                doShow: ({ formData }) => !formData.cash,
            },
        },
        {
            _: {
                width: 16,
                doShow: ({ formData }) => formData.cash,
                render: () => (<semantic_ui_react_1.Message negative header="Attenzione" content="La consegna della snowitcard e la gestione avviene offline. Non vengono eseguiti ordini verso skidata/axess."/>),
            },
        },
        {
            orderItemUID: {
                width: 16,
                doDisable: () => true,
                doShow: ({ formData }) => formData.status === 'pending' ? true : false,
            },
        },
        {
            snowitcardUser: {
                width: 16,
                doShow: ({ formData }) => (formData.snowitcard ? true : false),
            },
        },
        {
            dealerNotes: { width: 16 },
        },
    ],
    snowitcard: {
        'ui:options': {
            inputProps: {
                size: 'huge',
            },
            minimum: 0,
            maximum: 99999999,
        },
        'ui:placeholder': '00000000',
    },
    snowitcardUser: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                name: { width: 8, doDisable: ({ formData }) => formData.$$delivered },
                surname: {
                    width: 8,
                    doDisable: ({ formData }) => formData.$$delivered,
                },
            },
        ],
    },
    dealerNotes: {
        'ui:widget': 'textarea',
    },
};
