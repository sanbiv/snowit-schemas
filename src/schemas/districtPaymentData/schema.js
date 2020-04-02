// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: ['iban', 'bankName', 'accountholder'],
  properties: {
    iban: {
      type: 'string',
      title: 'IBAN',
    },
    bankName: {
      type: 'string',
      title: 'Nome banca',
    },
    accountHolder: {
      type: 'string',
      title: 'Intestato a',
    },
  },
};

export default schema;
