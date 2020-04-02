const NOT_ASSIGNED = 'not-assigned';
const PENDING = 'pending';
const WARNING = 'warning';
const VALID = 'valid';
const REJECTED = 'rejected';
const ERROR = 'error';

const STATUSES = [NOT_ASSIGNED, PENDING, WARNING, VALID, REJECTED];
const STATUS_NAMES = [
  'Non assegnato',
  'In attesa',
  '[DA VALIDARE]',
  'Valido',
  'Rifiutato',
];
const DEFAULT_CARD_LENGTH = 8; // '00089562'
const DEFAULT_CARD_PADDING = '0';

export {
  NOT_ASSIGNED,
  PENDING,
  WARNING,
  VALID,
  REJECTED,
  ERROR,
  STATUSES,
  STATUS_NAMES,
  DEFAULT_CARD_LENGTH,
  DEFAULT_CARD_PADDING,
};
