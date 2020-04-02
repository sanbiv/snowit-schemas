import schema from './schema';
import uiSchema from './uiSchema';
const optionSchema = {
  type: 'object',
  properties: {
    available: {
      type: 'boolean',
      title: 'Disponibile',
      default: true,
    },
    included: {
      type: 'boolean',
      title: 'Incluso nel prezzo?',
    },
    price: {
      type: 'number',
      title: 'Prezzo opzione',
    },
    ignoreQuantity: {
      type: 'boolean',
      title: 'Il prezzo ignora la quantità',
    },
  },
};
const optionUiSchema = {
  'ui:field': 'layout',
  'ui:layout': [
    {
      available: { width: 3 },
      included: { width: 3 },
      price: { width: 6 },
      ignoreQuantity: { width: 4 },
    },
  ],
};

export { schema, uiSchema, optionSchema, optionUiSchema };
export default schema;
