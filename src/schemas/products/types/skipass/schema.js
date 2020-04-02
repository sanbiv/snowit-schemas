import {
  commonData,
  durationHours,
  availability,
  links,
} from '../_common/_definitions';

import { BARCODE_TYPES, BARCODE_TYPE_NAMES } from '../../constants';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = ({ formData }) => {
  const schema = {
    definitions: {
      durationHours,
      availability,
      links,
    },
    type: 'object',
    required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
    properties: {
      type: {
        type: 'string',
        title: 'Tipo prodotto',
        default: 'skipass',
        enum: ['skipass'],
      },
      ...commonData(),
      barcode: {
        type: 'string',
        title: 'Codice a barre',
        enum: BARCODE_TYPES,
        enumNames: BARCODE_TYPE_NAMES,
        default: '-',
      },
      onlyPickup: {
        type: 'boolean',
        title: 'Solo Pickup',
        default: false,
      },
      insuranceIncluded: {
        type: 'boolean',
        title: 'Assicurazione inclusa?',
        default: false,
      },
      categoryUID: {
        type: 'string',
        title: 'Categoria',
        default: '',
      },
      subCategoryUID: {
        type: 'string',
        title: 'Sottocategoria',
      },
      durationHours: {
        $ref: '#/definitions/durationHours',
      },
      externalUID: {
        type: 'string',
        title: 'ID esterno (sistema del comprensorio)',
      },
      partnerDelayedPayment: {
        type: 'boolean',
        title: 'Pagamento al comprensorio in seconda instanza',
      },
      bundle: {
        type: 'boolean',
        title: 'Vendita abbinata ad altri prodotti',
      },
      options: {
        type: 'object',
        title: 'Seleziona le opzioni disponibili per questo prodotto',
        properties: {},
      },
      insuranceUIDS: {
        title: 'Assicurazioni',
        type: 'array',
        items: {
          type: 'string',
          title: 'Seleziona assicurazione',
        },
      },
    },
  };

  if (formData.providerName) {
    schema.required.push('externalUID');
  }

  return schema;
};

export default schema;
