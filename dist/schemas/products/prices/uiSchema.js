"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const i18n_1 = require("../../../../utils/i18n");
const moment_1 = __importDefault(require("moment"));
exports.default = {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
        {
            priceRule: { width: 16 },
        },
        {
            fixedPrice: {
                width: 16,
                doShow: ({ formData }) => formData.priceRule === 'fixed',
            },
        },
        {
            fixedPricePerDuration: {
                width: 16,
                doShow: ({ formData }) => formData.priceRule === 'fixedPerDuration',
            },
        },
        {
            dynamicPrices: {
                width: 16,
                doShow: ({ formData }) => formData.priceRule === 'dynamic',
            },
        },
        {
            _: {
                width: 16,
                render: ({ formData }) => {
                    return (<semantic_ui_react_1.Message color="yellow" icon>
              <semantic_ui_react_1.Icon name="info"/>
              Nessuna configurazione stagione trovata per il distretto{' '}
              {formData.districtUID}
            </semantic_ui_react_1.Message>);
                },
            },
        },
        {
            prices: {
                width: 16,
                doShow: ({ formData }) => formData.priceRule === 'dayByDay',
            },
        },
    ],
    prices: {
        'ui:options': {
            addable: true,
            sortable: true,
            removable: true,
            addLabel: 'Aggiungi prezzo',
            removeConfirmLabel: 'Rimuovi prezzo',
            canAddBatch: [2, 3, 5, 7, 14, 30],
            emptyAllButton: true,
            beforeCreate: (newPriceData, index, props) => {
                if (index !== undefined && newPriceData.date) {
                    return Object.assign(Object.assign({}, newPriceData), { date: moment_1.default(newPriceData.date)
                            .add(index, 'day')
                            .format('YYYY-MM-DD') });
                }
                return newPriceData;
            },
        },
        items: {
            'ui:field': 'layout',
            'ui:layout': [
                {
                    date: {
                        width: 3,
                    },
                    price: {
                        width: 3,
                    },
                    discount: {
                        width: 3,
                    },
                    name: {
                        width: 4,
                    },
                    externalPrice: {
                        width: 3,
                    },
                },
            ],
            'ui:options': {},
            price: {
                'ui:placeholder': 'Prezzo in €',
            },
            discount: {
                'ui:placeholder': '% sconto',
            },
        },
    },
    fixedPrice: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                price: { width: 5 },
                discount: { width: 5 },
                externalPrice: { width: 5 },
            },
        ],
    },
    fixedPricePerDuration: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                price: { width: 4 },
                duration: { width: 4 },
                discount: { width: 4 },
                externalPrice: { width: 4 },
            },
        ],
    },
    dynamicPrices: {
        'ui:options': {
            emptyAllButton: false,
            addable: false,
            orderable: false,
            removable: false,
        },
        items: {
            'ui:field': 'layout',
            'ui:layout': [
                {
                    _: {
                        render: ({ formData }) => {
                            const { season, seasonUID } = formData;
                            let props = {};
                            if (season &&
                                season.districtUID &&
                                season.districtUID !== 'all') {
                                props.color = 'yellow';
                            }
                            else {
                                props.color = 'purple';
                            }
                            return (<semantic_ui_react_1.Header as="h2" icon="calendar" {...props} content={i18n_1.translate(season, 'name') || seasonUID}/>);
                        },
                        width: 16,
                    },
                },
                {
                    price: { width: 3 },
                    discount: { width: 3 },
                    externalPrice: { width: 3 },
                    dynamicDiscounts: {
                        width: 7,
                        doDisable: ({ formData }) => !formData.price || formData.price <= 0,
                    },
                },
            ],
            dynamicDiscounts: {
                'ui:options': {
                    emptyAllButton: true,
                    addable: true,
                    orderable: true,
                    removable: true,
                },
                items: {
                    'ui:field': 'layout',
                    'ui:layout': [
                        {
                            daysBefore: {
                                width: 8,
                            },
                            discount: {
                                width: 8,
                            },
                        },
                    ],
                },
            },
        },
    },
};
