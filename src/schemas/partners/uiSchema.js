import React from 'react';
import { Divider } from 'semantic-ui-react';
import { buildUiSchemaLayout } from '../../../utils/i18n';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
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
        doShow: ({ formData }) =>
          formData.active && formData.type === 'district',
      },
    },
    {
      skidata: {
        width: 16,
        doShow: ({ formData }) =>
          formData.provider === 'skidata' &&
          formData.active &&
          formData.type === 'district',
      },
    },
    {
      axess: {
        width: 16,
        doShow: ({ formData }) =>
          formData.provider === 'axess' &&
          formData.active &&
          formData.type === 'district',
      },
    },
    {
      skiwork: {
        width: 16,
        doShow: ({ formData }) =>
          formData.provider === 'skiwork' &&
          formData.active &&
          formData.type === 'district',
      },
    },
    {
      easyrent: {
        width: 16,
        doShow: ({ formData }) =>
          formData.provider === 'easyrent' &&
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
  ],
  cover: {
    'ui:widget': 'file',
    'ui:options': {
      accept: 'image/*',
    },
  },
  parentUID: {
    'ui:widget': 'partnerPicker',
    'ui:placeholder': 'Nessun parent',
    'ui:options': {
      onlyRoots: true,
    },
  },
  districtUID: {
    'ui:widget': 'districtPicker',
    'ui:placeholder': 'Seleziona distretto',
    'ui:options': {
      all: true,
    },
  },
  openingCalendar: {
    'ui:field': 'layout',
    'ui:layout': [
      {
        calendarEnabled: { width: 16 },
      },
      {
        dateInterval: {
          width: 8,
          doShow: ({ formData: { onlyDates, calendarEnabled } }) =>
            !calendarEnabled || (onlyDates && onlyDates.length > 0)
              ? false
              : true,
        },
        exceptDates: {
          width: 8,
          doShow: ({ formData: { onlyDates, calendarEnabled } }) =>
            !calendarEnabled || (onlyDates && onlyDates.length > 0)
              ? false
              : true,
        },
      },
      {
        _: {
          width: 16,
          render: () => <Divider horizontal>OPPURE</Divider>,
          doShow: ({
            formData: { dateInterval, onlyDates, calendarEnabled },
          }) => {
            if (!calendarEnabled) return false;
            if (onlyDates && onlyDates.length > 0) return false;
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
          doShow: ({ formData: { calendarEnabled } }) =>
            calendarEnabled ? true : false,
        },
      },
    ],
  },
  skidata: {
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
  },
  axess: {
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
  },
  easyrent: {
    'ui:field': 'layout',
    'ui:layout': [
      {
        access_id: { width: 6 },
        er_branchid: { width: 5 },
        er_depotlocationid: { width: 5 },
      },
    ],
  },
  ...buildUiSchemaLayout({
    openingTime: {
      'ui:widget': 'wysiwyg',
      columns: 2,
    },
  }),
  externalLinks: {
    items: {
      'ui:field': 'layout',
      'ui:layout': [
        {
          titleTranslations: { width: 16 },
        },
        {
          urlTranslations: { width: 16 },
        },
      ],
      ...buildUiSchemaLayout({
        title: {
          columns: 2,
        },
        url: {
          columns: 2,
        },
      }),
    },
  },
  pageTexts: {
    'ui:field': 'layout',
    'ui:layout': [
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
    ],
    ...buildUiSchemaLayout({
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
    }),
  },
  additionalInfo: {
    items: {
      'ui:field': 'layout',
      'ui:layout': [
        {
          headerTranslations: { width: 16 },
        },
        {
          paragraphTranslations: { width: 16 },
        },
      ],
      ...buildUiSchemaLayout({
        header: {
          columns: 2,
        },
        paragraph: {
          'ui:widget': 'wysiwyg',
          columns: 2,
        },
      }),
    },
  },
  modalInfo: {
    items: {
      'ui:field': 'layout',
      'ui:layout': [
        {
          textTranslations: { width: 16 },
        },
        {
          type: { width: 16 },
        },
      ],
      ...buildUiSchemaLayout({
        text: {
          columns: 2,
        },
      }),
    },
  },
  metatags: {
    'ui:field': 'layout',
    'ui:layout': [
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
    ],
    ...buildUiSchemaLayout({
      title: {
        columns: 2,
      },
      description: {
        'ui:widget': 'textarea',
        columns: 2,
      },
    }),
    facebook: {
      'ui:field': 'layout',
      'ui:layout': [
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
      ],
      image: {
        'ui:widget': 'file',
        'ui:options': {
          accept: 'image/*',
        },
      },
      ...buildUiSchemaLayout({
        title: {
          columns: 2,
        },
        description: {
          'ui:widget': 'textarea',
          columns: 2,
        },
      }),
    },
  },
};
