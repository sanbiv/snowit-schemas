"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const _uiDefinitions_1 = require("../_common/_uiDefinitions");
const _giftCard_1 = require("../_common/_giftCard");
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const semantic_ui_react_2 = require("semantic-ui-react");
exports.default = ({ formData }) => {
    return Object.assign(Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
            ..._uiDefinitions_1.commonDataUILayout,
            {
                partnerDelayedPayment: {
                    width: 4,
                },
            },
            {
                _: {
                    render: () => (<semantic_ui_react_1.Header as="h2" icon="gift" content="Articoli/prodotti inclusi e date riscatto del coupon/gift card" color="orange"/>),
                },
            },
            {
                openGiftCard: { width: 16, color: 'yellow' },
            },
            {
                _productItems: {
                    width: 16,
                    color: 'yellow',
                    doShow: ({ formData }) => !formData.openGiftCard,
                },
            },
            {
                giftCardProductsRules: {
                    width: 16,
                    color: 'yellow',
                    doShow: ({ formData }) => formData.openGiftCard,
                },
            },
            {
                options: {
                    width: 16,
                    color: 'yellow',
                    doShow: ({ formData }) => formData._productOptions && !isEmpty_1.default(formData._productOptions),
                },
            },
            {
                redeemAvailability: { width: 16, color: 'yellow' },
            },
        ] }, _uiDefinitions_1.commonDataUIAdvanced()), { partnerDelayedPayment: {
            'ui:description': 'Se deselezionato il pagamento al comprensorio viene eseguito quando un cliente effettua ordine.',
        }, _productItems: {
            'ui:options': {
                addLabel: 'Aggiungi prodotto',
                removeConfirmLabel: 'Rimuovi prodotto',
                emptyAllButton: true,
            },
            items: {
                'ui:field': 'layout',
                'ui:layout': [
                    {
                        productUID: { width: 16 },
                    },
                ],
                'ui:options': {},
                productUID: {
                    'ui:widget': 'productPicker',
                    'ui:placeholder': 'Seleziona prodotto',
                },
            },
        }, giftCardProductsRules: Object.assign({}, _giftCard_1.uiSchema({ formData })), redeemAvailability: {
            'ui:field': 'layout',
            'ui:layout': [
                {
                    dateInterval: {
                        width: 8,
                        doShow: ({ formData: { onlyDates } }) => onlyDates && onlyDates.length > 0 ? false : true,
                    },
                    exceptDates: {
                        width: 8,
                        doShow: ({ formData: { onlyDates } }) => onlyDates && onlyDates.length > 0 ? false : true,
                    },
                },
                {
                    _: {
                        width: 16,
                        render: () => <semantic_ui_react_2.Divider horizontal>OPPURE</semantic_ui_react_2.Divider>,
                        doShow: ({ formData: { dateInterval, onlyDates } }) => {
                            if (onlyDates && onlyDates.length > 0)
                                return false;
                            if (dateInterval && (dateInterval.from || dateInterval.until)) {
                                return false;
                            }
                            return true;
                        },
                    },
                },
                {
                    onlyDates: {
                        width: 16,
                    },
                },
            ],
            dateInterval: {
                classNames: 'primary',
                'ui:field': 'inlineDateInterval',
                'ui:options': {
                    numberOfMonths: 3,
                },
            },
            exceptDates: {
                'ui:field': 'inlineMultipleDatesPicker',
                'ui:options': {
                    numberOfMonths: 3,
                    negative: true,
                },
            },
            onlyDates: {
                'ui:field': 'inlineMultipleDatesPicker',
                'ui:options': {
                    numberOfMonths: 6,
                },
            },
        }, options: {
            'ui:description': 'I prezzi delle opzioni vengono definiti nel listino prezzi',
        } });
};
