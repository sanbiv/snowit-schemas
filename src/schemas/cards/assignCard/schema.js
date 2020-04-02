// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
import { status, user } from '../_definitions';
import { NOT_ASSIGNED } from '../constants';

const schema = {
  definitions: {
    status,
    user,
  },
  type: 'object',
  required: ['name', 'user', 'userUID', 'status'],
  properties: {
    user: {
      $ref: '#/definitions/user',
      title: 'Utente (associazione)',
    },
    status: {
      $ref: '#/definitions/status',
      title: 'Stato',
      default: NOT_ASSIGNED,
    },
    userUID: {
      // non confondere questo con user!!!
      type: 'string',
      title: 'Login (utente autenticato)',
    },
    name: {
      type: 'string',
      title: 'Nome della card',
    },
  },
};

export default schema;
