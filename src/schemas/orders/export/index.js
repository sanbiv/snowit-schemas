import moment from 'moment';
// import isUndefined from 'lodash/isUndefined';
import React from 'react';
import { Message } from 'semantic-ui-react';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const jsonSchema = ({ adminMode = false } = {}) => {
  const schema = {
    type: 'object',
    required: ['fileType'],
    properties: {
      fileType: {
        type: 'string',
        title: 'Tipo esportazione',
        enum: ['excel', 'csv'],
        enumNames: ['Excel (riepilogo oggetti venduti)', 'CSV (sommario)'],
        default: 'excel',
      },
      partnerUID: {
        // solo admin
        type: 'string',
        title: 'Filtra per partner',
        placeholder: 'Tutti',
      },
      paid: {
        // solo admin
        type: 'string',
        title: 'Pagati?',
        enum: ['all', 'yes', 'no'],
        enumNames: ['Tutti', 'Solo pagati', 'Solo NON pagati'],
        default: 'yes',
      },
      createdAt: {
        type: 'string',
        title: 'Ordini creati dal',
        format: 'date',
        default: moment()
          .startOf('month')
          .format(DATE_FORMAT),
      },
      createdUntil: {
        type: 'string',
        title: 'Ordini creati fino al',
        format: 'date',
        default: moment()
          .endOf('month')
          .format(DATE_FORMAT),
      },
      withInsurance: {
        // solo admin
        type: 'string',
        title: 'Con assicurazione?',
        enum: ['all', 'yes'],
        enumNames: ['Tutti', 'Solo con assicurazione'],
        default: 'all',
      },
      getItemsAsRows: {
        // solo csv
        type: 'string',
        title: 'Tipo CSV',
        enum: ['items_as_row', 'summary'],
        enumNames: [
          'Una riga per ogni prodotto in ordine',
          'Riepilogo ordini (senza prodotti)',
        ],
        default: 'items_as_row',
      },
      limit: {
        // solo csv
        type: 'number',
        title: 'Limite ordini da esportare',
        descrioption: '(0 o vuoto nessun limite)',
        default: 10000,
      },
    },
  };
  if (!adminMode) {
    delete schema.partnerUID;
    delete schema.paid;
    delete schema.withInsurance;
  }
  return schema;
};

export const uiSchema = ({ adminMode = false } = {}) => {
  const schema = {
    className: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
      {
        fileType: { width: 8 },
        getItemsAsRows: {
          width: 8,
          doShow: ({ formData }) => formData.fileType === 'csv',
        },
      },
      {
        _: {
          render: () => (
            <Message
              error
              header="Attenzione"
              icon="warning"
              content="Questa modalità potrebbe impiegare molto tempo e presentare dati non validi. Verrà rimossa in futuro"
            />
          ),
          doShow: ({ formData }) => formData.fileType === 'csv',
        },
      },
      {
        createdAt: { width: 8 },
        createdUntil: { width: 8 },
      },
      {
        partnerUID: { width: 16, doShow: () => adminMode },
      },
      {
        withInsurance: {
          width: 8,
          doShow: ({ formData }) => adminMode && formData.fileType === 'csv',
        },
        paid: {
          width: 8,
          doShow: ({ formData }) => adminMode && formData.fileType === 'csv',
        },
      },
      {
        limit: {
          width: 8,
          doShow: ({ formData }) => formData.fileType === 'csv',
        },
      },
    ],
    partnerUID: {
      'ui:widget': 'partnerPicker',
      // 'ui:label': false,
      'ui:options': {
        allowClear: true,
      },
    },
  };
  return schema;
};

export const normalizeFormToParams = ({
  adminMode = false,
} = {}) => formData => {
  const {
    fileType,
    createdAt,
    partnerUID,
    createdUntil,
    getItemsAsRows,
    withInsurance,
    paid,
    limit,
  } = formData;
  const startDate = createdAt ? moment(createdAt).format(DATE_FORMAT) : null;
  const endDate = createdAt ? moment(createdUntil).format(DATE_FORMAT) : null;
  if (adminMode) {
    if (fileType === 'csv') {
      return {
        partnerUID,
        paid: paid === 'all' ? 'all' : paid === 'yes',
        createdAt: startDate,
        createdUntil: endDate,
        getItemsAsRows: getItemsAsRows === 'items_as_row',
        withInsurance: withInsurance === 'yes' ? true : null,
        limit,
      };
    }
    return {
      partnerUID,
      fromDate: startDate,
      toDate: endDate,
    };
  }
  if (fileType === 'csv') {
    return {
      districtMode: true,
      paid: 'yes',
      createdAt: startDate,
      createdUntil: endDate,
      getItemsAsRows: getItemsAsRows === 'items_as_row',
      limit,
    };
  }
  return {
    fromDate: startDate,
    toDate: endDate,
  };
};

export default {
  DATE_FORMAT,
  uiSchema,
  jsonSchema,
};
