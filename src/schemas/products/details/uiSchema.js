// import React from 'react';
// import { Message, Icon, Segment, Label } from 'semantic-ui-react';
// import { translate } from '../../../../utils/i18n';
// import moment from 'moment';
import { buildUiSchemaLayout } from '../../../../utils/i18n';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:displayLabel': false,
  'ui:layout': [
    {
      _activeSection: {
        width: 16,
      },
    },
    {
      gallery: {
        width: 16,
        doShow: ({ formData }) => formData._activeSection === 'gallery',
      },
      // priceDuration: {
    },
    {
      details: {
        width: 16,
      },
    },
  ],
  _activeSection: {
    'ui:widget': 'labelRadio',
    'ui:options': {
      uncheckIcon: 'circle notch',
      enumSettings: {
        details: {
          icon: 'file alternate outline',
        },
        gallery: {
          icon: 'image',
        },
      },
    },
  },
  gallery: {
    'ui:options': {
      addLabel: 'Aggiungi immagine o video',
      orderable: true,
      // displayLabel: false,
    },
    items: {
      'ui:field': 'layout',
      'ui:layout': [
        {
          type: { width: 5 },
          image: {
            width: 11,
            doShow: ({ formData }) => formData.type === 'image',
          },
          videoId: {
            width: 11,
            doShow: ({ formData }) => formData.type === 'youtube',
          },
          featured: { width: 5 },
        },
        {
          titleTranslations: { width: 16 },
        },
        {
          descriptionTranslations: { width: 16 },
        },
      ],
      image: {
        'ui:widget': 'fileOld',
        'ui:options': {
          accept: 'image/*',
        },
      },
      ...buildUiSchemaLayout({
        title: { columns: 2 },
        description: { columns: 2 }, //, 'ui:widget': 'textarea' },
      }),
    },
  },
  details: {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
      {
        fullDescription: { width: 16 },
      },
      {
        conditions: { width: 16 },
      },
      {
        metatags: { width: 16 },
      },
    ],
    fullDescription: {
      'ui:field': 'layout',
      'ui:layout': [
        {
          bodyTranslations: { width: 16 },
        },
      ],
      ...buildUiSchemaLayout({
        body: {
          columns: 2,
          'ui:widget': 'wysiwyg',
        },
      }),
    },
    conditions: {
      'ui:field': 'layout',
      'ui:layout': [
        {
          bodyTranslations: { width: 16 },
        },
      ],
      ...buildUiSchemaLayout({
        body: {
          columns: 2,
          'ui:widget': 'wysiwyg',
        },
      }),
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
  },
};
