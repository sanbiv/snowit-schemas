import { buildUiSchemaLayout } from '../../../../utils/i18n';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:displayLabel': false,
  'ui:layout': [
    {
      nameTranslations: { width: 16 },
    },
    {
      descriptionTranslations: { width: 16 },
    },
    {
      externalUID: { width: 16 },
    },
  ],
  ...buildUiSchemaLayout({
    name: { columns: 2 },
    description: { columns: 2, 'ui:widget': 'textarea' },
  }),
};
