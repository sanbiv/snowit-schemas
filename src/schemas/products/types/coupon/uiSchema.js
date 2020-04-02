import React from 'react';
import { Header } from 'semantic-ui-react';
import {
  commonDataUILayout,
  commonDataUIAdvanced,
} from '../_common/_uiDefinitions';
import { uiSchema as giftCardUiSchemaBuilder } from '../_common/_giftCard';
import isEmpty from 'lodash/isEmpty';
import { Divider } from 'semantic-ui-react';

export default ({ formData }) => {
  return {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
      ...commonDataUILayout,
      {
        partnerDelayedPayment: {
          width: 4,
        },
      },
      {
        _: {
          render: () => (
            <Header
              as="h2"
              icon="gift"
              content="Articoli/prodotti inclusi e date riscatto del coupon/gift card"
              color="orange"
            />
          ),
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
          doShow: ({ formData }) =>
            formData._productOptions && !isEmpty(formData._productOptions),
        },
      },
      {
        redeemAvailability: { width: 16, color: 'yellow' },
      },
    ],
    ...commonDataUIAdvanced(),
    partnerDelayedPayment: {
      'ui:description':
        'Se deselezionato il pagamento al comprensorio viene eseguito quando un cliente effettua ordine.',
    },
    _productItems: {
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
    },
    giftCardProductsRules: {
      ...giftCardUiSchemaBuilder({ formData }),
    },
    redeemAvailability: {
      'ui:field': 'layout',
      'ui:layout': [
        {
          dateInterval: {
            width: 8,
            doShow: ({ formData: { onlyDates } }) =>
              onlyDates && onlyDates.length > 0 ? false : true,
          },
          exceptDates: {
            width: 8,
            doShow: ({ formData: { onlyDates } }) =>
              onlyDates && onlyDates.length > 0 ? false : true,
          },
        },
        {
          _: {
            width: 16,
            render: () => <Divider horizontal>OPPURE</Divider>,
            doShow: ({ formData: { dateInterval, onlyDates } }) => {
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
    },
    options: {
      'ui:description':
        'I prezzi delle opzioni vengono definiti nel listino prezzi',
    },
  };
};
