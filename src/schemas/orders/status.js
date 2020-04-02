import _ from 'lodash';
const STATUSES = {
  pending: {
    text: 'In attesa',
    key: 'pending',
    value: 'pending',
    icon: { name: 'wait', color: 'orange' },
  },
  shipped: {
    text: 'Inviato',
    key: 'shipped',
    value: 'shipped',
    icon: { name: 'shipping', color: 'blue' },
  },
  canceled: {
    text: 'Annullato',
    key: 'canceled',
    value: 'canceled',
    icon: { name: 'ban', color: 'red' },
  },
  delivered: {
    text: 'Consegnato',
    key: 'delivered',
    value: 'delivered',
    icon: { name: 'user circle outline', color: 'green' },
  },
  cash: {
    text: 'Consegnato (gestione cassa offline)',
    key: 'cash',
    value: 'cash',
    icon: { name: 'user circle outline', color: 'green' },
  },
};

const STATUS_ENUM = _.keys(STATUSES);

const STATUS_ENUM_NAMES = _.map(STATUS_ENUM, status => STATUSES[status].text);

export { STATUSES, STATUS_ENUM, STATUS_ENUM_NAMES };

export default { STATUSES, STATUS_ENUM, STATUS_ENUM_NAMES };
