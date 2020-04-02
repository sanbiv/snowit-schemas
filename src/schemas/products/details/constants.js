const DETAILS_GALLERY_TYPES = {
  image: {
    label: 'Immagine',
  },
  youtube: {
    label: 'Youtube',
  },
};

const DETAILS_EXTRA_INFO_TYPES = {
  fullDescription: {
    label: 'Descrizione completa',
    type: 'text',
    html: true,
    i18n: true,
    required: false,
  },

  conditions: {
    label: 'Condizioni',
    type: 'text',
    html: true,
    i18n: true,
    required: false,
  },
};

export { DETAILS_GALLERY_TYPES, DETAILS_EXTRA_INFO_TYPES };
