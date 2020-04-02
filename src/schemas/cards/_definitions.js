import { STATUS_NAMES, STATUSES } from './constants';

const status = {
  type: 'string',
  enum: STATUSES,
  enumNames: STATUS_NAMES,
};

const user = {
  type: 'object',
  required: ['name', 'birthday'],
  properties: {
    name: { type: 'string', title: 'Nome' },
    surname: { type: 'string', title: 'Cognome' },
    birthday: { type: 'string', title: 'Data di nascita', format: 'date' },
    city: { type: 'string', title: 'Città' },
    fisi: { type: 'string', title: 'FISI' },
  },
};

export { status, user };
