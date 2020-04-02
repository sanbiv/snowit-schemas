import _ from 'lodash';

const ROLES = {
  USER: {
    label: 'Utente',
    icon: 'users',
    color: 'grey',
  },
  ADMIN: {
    label: 'Amministratore',
    icon: 'key',
    color: 'red',
  },
  PARTNER: {
    label: 'Partner',
    icon: 'building',
    color: 'teal',
  },
};
const DEFAULT_ROLE = 'USER';
const ROLE_ENUMS = _.keys(ROLES);
const ROLE_ENUM_NAMES = _.map(ROLE_ENUMS, role => ROLES[role].label);

export { ROLES, ROLE_ENUMS, ROLE_ENUM_NAMES, DEFAULT_ROLE };

export default ROLES;
