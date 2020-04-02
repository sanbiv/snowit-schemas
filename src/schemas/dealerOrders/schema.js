// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: [],
  properties: {
    // status: {
    //   type: 'string',
    //   enum: ['delivered', 'rejected'],
    //   enumNames: ['Consegnato', 'Da consegnare'],
    //   default: 'pending',
    //   title: 'Stato della consegna',
    // },
    cash: {
      type: 'boolean',
      title: 'Consegna e gestione in cassa',
      default: false,
    },
    snowitcard: {
      type: 'string',
      title: 'Numero snowitcard',
    },
    orderItemUID: {
      type: 'string',
      title: 'Skipass a cui stai associando la card',
    },
    snowitcardUser: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'Nome',
        },
        surname: {
          type: 'string',
          title: 'Cognome',
        },
      },
    },
    dealerNotes: {
      type: 'string',
      title: 'Note sulla consegna',
    },
  },
};

export default schema;
