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
      default: { width: 16 },
    },
    {
      bundle: {
        width: 16,
      },
    },
  ],
  ...commonDataUIAdvanced(),
};
