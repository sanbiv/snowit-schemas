// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = {
  type: 'object',
  required: ['serialNumber', 'userUID', 'name'],
  properties: {
    name: {
      type: 'string',
      title: 'Nome',
    },
    phone: {
      type: 'string',
      title: 'Telefono',
    },
    email: {
      type: 'string',
      title: 'Email',
    },
    serialNumber: {
      type: 'string',
      title: 'Numero seriale',
    },
    axessUID: {
      type: 'string',
      title: 'ID Axess',
    },
    skidataUID: {
      type: 'string',
      title: 'ID Skidata',
    },
    user: {
      type: 'object',
      title: 'Utente',
      require: ['name', 'surname'],
      properties: {
        name: {
          type: 'string',
          title: 'Nome',
        },
        surname: {
          type: 'string',
          title: 'Cognome',
        },
        birthday: {
          type: 'string',
          title: 'Data di nascita',
          format: 'date',
        },
        city: {
          type: 'string',
          title: 'Città',
        },
        fisi: {
          type: 'string',
          title: 'FISI',
        },
        fisi_url: {
          type: 'string',
          title: 'Path immagine FISI',
        },
        photo_url: {
          type: 'string',
          title: 'Path foto',
        },
        front_url: {
          type: 'string',
          title: 'Path front',
        },
      },
    },
    userUID: {
      type: 'string',
      title: 'Login a cui è associata la card',
    },
  },
};

export default schema;
