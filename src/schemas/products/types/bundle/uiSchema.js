import {
  commonDataUILayout,
  commonDataUIAdvanced,
} from '../_common/_uiDefinitions';
import isEmpty from 'lodash/isEmpty';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
    ...commonDataUILayout,
    {
      durationHours: {
        width: 4,
        // doShow: ({ formData }) => {
        //   return formData.type === 'skipass';
        // },
        description: 'Indica la durata dello skipass durata in ore',
      },
      categoryUID: {
        width: 6,
        doShow: ({ formData }) => {
          return formData.districtUID;
        },
      },
    },
    {
      _productItems: {
        width: 16,
      },
    },
    {
      options: {
        width: 16,
        doShow: ({ formData }) =>
          formData._productOptions && !isEmpty(formData._productOptions),
      },
    },
    {
      adults: {
        width: 8,
      },
      juniors: {
        width: 8,
      },
      kids: {
        width: 8,
      },
    },
    {
      durationType: {
        width: 8,
      },
    },
  ],
  ...commonDataUIAdvanced(),
  categoryUID: {
    'ui:widget': 'categoryPicker',
    'ui:placeholder': 'Seleziona categoria',
    'ui:options': {
      allowClear: true,
      conditions: [['taxonomyType', '==', 'bundle']],
    },
  },
  _productItems: {
    items: {
      'ui:field': 'layout',
      'ui:layout': [{ productUID: { width: 12 }, quantity: { width: 4 } }],
      productUID: {
        'ui:widget': 'productPicker',
        'ui:placeholder': 'Seleziona prodotto',
        'ui:options': {
          // conditions: [['type', '>=', 'bundle'], ['type', '<', 'bundle']],
        },
      },
    },
  },
  options: {
    'ui:description':
      'I prezzi delle opzioni vengono definiti nel listino prezzi',
  },
};
