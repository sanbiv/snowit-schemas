import { buildUiSchemaLayout } from '../../../../utils/i18n';
import { VENUE_TYPE_ENUMS } from './types';
import reduce from 'lodash/reduce';
import chunk from 'lodash/chunk';

// import React from 'react'
// import { Header } from 'semantic-ui-react'

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
    {
      active: {
        width: 4,
      },
      partnerUID: {
        width: 6,
        doDisable: ({ formData }) => formData._id,
      },
      districtUID: {
        width: 6,
        doDisable: ({ formData }) => formData._id,
        // doDisable: ({ formData }) =>
        //   (formData.partner &&
        //     formData.partner.districtUID &&
        //     formData.partner.districtUID === 'all') ||
        //   (formData.partnerUID && !formData.districtUID)
        //     ? false
        //     : true,
      },
    },
    {
      types: { width: 16 },
    },
    {
      nameTranslations: { width: 16 },
    },
    {
      point: { width: 16 },
    },
  ],
  partnerUID: {
    'ui:widget': 'partnerPicker',
    'ui:placeholder': 'Seleziona partner',
  },
  districtUID: {
    'ui:widget': 'districtPicker',
    'ui:placeholder': 'Seleziona distretto',
  },
  point: {
    'ui:field': 'geoPoint',
  },
  ...buildUiSchemaLayout({
    name: { columns: 2 },
  }),
  types: {
    'ui:field': 'layout',
    'ui:layout': chunk(VENUE_TYPE_ENUMS, 3).map(row =>
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
