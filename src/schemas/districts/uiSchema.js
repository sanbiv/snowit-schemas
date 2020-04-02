import chunk from 'lodash/chunk';
import reduce from 'lodash/reduce';
import { PRODUCT_TYPE_ENUMS } from '../products/types';

export default {
  classNames: 'form-root',
  // "ui:order": ["district", "nation", "active", "pickup", "*"],
  'ui:field': 'layout',
  'ui:layout': [
    { district: { width: 5 }, name: { width: 6 }, permalink: { width: 5 } },
    { icon_on: { width: 10 }, nation: { width: 6 } },
    { purchasable: { width: 4 }, active: { width: 4 } },
    { popupAlert: { width: 16, doShow: ({ formData }) => formData.active } },
    { productTypes: { width: 16 } },
  ],
  popupAlert: {
    'ui:widget': 'textarea',
  },
  productTypes: {
    'ui:field': 'layout',
    'ui:layout': chunk(PRODUCT_TYPE_ENUMS, 3).map(row =>
      reduce(
        row,
        (cols, type) => {
          cols[type] = { width: 5 };
          return cols;
        },
        {}
      )
    ),
  },
};
