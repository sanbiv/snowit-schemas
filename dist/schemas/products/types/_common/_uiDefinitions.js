"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const ProductTypeHeader_1 = __importDefault(require("../../../../../components/ProductTypeHeader"));
const i18n_1 = require("../../../../../utils/i18n");
const constants_1 = require("../../constants");
const commonDataUILayout = [
    {
        _: {
            width: 4,
            render: ({ formData }) => {
                let iconName;
                if (formData.type === 'coupon' && formData.openGiftCard) {
                    iconName = 'gift';
                }
                return <ProductTypeHeader_1.default type={formData.type} iconName={iconName}/>;
            },
        },
        partnerUID: {
            width: 5,
        },
        tenant: {
            width: 2,
            doShow: ({ formData }) => {
                return formData.partner && formData.partner.tenant;
            },
        },
        districtUID: {
            width: 5,
        },
    },
    {
        nameTranslations: {
            width: 16,
        },
    },
    {
        permalinkTranslations: { width: 16 },
    },
    {
        descriptionTranslations: {
            width: 16,
        },
    },
    {
        featureTranslations: { width: 16 },
    },
    {
        zoneUIDS: {
            width: 16,
            doShow: ({ formData }) => formData.$$selectedZones,
        },
    },
    {
        venueUIDS: {
            width: 16,
            doShow: ({ formData }) => formData.$$selectedVenues,
        },
    },
    {
        hidden: {
            width: 4,
        },
        unavailable: {
            width: 3,
        },
        highlighted: {
            width: 3,
        },
        addressRequired: {
            width: 3,
        },
        optionalAssociation: {
            width: 3,
        },
    },
    {
        availability: { width: 16 },
    },
    {
        withoutCommissions: {
            width: 6,
        },
        snowitCommission: {
            width: 10,
            doShow: ({ formData }) => !formData.withoutCommissions,
        },
    },
    {
        cover: { width: 8 },
        links: { width: 8 },
    },
    {
        phoneRequired: {
            width: 16,
        },
    },
    {
        providerName: {
            width: 16,
            doShow: ({ formData }) => {
                return formData.districtUID;
            },
        },
    },
    {
        wordpressGalleryActive: {
            width: 4,
        },
        wordpressGalleryTag: {
            width: 12,
            doShow: ({ formData }) => formData.wordpressGalleryActive,
        },
    },
    {
        extraInfoTranslations: {
            width: 16,
        },
    },
    {
        mailInfoTranslations: {
            width: 16,
        },
    },
];
exports.commonDataUILayout = commonDataUILayout;
const commonDataUIAdvanced = () => {
    return Object.assign(Object.assign({ cover: {
            'ui:widget': 'file',
            'ui:options': {
                accept: 'image/*',
            },
        }, partnerUID: {
            'ui:widget': 'partnerPicker',
            'ui:placeholder': 'Seleziona il partner',
        }, districtUID: {
            'ui:widget': 'districtPicker',
            'ui:help': 'Distretto (se diverso da partner)',
            'ui:options': {
                all: true,
            },
        }, addressRequired: {
            'ui:description': 'Forza richiesta indirizzo di spedizione quando si acquista',
        }, partnerDelayedPayment: {
            'ui:description': 'Se deselezionato il pagamento al comprensorio viene eseguito quando un cliente effettua ordine.',
        }, availability: Object.assign({}, availabilityUiSchema), links: Object.assign({}, linksUiSchema) }, i18n_1.buildUiSchemaLayout({
        name: { columns: 2 },
        permalink: { columns: 2 },
        description: { columns: 2, 'ui:widget': 'textarea' },
        feature: { columns: 2 },
        extraInfo: { columns: 2, 'ui:widget': 'textarea' },
        mailInfo: { columns: 2, 'ui:widget': 'textarea' },
    })), { venueUIDS: {
            'ui:field': 'layout',
            'ui:layout': [],
        }, zoneUIDS: {
            'ui:field': 'layout',
            'ui:layout': [],
        } });
};
exports.commonDataUIAdvanced = commonDataUIAdvanced;
const bundleUiSchema = {
    'ui:options': {
        addLabel: 'Aggiungi prodotto abbinato',
        removeConfirmLabel: 'Rimuovi prodotto abbinato',
        emptyAllButton: true,
    },
    items: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                productUID: { width: 8 },
                quantity: { width: 8 },
            },
            {
                _: { width: 8, render: () => null },
                __: {
                    width: 8,
                    render: ({ formData }) => {
                        const props = { icon: 'info', info: true };
                        if (formData.quantity === constants_1.BUNDLE_SAME_QUANTITY) {
                            props.content = (<div>
                  Può essere utile nei casi in cui si voglia regalare, ad
                  esempio, uno skipass bimbo (€ = 0) se uno acquista uno skipass
                  multigiornaliero, quindi:
                  <br />
                  (uno skipass bimbo gratuito per ogni skipass multigiornaliero)
                </div>);
                        }
                        else if (formData.quantity === constants_1.BUNDLE_NO_LIMIT) {
                            props.content = 'Nessun limite';
                            props.icon = 'warning';
                        }
                        else {
                            props.content = `Per acquistare un prodotto ogni ${formData.quantity} pezzi`;
                        }
                        return <semantic_ui_react_1.Message {...props}/>;
                    },
                },
            },
        ],
        'ui:options': {},
        productUID: {
            'ui:widget': 'productPicker',
            'ui:placeholder': 'Seleziona prodotto',
            'ui:options': {},
        },
    },
};
exports.bundleUiSchema = bundleUiSchema;
const availabilityUiSchema = {
    'ui:field': 'layout',
    'ui:layout': [
        {
            _: {
                doShow: ({ formData }) => formData.type === 'coupon',
                render: () => {
                    return (<semantic_ui_react_1.Message warning icon="warning" header="Attenzione" content="Le informazioni di seguito sono VALIDE solo quando si prova a riscattare "/>);
                },
            },
        },
        {
            quantity: { width: 6 },
            daysAdvance: { width: 6 },
            quantityPerVenue: { width: 4 },
        },
        {
            calendarEnabled: { width: 16 },
        },
        {
            dateInterval: {
                width: 8,
                doShow: ({ formData: { onlyDates, calendarEnabled } }) => !calendarEnabled || (onlyDates && onlyDates.length > 0)
                    ? false
                    : true,
            },
            exceptDates: {
                width: 8,
                doShow: ({ formData: { onlyDates, calendarEnabled } }) => !calendarEnabled || (onlyDates && onlyDates.length > 0)
                    ? false
                    : true,
            },
        },
        {
            _: {
                width: 16,
                render: () => <semantic_ui_react_1.Divider horizontal>OPPURE</semantic_ui_react_1.Divider>,
                doShow: ({ formData: { dateInterval, onlyDates, calendarEnabled }, }) => {
                    if (!calendarEnabled)
                        return false;
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
                doShow: ({ formData: { calendarEnabled } }) => calendarEnabled ? true : false,
            },
        },
    ],
    daysAdvance: {
        'ui:description': 'Giorni necessari per la prenotazione, lasciare 0 per nessun giorno',
    },
    quantity: {
        'ui:description': 'Indica il numero di prodotti disponibili. Se il prodotto presenta slot indica la quantità per ogni slot',
    },
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
};
exports.availabilityUiSchema = availabilityUiSchema;
const linksUiSchema = {
    'ui:options': {
        addLabel: 'Aggiungi link',
        removeConfirmLabel: 'Rimuovi link',
        emptyAllButton: true,
    },
    items: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                href: { width: 16 },
            },
            {
                text: { width: 10 },
                target: { width: 6 },
            },
        ],
        href: {
            'ui:options': {
                inputProps: {
                    label: 'https://',
                },
            },
        },
    },
};
exports.linksUiSchema = linksUiSchema;
