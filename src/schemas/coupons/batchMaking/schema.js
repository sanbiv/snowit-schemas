export default {
  type: 'object',
  required: ['quantity'],
  properties: {
    quantity: {
      type: 'number',
      title: 'Indica il numero di codici da creare',
      default: 100,
    },
    prefix: {
      type: 'string',
      title: 'Puoi inserire un prefisso (3 caratteri, solo lettere, maiuscolo)',
    },
  },
};
