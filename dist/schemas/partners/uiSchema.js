"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const i18n_1 = require("../../../utils/i18n");
exports.default = Object.assign(Object.assign({ classNames: 'form-root', 'ui:field': 'layout', 'ui:layout': [
        {
            type: {
                width: 6,
                doDisable: ({ formData }) => (formData._id ? true : false),
            },
        },
        {
            parentUID: {
                width: 4,
            },
            districtUID: {
                width: 4,
                doShow: ({ formData }) => formData.type !== 'district',
                doDisable: ({ formData }) => (formData._id ? true : false),
            },
            tenant: {
                width: 4,
            },
        },
        {
            cover: {
                width: 8,
            },
        },
        {
            name: { width: 9 },
            permalink: { width: 7 },
        },
        {
            pageTexts: { width: 16 },
        },
        {
            openingTimeTranslations: { width: 16 },
        },
        {
            metatags: { width: 16 },
        },
        {
            active: {
                width: 6,
            },
            purchasable: {
                width: 5,
                doShow: ({ formData }) => formData.type === 'district',
            },
            public: {
                width: 5,
            },
        },
        {
            snowitCommission: { width: 8 },
            bccOrderEmail: { width: 8, doShow: ({ formData }) => formData.active },
        },
        {
            provider: {
                width: 8,
                doShow: ({ formData }) => formData.active && formData.type === 'district',
            },
        },
        {
            skidata: {
                width: 16,
                doShow: ({ formData }) => formData.provider === 'skidata' &&
                    formData.active &&
                    formData.type === 'district',
            },
        },
        {
            axess: {
                width: 16,
                doShow: ({ formData }) => formData.provider === 'axess' &&
                    formData.active &&
                    formData.type === 'district',
            },
        },
        {
            skiwork: {
                width: 16,
                doShow: ({ formData }) => formData.provider === 'skiwork' &&
                    formData.active &&
                    formData.type === 'district',
            },
        },
        {
            easyrent: {
                width: 16,
                doShow: ({ formData }) => formData.provider === 'easyrent' &&
                    formData.active &&
                    formData.type === 'district',
            },
        },
        {
            address: { width: 8 },
            location: { width: 8 },
        },
        {
            additionalInfo: {
                width: 16,
            },
        },
        {
            modalInfo: {
                width: 16,
            },
        },
        {
            externalLinks: {
                width: 16,
            },
        },
        {
            productTypes: { width: 16 },
        },
        {
            openingCalendar: { width: 16 },
        },
    ], cover: {
        'ui:widget': 'file',
        'ui:options': {
            accept: 'image/*',
        },
    }, parentUID: {
        'ui:widget': 'partnerPicker',
        'ui:placeholder': 'Nessun parent',
        'ui:options': {
            onlyRoots: true,
        },
    }, districtUID: {
        'ui:widget': 'districtPicker',
        'ui:placeholder': 'Seleziona distretto',
        'ui:options': {
            all: true,
        },
    }, openingCalendar: {
        'ui:field': 'layout',
        'ui:layout': [
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
    }, skidata: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                catalog_id: { width: 5 },
                catalog_version: { width: 5 },
                client_name: { width: 5 },
            },
            {
                code: { width: 5 },
                username: { width: 5 },
                working_client_name: { width: 5 },
            },
        ],
    }, axess: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                code: { width: 10 },
                countryCode: { width: 6 },
            },
            {
                loginId: { width: 10 },
                loginMode: { width: 6 },
            },
            {
                poolNo: { width: 5 },
                posNo: { width: 5 },
                projectNo: { width: 6 },
            },
            {
                soapCode: { width: 5 },
                soapUsername: { width: 5 },
                username: { width: 6 },
            },
        ],
    }, easyrent: {
        'ui:field': 'layout',
        'ui:layout': [
            {
                access_id: { width: 6 },
                er_branchid: { width: 5 },
                er_depotlocationid: { width: 5 },
            },
        ],
    } }, i18n_1.buildUiSchemaLayout({
    openingTime: {
        'ui:widget': 'wysiwyg',
        columns: 2,
    },
})), { externalLinks: {
        items: Object.assign({ 'ui:field': 'layout', 'ui:layout': [
                {
                    titleTranslations: { width: 16 },
                },
                {
                    urlTranslations: { width: 16 },
                },
            ] }, i18n_1.buildUiSchemaLayout({
            title: {
                columns: 2,
            },
            url: {
                columns: 2,
            },
        })),
    }, pageTexts: Object.assign({ 'ui:field': 'layout', 'ui:layout': [
            {
                titleTranslations: { width: 16 },
            },
            {
                subtitleTranslations: { width: 16 },
            },
            {
                descriptionTranslations: { width: 16 },
            },
            {
                buyProductsCtaTranslations: { width: 16 },
            },
            {
                buyProductsDescriptionTranslations: { width: 16 },
            },
        ] }, i18n_1.buildUiSchemaLayout({
        title: {
            columns: 2,
        },
        subtitle: {
            columns: 2,
        },
        description: {
            'ui:widget': 'wysiwyg',
            columns: 2,
        },
        buyProductsCta: {
            columns: 2,
        },
        buyProductsDescription: {
            'ui:widget': 'wysiwyg',
            columns: 2,
        },
    })), additionalInfo: {
        items: Object.assign({ 'ui:field': 'layout', 'ui:layout': [
                {
                    headerTranslations: { width: 16 },
                },
                {
                    paragraphTranslations: { width: 16 },
                },
            ] }, i18n_1.buildUiSchemaLayout({
            header: {
                columns: 2,
            },
            paragraph: {
                'ui:widget': 'wysiwyg',
                columns: 2,
            },
        })),
    }, modalInfo: {
        items: Object.assign({ 'ui:field': 'layout', 'ui:layout': [
                {
                    textTranslations: { width: 16 },
                },
                {
                    type: { width: 16 },
                },
            ] }, i18n_1.buildUiSchemaLayout({
            text: {
                columns: 2,
            },
        })),
    }, metatags: Object.assign(Object.assign({ 'ui:field': 'layout', 'ui:layout': [
            {
                titleTranslations: { width: 16 },
            },
            {
                robots: {
                    width: 8,
                },
            },
            {
                descriptionTranslations: {
                    width: 16,
                },
            },
            {
                facebook: {
                    width: 16,
                },
            },
        ] }, i18n_1.buildUiSchemaLayout({
        title: {
            columns: 2,
        },
        description: {
            'ui:widget': 'textarea',
            columns: 2,
        },
    })), { facebook: Object.assign({ 'ui:field': 'layout', 'ui:layout': [
                {
                    type: {
                        width: 8,
                    },
                },
                {
                    titleTranslations: {
                        width: 16,
                    },
                },
                {
                    descriptionTranslations: {
                        width: 16,
                    },
                },
                {
                    siteName: { width: 8 },
                    image: { width: 8 },
                },
            ], image: {
                'ui:widget': 'file',
                'ui:options': {
                    accept: 'image/*',
                },
            } }, i18n_1.buildUiSchemaLayout({
            title: {
                columns: 2,
            },
            description: {
                'ui:widget': 'textarea',
                columns: 2,
            },
        })) }) });
