import {
  commonDataUILayout,
  commonDataUIAdvanced,
} from '../_common/_uiDefinitions';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
    ...commonDataUILayout,
    {
      productType: {
        width: 6,
      },
      default: {
        width: 6,
      },
      durationHours: {
        width: 4,
        doShow: ({ formData }) => {
          return !formData.default;
        },
      },
    },
    {
      externalProductUID: {
        // colpa di MARCO! era per tutti externalUID!! cristo santo (DUPLICO)
        width: 16,
      },
    },
    {
      bundle: {
        width: 16,
        doShow: ({ formData }) => {
          return formData.type !== 'coupon';
        },
      },
    },
  ],
  ...commonDataUIAdvanced(),
};
