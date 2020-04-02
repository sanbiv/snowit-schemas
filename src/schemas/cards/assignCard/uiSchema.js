import { NOT_ASSIGNED } from '../constants';

export default {
  classNames: 'form-root',
  'ui:field': 'layout',
  'ui:layout': [
    { name: { width: 16 } },
    {
      status: { width: 6 },
      userUID: {
        width: 10,
        doShow: ({ formData }) =>
          formData.status && formData.status !== NOT_ASSIGNED,
      },
    },
    {
      user: {
        width: 16,
        doShow: ({ formData }) =>
          formData.status && formData.status !== NOT_ASSIGNED,
      },
    },
  ],
  userUID: {
    'ui:widget': 'userPicker',
    'ui:placeholder': 'Clicca e seleziona un utente dalla lista',
    'ui:options': {
      allowClear: true,
      closeOnChange: false,
    },
  },
  user: {
    'ui:field': 'layout',
    'ui:layout': [
      { name: { width: 8 }, surname: { width: 8 } },
      { birthday: { width: 6 }, city: { width: 10 } },
      { fisi: { width: 16 } },
    ],
  },
};
