import {
  commonDataUILayout,
  commonDataUIAdvanced,
} from '../_common/_uiDefinitions';
import isEmpty from 'lodash/isEmpty';

export default ({ formData }) => {
  return {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
      ...commonDataUILayout,
      {
        durationHours: {
          width: 4,
          description: 'Indica la durata dello skipass durata in ore',
        },
        categoryUID: {
          width: 6,
          doShow: ({ formData }) => {
            return formData.districtUID;
          },
        },
        subCategoryUID: {
          width: 6,
          doShow: ({ formData }) => {
            return formData.districtUID && formData.categoryUID;
          },
        },
      },
      {
        externalUID: {
          width: 5,
          doShow: ({ formData }) => {
            return formData.districtUID;
          },
        },
        // partnerDelayedPayment: {
        //   width: 8,
        //   doShow: ({ formData }) => {
        //     return formData.type === 'skipass' && formData.districtUID;
        //   },
        // },
      },
      {
        bundle: {
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
        onlyPickup: { width: 6 },
        barcode: { width: 10 },
      },
      {
        insuranceIncluded: {
          width: 4,
        },
        insuranceUIDS: {
          width: 8,
        },
      },
      {
        details: { width: 16 },
      },
    ],
    ...commonDataUIAdvanced(),
    categoryUID: {
      'ui:widget': 'categoryPicker',
      'ui:placeholder': 'Seleziona categoria',
      'ui:options': {
        allowClear: true,
        conditions: null,
      },
    },
    subCategoryUID: {
      'ui:widget': 'subCategoryPicker',
      'ui:placeholder': 'Seleziona sotto categoria',
      'ui:options': {
        allowClear: true,
        collection: null,
      },
    },
    partnerDelayedPayment: {
      'ui:description':
        'Se deselezionato il pagamento al comprensorio viene eseguito quando un cliente effettua ordine.',
    },
    options: {
      'ui:description':
        'I prezzi delle opzioni vengono definiti nel listino prezzi',
    },
    insuranceUIDS: {
      items: {
        'ui:widget': 'productPicker',
        'ui:placeholder': 'Seleziona assicurazione',
        'ui:options': {
          conditions: [
            ['type', '==', 'insurance'],
            // [
            //   'districtUID',
            //   '==',
            //   formData.districtUID ? formData.districtUID : '',
            // ],
          ],
        },
      },
    },
  };
};
