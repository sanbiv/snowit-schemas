import React from 'react';
import { Message, Icon, Header } from 'semantic-ui-react';
import { translate } from '../../../../utils/i18n';
import moment from 'moment';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
    {
      priceRule: { width: 16 },
      // priceDuration: {
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
        // eslint-disable-next-line react/prop-types
        render: ({ formData }) => {
          return (
            <Message color="yellow" icon>
              <Icon name="info" />
              Nessuna configurazione stagione trovata per il distretto{' '}
              {formData.districtUID}
            </Message>
          );
        },
        // doShow: ({ formData }) => true,
        // formData.priceRule === 'dynamic' &&
        // (!formData.dynamicPrices || formData.dynamicPrices.length === 0),
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
          return {
            ...newPriceData,
            date: moment(newPriceData.date)
              .add(index, 'day')
              .format('YYYY-MM-DD'),
          };
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
            // doShow: ({ formData }) =>
            //   formData.productType === 'coupon' ||
            //   formData.productType === 'skipass',
          },
          price: {
            width: 3,
            // doShow: ({ formData }) => formData.productType !== 'coupon',
          },
          discount: {
            width: 3,
            // doShow: ({ formData }) => formData.productType === 'skipass',
          },
          name: {
            width: 4,
            // doShow: ({ formData }) => formData.productType === 'skipass',
          },
          externalPrice: {
            width: 3,
            // doShow: ({ formData }) => formData.productType === 'skipass',
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
    // 'ui:title': 'Prezzo fisso',
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
    // 'ui:title': 'Prezzo fisso (per durata)',
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
            // eslint-disable-next-line react/prop-types
            render: ({ formData }) => {
              const { season, seasonUID } = formData;
              let props = {};
              if (
                season &&
                season.districtUID &&
                season.districtUID !== 'all'
              ) {
                props.color = 'yellow';
              } else {
                props.color = 'purple';
              }
              return (
                <Header
                  as="h2"
                  icon="calendar"
                  {...props}
                  content={translate(season, 'name') || seasonUID}
                />
              );
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
