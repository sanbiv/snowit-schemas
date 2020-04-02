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
        description: "Indica la durata dell'esperienza in ore",
      },
      categoryUID: { width: 6 },
      equipmentType: { width: 6 },
    },
    {
      bundle: {
        width: 16,
        doShow: ({ formData }) => {
          return formData.type !== 'coupon';
        },
      },
    },
    {
      externalUID: { width: 6 },
      externalModelUID: { width: 6 },
      insuranceIncluded: { width: 4 },
    },
    {
      options: {
        width: 16,
        doShow: ({ formData }) =>
          formData._productOptions && !isEmpty(formData._productOptions),
      },
    },
    {
      level: {
        width: 16,
      },
    },
  ],
  ...commonDataUIAdvanced(),
  categoryUID: {
    'ui:widget': 'categoryPicker',
    'ui:placeholder': 'Seleziona categoria',
    'ui:options': {
      allowClear: true,
      conditions: () => ({ taxonomyType: 'rental' }),
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
};
