import {
  WIDGET_CATEGORIES_ENUMS,
  WIDGET_CATEGORIES_ENUM_NAMES,
} from './categories';
import { WIDGET_TENANTS_ENUMS, WIDGET_TENANTS_ENUM_NAMES } from './tenants';
import { WIDGET_TYPES_ENUMS, WIDGET_TYPES_ENUM_NAMES } from './types';

const schema = formData => {
  let required = ['title', 'category', 'description', 'link', 'price'];

  return {
    type: 'object',
    required,
    properties: {
      title: {
        type: 'string',
        title: 'Titolo',
        default: '',
      },
      category: {
        type: 'string',
        title: 'Categoria',
        enum: WIDGET_CATEGORIES_ENUMS,
        enumNames: WIDGET_CATEGORIES_ENUM_NAMES,
      },
      description: {
        type: 'string',
        title: 'Descrizione',
        default: '',
      },
      type: {
        type: 'string',
        title: 'Tipo',
        default: '',
        enum: WIDGET_TYPES_ENUMS,
        enumNames: WIDGET_TYPES_ENUM_NAMES,
      },
      image: {
        type: 'string',
        title: 'Immagine',
        // format: 'data-url',
      },
      link: {
        type: 'string',
        title: 'Link',
        default: '',
      },
      target: {
        type: 'string',
        title: 'Target',
        enum: ['', '_blank'],
        enumNames: ['None', '_blank'],
      },
      position: {
        type: 'number',
        title: 'Posizione',
        default: 0,
      },
      price: {
        type: 'number',
        title: 'Prezzo',
        default: 0,
      },
      partnerUID: {
        type: 'string',
        title: 'Partner',
      },
      tenant: {
        type: 'string',
        title: 'Tenant',
        enum: ['', ...WIDGET_TENANTS_ENUMS],
        enumNames: ['', ...WIDGET_TENANTS_ENUM_NAMES],
        default: '',
      },
      active: {
        type: 'boolean',
        title: 'Attivo?',
        default: true,
      },
    },
  };
};

export default schema;
