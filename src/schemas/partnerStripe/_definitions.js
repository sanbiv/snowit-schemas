import moment from 'moment';
import _ from 'lodash';
import { COUNTRIES, DEFAULT_COUNTRY } from '../shared/countries';

const COUNTRY_KEYS = _.keys(COUNTRIES);
const COUNTRY_NAMES = _.values(COUNTRIES);

const year = new Date().getFullYear();

const country = {
  type: 'string',
  title: 'Nazione',
  enum: COUNTRY_KEYS,
  enumNames: COUNTRY_NAMES,
  default: DEFAULT_COUNTRY,
};

const address = {
  type: 'object',
  required: ['city', 'line1', 'postalCode'],
  properties: {
    city: { type: 'string', title: 'Città' },
    country,
    line1: { type: 'string', title: 'Indirizzo' },
    postalCode: { type: 'string', title: 'CAP' },
  },
};

const dob = {
  type: 'object',
  required: ['day', 'month', 'year'],
  properties: {
    day: {
      type: 'integer',
      enum: _.range(1, 32),
      title: 'Giorno',
    },
    month: {
      type: 'integer',
      enum: _.range(1, 13),
      enumNames: moment.months(),
      title: 'Mese',
    },
    year: {
      type: 'integer',
      enum: _.range(year - 120, year - 17),
      title: 'Anno',
    },
  },
};

const companyType = {
  type: 'string',
  enum: ['company', 'individual'],
  enumNames: ['Società/azienda', 'Individuale'],
  default: 'company',
};

export { country, address, dob, companyType };
