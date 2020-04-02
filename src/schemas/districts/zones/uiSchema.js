export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
    {
      active: {
        width: 4,
      },
      name: { width: 6 },
      permalink: { width: 6 },
      // districtUID: {
      //   width: 12,
      //   doDisable: ({ formData }) => formData.$$districtDisabled,
      // },
    },
    // {
    // },
  ],
  // districtUID: {
  //   'ui:widget': 'districtPicker',
  //   'ui:placeholder': 'Distretto a cui appartiene la zona',
  // },
};
