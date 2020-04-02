const schema = {
  type: 'object',
  properties: {
    priceCodes: {
      type: 'string',
      title:
        'Inserisci gli id dei prodotti sui quali vuoi copiare le impostazioni',
      description: 'Puoi inserire gli id separati da spazio. ',
    },
  },
};

export default schema;
