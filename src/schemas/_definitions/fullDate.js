import _ from 'lodash';
import moment from 'moment';

const year = new Date().getFullYear();

export default {
  type: 'object',
  required: ['date', 'epoc', 'formatted'],
  properties: {
    date: {
      type: 'object',
      required: ['year', 'month', 'day'],
      properties: {
        year: {
          type: 'integer',
          enum: _.range(year - 100, year + 10),
        },
        month: {
          type: 'integer',
          enum: _.range(1, 12),
          enumNames: moment.months(),
        },
        day: { type: 'integer', enum: _.range(1, 31) },
      },
    },
    epoc: { type: 'integer' },
    formatted: { type: 'string' },
  },
};
