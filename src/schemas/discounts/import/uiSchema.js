import React from 'react';
import { Message } from 'semantic-ui-react';

const uiSchema = ({ formData: form }) => {
  const jsonUiSchema = {
    classNames: 'form-root',
    discountCodes: {
      'ui:widget': 'textarea',
    },
    'ui:field': 'layout',
    'ui:layout': [
      { discountCodes: { width: 16 } },
      {
        quantity: { width: 6 },

        type: { width: 10, doDisable: ({ formData: data }) => data.$lockType },
      },
      {
        _: {
          width: 16,
          // eslint-disable-next-line react/prop-types
          render: ({ formData, ...props }) => {
            return (
              <Message
                icon="warning circle"
                color="red"
                content={`Attenzione, Hai indicato il limite di utilizzi a ${formData.quantity} volte. Sei sicuro?`}
              />
            );
          },
          verticalAlign: 'middle',
          doShow: ({ formData }) => formData.quantity > 1,
        },
      },
      // {
      //   name: { width: 8 },
      //   termsCond: { width: 4 },
      // },
      // {
      //   setExplicitDates: {
      //     width: 5,
      //     doShow: ({ formData }) => formData.type !== 'SNOWITAPP',
      //   },
      // },
      // {
      //   onlyDates: {
      //     width: 16,
      //     doShow: ({ formData }) =>
      //       formData.type !== 'SNOWITAPP' && formData.setExplicitDates,
      //   },
      // },
      // {
      //   validFrom: {
      //     width: 8,
      //     doShow: ({ formData }) =>
      //       formData.type !== 'SNOWITAPP' && !formData.setExplicitDates,
      //   },
      //   validUntil: {
      //     width: 8,
      //     doShow: ({ formData }) =>
      //       formData.type !== 'SNOWITAPP' && !formData.setExplicitDates,
      //   },
      // },
      // {
      //   excludedDates: {
      //     width: 16,
      //     doShow: ({ formData }) =>
      //       formData.type !== 'SNOWITAPP' && !formData.setExplicitDates,
      //   },
      // },
    ],
    // onlyDates: {
    //   'ui:field': 'inlineMultipleDatesPicker',
    //   'ui:options': {
    //     numberOfMonths: 4,
    //   },
    // },
    // excludedDates: {
    //   'ui:field': 'inlineMultipleDatesPicker',
    //   'ui:options': {
    //     numberOfMonths: 4,
    //     negative: true,
    //   },
    // },
  };
  return jsonUiSchema;
};

export default uiSchema;
