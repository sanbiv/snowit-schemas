const translations = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Nome',
    },
    bonus: {
      type: 'array',
      items: {
        title: 'Bonus',
        type: 'string',
      },
    },
    bonusShortText: {
      type: 'string',
      title: 'Bonus (descrizione breve)',
    },
    termsCond: {
      type: 'string',
      title: 'Condizioni',
    },
  },
};

export { translations };
