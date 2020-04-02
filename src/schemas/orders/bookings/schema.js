import { translate } from '../../../../utils/i18n';
import first from 'lodash/first';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = ({ product, slots, venues } = {}) => () => {
  const { availability: { quantityPerVenue } = {} } = product;
  const required = ['date', 'productUID', 'quantity'];
  let properties = {
    date: {
      type: 'string',
      format: 'date',
      title: 'Data della prenotazione',
    },
    quantity: {
      type: 'number',
      title: 'Quantità prenotate',
      default: 1,
    },
    confirmed: {
      type: 'boolean',
      title: 'Confermata?',
      default: true,
    },
    orderUID: {
      type: 'string',
      title: 'Id ordine',
    },
    productUID: {
      type: 'string',
      title: 'Prodotto',
      default: product._id,
    },
    slotUID: {
      type: 'string',
      title: 'Slot',
      enum: slots && slots.map(slot => slot._id),
      enumNames: slots && slots.map(slot => translate(slot, 'name')),
      default: slots && slots.length === 1 ? first(slots)._id : undefined,
    },
    notes: {
      type: 'string',
      title: 'Note',
    },
  };

  if (slots && slots.length > 0) {
    required.push('slotUID');
  }
  if (quantityPerVenue && venues && venues.length > 0) {
    required.push('venueUID');
    properties = {
      ...properties,
      venueUID: {
        type: 'string',
        title: 'Sede',
        enum: venues && venues.map(venue => venue._id),
        enumNames: venues && venues.map(venue => translate(venue, 'name')),
        default: venues && venues.length === 1 ? first(venues)._id : undefined,
      },
    };
  }

  return {
    type: 'object',
    required,
    properties,
  };
};

export default schema;
