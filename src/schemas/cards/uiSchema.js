// import React from 'react';
export default {
  classNames: 'form-root',
  // 'ui:order': ['serialNumber', '*'],
  'ui:field': 'layout',
  'ui:layout': [
    {
      name: { width: 16 },
    },
    {
      serialNumber: { width: 16 },
    },
    {
      skidataUID: { width: 8 },
      axessUID: { width: 8 },
    },
    {
      userUID: { width: 16 },
    },
    {
      email: { width: 8 },
      phone: { width: 8 },
    },
    {
      user: { width: 16 },
    },
  ],
  userUID: {
    'ui:widget': 'userPicker',
  },
  user: {
    'ui:field': 'layout',
    'ui:layout': [
      {
        name: { width: 8 },
        surname: { width: 8 },
      },
      {
        birthday: { width: 16 },
      },
      { city: { width: 16 } },
      {
        fisi: { width: 16 },
      },
      {
        fisi_url: { width: 16 },
      },
      {
        photo_url: { width: 16 },
      },
      {
        front_url: { width: 16 },
      },
    ],
    // birthday: {
    //   'ui:widget'
    // }
  },
};
