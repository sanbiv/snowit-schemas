const schema = {
  type: 'object',
  required: ['discountCodes', 'quantity'],
  properties: {
    discountCodes: {
      type: 'string',
      title: 'Codici sconto',
      description:
        'Puoi inserire i codici sconto separati da spazio. Eventuali codici esistenti verranno ignorati. Non sono permessi codici contenenti . # $ [ o ]',
    },
    quantity: {
      type: 'number',
      title: 'Indica il numero di utilizzi di un codice',
      default: 1,
    },
    // setExplicitDates: {
    //   type: 'boolean',
    //   title: 'Imposta date specifiche',
    //   default: false,
    // },
    // validFrom: {
    //   type: 'string',
    //   title: 'Valido dal',
    //   format: 'date',
    // },
    // validUntil: {
    //   type: 'string',
    //   title: 'Valido fino al',
    //   format: 'date',
    // },
    // onlyDates: {
    //   type: 'array',
    //   title: 'Indica le date in cui rendere riscattabile lo sconto',
    //   items: {
    //     type: 'string',
    //     title: 'Data',
    //     format: 'date',
    //   },
    // },
    // excludedDates: {
    //   type: 'array',
    //   title: 'Date escluse (non è possibile riscattare lo sconto)',
    //   items: {
    //     type: 'string',
    //     title: 'Data',
    //     format: 'date',
    //   },
    // },
  },
};

export default schema;
