// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
import { EMAIL_TYPE_ENUMS, EMAIL_TYPE_ENUM_NAMES } from './constants';

const schema = ({ formData }) => {
  let required = ['type'];

  return {
    type: 'object',
    required,
    properties: {
      type: {
        type: 'string',
        title: 'Tipo',
        enum: EMAIL_TYPE_ENUMS,
        enumNames: EMAIL_TYPE_ENUM_NAMES,
      },
      subject: {
        type: 'string',
        title: 'Oggetto',
      },
      message: {
        type: 'string',
        title: 'Message',
      },
    },
  };
};
export default schema;
