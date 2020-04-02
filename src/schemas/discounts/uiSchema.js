import React from 'react';
import reduce from 'lodash/reduce';
import chunk from 'lodash/chunk';
import { buildUiSchemaLayout } from '../../../utils/i18n';
import { Header, Message, Icon, Divider } from 'semantic-ui-react';
import { PRODUCT_TYPE_ENUMS } from '../products/types';

export default formData => {
  const uiSchema = {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
      {
        _: {
          render: () => (
            <Message
              warning
              icon="info"
              header="Attenzione"
              content="Alcune opzioni sono disponibili solo per sconti con codice o viceversa."
            />
          ),
        },
      },
      {
        active: { width: 3 },
        code: {
          width: 5,
          color: formData && formData.code ? 'purple' : 'grey',
        },
        combinable: { width: 4, doShow: ({ formData }) => formData.code },
        combinableWithProductDiscounts: {
          width: 4,
          doShow: ({ formData }) => formData.code,
        },
      },
      {
        type: { width: 4 },
        value: { width: 4 },
        minDiscountValue: {
          width: 4,
          doShow: ({ formData }) => formData.type === 'percentage',
        },
        maxDiscountValue: {
          width: 4,
          doShow: ({ formData }) => formData.type === 'percentage',
        },
      },
      {
        minOrderValue: { width: 3, doShow: ({ formData }) => formData.code },
        usageMax: {
          width: 3,
          doShow: ({ formData }) => formData.code,
        },
        usagePerUser: {
          width: 3,
          doShow: ({ formData }) => formData.code,
        },
      },
      {
        nameTranslations: { width: 16 },
      },
      {
        _: {
          render: () => <Header icon="settings" content="Regole di validità" />,
        },
      },
      {
        productUIDS: {
          width: 16,
        },
      },
      {
        _: {
          width: 16,
          render: () => <Divider horizontal>OPPURE</Divider>,
          doShow: ({ formData }) =>
            !formData.productUIDS || formData.productUIDS.length === 0,
        },
      },
      {
        productTypes: {
          width: 16,
          doShow: ({ formData }) =>
            !formData.productUIDS || formData.productUIDS.length === 0,
        },
      },
      {
        validateItemDate: { width: 16 },
      },
      {
        allDistricts: {
          width: 3,
          doShow: ({ formData }) =>
            !formData.productUIDS || formData.productUIDS.length === 0,
        },
        districtUIDS: {
          width: 13,
          doShow: ({ formData }) =>
            !formData.allDistricts &&
            (!formData.productUIDS || formData.productUIDS.length === 0),
        },
      },
      {
        allPartners: {
          width: 3,
          doShow: ({ formData }) =>
            !formData.productUIDS || formData.productUIDS.length === 0,
        },
        partnerUIDS: {
          width: 13,
          doShow: ({ formData }) =>
            !formData.allPartners &&
            (!formData.productUIDS || formData.productUIDS.length === 0),
        },
      },
      {
        allCategories: {
          width: 3,
          doShow: ({ formData }) =>
            !formData.productUIDS || formData.productUIDS.length === 0,
        },
        categoryUIDS: {
          width: 13,
          doShow: ({ formData }) =>
            !formData.allCategories &&
            (!formData.productUIDS || formData.productUIDS.length === 0),
        },
      },
      {
        _: {
          render: () => {
            return (
              <Header dividing>
                <Icon name="calendar alternate" />
                Calendario/date di validità dello sconto
              </Header>
            );
          },
        },
      },
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
      {
        _: {
          render: () => {
            return <Header dividing icon="info circle" content="Extra" />;
          },
        },
      },
      // {
      //   giftProductUIDS: { width: 16 },
      // },
      // {
      //   _: {
      //     render: () => {
      //       return (
      //         <Message negative>
      //           <Icon name="warning sign" />
      //           ATTENZIONE: I prodotti sopra elencati verranno inseriti nel
      //           carrello con costo uguale a 0.
      //         </Message>
      //       );
      //     },
      //     doShow: ({ formData }) =>
      //       formData.giftProductUIDS && formData.giftProductUIDS.length > 0,
      //   },
      // },
      {
        _: {
          render: () => {
            return (
              <Header dividing>
                <Icon name="info" />
                Altri dettagli
              </Header>
            );
          },
        },
      },
      {
        descriptionTranslations: { width: 16 },
      },
    ],
    value: {
      'ui:title':
        formData.type === 'percentage'
          ? 'Percentuale sconto'
          : 'Importo dello sconto',
      'ui:options': {
        inputProps: {
          icon: formData.type === 'percentage' ? 'percent' : 'eur',
          iconPosition: 'left',
        },
      },
    },
    minOrderValue: {
      'ui:options': {
        inputProps: {
          icon: 'eur',
          iconPosition: 'left',
        },
      },
    },
    minDiscountValue: {
      'ui:options': {
        inputProps: {
          icon: 'eur',
          iconPosition: 'left',
        },
      },
    },
    maxDiscountValue: {
      'ui:options': {
        inputProps: {
          icon: 'eur',
          iconPosition: 'left',
        },
      },
    },
    usageMax: {
      'ui:placeholder': 'Senza limiti',
      'ui:description': 'Indica la disponibilità massima dei codici',
    },
    usagePerUser: {
      'ui:placeholder': 'Senza limiti',
      'ui:description':
        'Indica quante volte un utente può utilizzare il codice (se disponibile)',
    },
    ...buildUiSchemaLayout({
      name: { columns: 2 },
      description: { columns: 2, 'ui:widget': 'wysiwyg' }, // wysiwyg
    }),
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
    districtUIDS: {
      items: {
        'ui:widget': 'districtPicker',
        'ui:title': 'Distretto',
      },
    },
    partnerUIDS: {
      items: {
        'ui:widget': 'partnerPicker',
        'ui:title': 'Partner',
      },
    },
    categoryUIDS: {
      items: {
        'ui:widget': 'categoryPicker',
        'ui:title': 'Categoria',
      },
    },
    productUIDS: {
      items: {
        'ui:widget': 'productPicker',
        'ui:title': 'Prodotto',
      },
    },
    validateItemDate: {
      'ui:placeholder':
        'Se flaggato, controlla la data in cui viene utilizzato il prodotto (quindi la data del prodotto acquistato)',
    },
    // giftProductUIDS: {
    //   items: {
    //     'ui:widget': 'productPicker',
    //   },
    // },
    productTypes: {
      'ui:field': 'layout',
      'ui:layout': chunk(PRODUCT_TYPE_ENUMS, 3).map(row =>
        reduce(
          row,
          (cols, type) => {
            cols[type] = { width: 5 };
            return cols;
          },
          {}
        )
      ),
    },
  };
  // uiSchema['ui:layout'][1].code.color =
  //   formData && formData.code ? 'purple' : 'grey';

  return uiSchema;
};
