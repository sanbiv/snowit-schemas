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
        width: 8,
        description: "Indica la durata dell'esperienza in ore",
      },
      categoryUID: {
        width: 8,
        doShow: ({ formData }) => {
          return formData.partnerUID;
        },
      },
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
  ],
  ...commonDataUIAdvanced(),
  categoryUID: {
    'ui:widget': 'categoryPicker',
    'ui:options': {
      allowClear: true,
      conditions: () => ({ taxonomyType: 'food' }),
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
