// import React from 'react'
// import { Header } from 'semantic-ui-react'

export default ({ slots, venues }) => () => {
  return {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
      {
        productUID: { width: 16, doDisable: () => true },
      },
      {
        confirmed: { width: 5 },
        date: { width: 6 },
        quantity: { width: 5 },
      },
      {
        slotUID: { width: 8, doShow: () => slots && slots.length > 0 },
        venueUID: { width: 8, doShow: () => venues && venues.length > 0 },
      },
      {
        orderUID: { width: 16, doDisable: ({ formData }) => !!formData._id },
      },
      {
        notes: { width: 16 },
      },
    ],
    productUID: {
      'ui:widget': 'productPicker',
    },
    notes: {
      'ui:widget': 'textarea',
    },
  };
};
