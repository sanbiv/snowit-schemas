/* eslint-disable react/prop-types */
import React from 'react';
import { Message, Flag } from 'semantic-ui-react';
import _ from 'lodash';
import { CHALLENGE_DISCIPLINES, CHALLENGE_TYPES } from './types';
import { LANGUAGES, LANGUAGE_FLAGS } from '../../constants';
const disciplinesCount = _.size(CHALLENGE_DISCIPLINES);
const disciplinesColumnSize = parseInt(16 / disciplinesCount, 10);

const typesCount = _.size(CHALLENGE_TYPES);
const typeColumnSize = parseInt(16 / typesCount, 10);

export default {
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
          return <Message content="NON ANCORA ATTIVO" error />;
          // return <pre>{JSON.stringify(formData, null, 2)}</pre>;
        },
        // doShow: ({ formData }) => {
        //   if (
        //     formData.type === 'coupon' &&
        //     (!formData.price || formData.price <= 0 || !_.isNumber(formData.price))
        //   )
        //     return true;
        //   return false;
        // },
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
    // 'ui:options': {
    //   allowClear: true,
    //   conditions: null,
    // },
  },
  // startDate: {
  //   'ui:widget': 'alt-datetime',
  // },
  // endDate: {
  //   'ui:widget': 'alt-datetime',
  // },
  disciplines: {
    'ui:field': 'layout',
    'ui:layout': [
      _.mapValues(CHALLENGE_DISCIPLINES, () => ({
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
      _.mapValues(CHALLENGE_TYPES, () => ({
        width: typeColumnSize,
      })),
    ],
  },
  translations: {
    'ui:field': 'layout',
    'ui:layout': [
      _.mapValues(LANGUAGES, () => ({
        width: 16,
      })),
    ],
    ..._.mapValues(LANGUAGES, () => ({
      'ui:field': 'layout',
      'ui:layout': [
        {
          _: {
            render: ({ formData, ...props }) => {
              const { key } = props.schema;
              return LANGUAGE_FLAGS[key] ? (
                <Flag name={LANGUAGE_FLAGS[key]} />
              ) : null;
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
    })),
    // [
    //   // {
    //   //   _: { render: ({ formData }) => <Flag name="it" /> },
    //   //   name: { width: 8 },
    //   //   termsCond: { width: 4 },
    //   // },
    //   {
    //     name: { width: 6 },
    //     termsCond: { width: 10 },
    //   },
    //   {
    //     bonus: { width: 16 },
    //   },
    // ],
  },
  objectives: {
    'ui:options': {
      addLabel: 'Aggiungi obiettivo',
      removeConfirmLabel: 'Rimuovi obiettivo',
      // canAddBatch: [2, 3, 5, 7, 14, 30],
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
/* eslint-enable react/prop-types */
