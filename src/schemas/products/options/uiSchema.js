import { buildUiSchemaLayout } from '../../../../utils/i18n';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:displayLabel': false,
  'ui:layout': [
    {
      productType: { width: 8, doDisable: ({ formData }) => formData._id },
      addressRequired: { width: 8 },
    },
    {
      nameTranslations: { width: 16 },
    },
    {
      descriptionTranslations: { width: 16 },
    },
    {
      cover: { width: 16 },
    },
    {
      externalUID: { width: 16 },
    },
  ],
  ...buildUiSchemaLayout({
    name: { columns: 2 },
    description: { columns: 2, 'ui:widget': 'textarea' },
  }),
  cover: {
    'ui:widget': 'file',
  },
};
