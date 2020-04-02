import { buildUiSchemaLayout } from '../../../utils/i18n';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
    {
      districtUID: { width: 13 },
      priority: { width: 3 },
    },
    {
      startDate: { width: 8 },
      endDate: { width: 8 },
    },
    {
      nameTranslations: { width: 16 },
    },
    {
      onlyDates: {
        width: 16,
        doShow: ({ formData }) =>
          !formData.exceptDates || formData.exceptDates.length === 0,
      },
    },
    {
      exceptDates: {
        width: 16,
        doShow: ({ formData }) =>
          !formData.onlyDates || formData.onlyDates.length === 0,
      },
    },
  ],
  districtUID: {
    'ui:widget': 'districtPicker',
    'ui:options': {
      all: true,
    },
  },
  exceptDates: {
    'ui:field': 'inlineMultipleDatesPicker',
    'ui:options': {
      numberOfMonths: 6,
      negative: true,
    },
  },
  onlyDates: {
    'ui:field': 'inlineMultipleDatesPicker',
    'ui:options': {
      numberOfMonths: 6,
    },
  },
  // onlyDates: {
  //   'ui:options': {
  //     addLabel: 'Aggiungi data valida',
  //     emptyAllButton: true,
  //     beforeCreate: (newData, index, props) => {
  //       const { formData } = props;
  //       if (isArray(formData) && formData.length > 0) {
  //         const lastDate = last(formData);
  //         if (lastDate) {
  //           return moment(lastDate)
  //             .add(1, 'day')
  //             .format('YYYY-MM-DD');
  //         }
  //       }
  //       return moment().format('YYYY-MM-DD');
  //     },
  //   },
  // },
  // exceptDates: {
  //   'ui:options': {
  //     addLabel: 'Aggiungi data da escludere',
  //     emptyAllButton: true,
  //     beforeCreate: (newData, index, props) => {
  //       const { formData } = props;
  //       if (isArray(formData) && formData.length > 0) {
  //         const lastDate = last(formData);
  //         if (lastDate) {
  //           return moment(lastDate)
  //             .add(1, 'day')
  //             .format('YYYY-MM-DD');
  //         }
  //       }
  //       return moment().format('YYYY-MM-DD');
  //     },
  //   },
  // },
  ...buildUiSchemaLayout({
    name: { columns: 2 },
  }),
};
