import {
  commonData,
  durationHours,
  availability,
  links,
} from '../_common/_definitions';
import { PRODUCT_TYPE_ENUMS, PRODUCT_TYPE_ENUM_NAMES } from '../';

// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = () => {
  //FIXME: find a better way to do so, if possible
  const productTypesEnums = PRODUCT_TYPE_ENUMS.filter(
    type => type !== 'insurance'
  );
  const productTypesEnumNames = PRODUCT_TYPE_ENUM_NAMES.filter(
    (_type, index) => index !== PRODUCT_TYPE_ENUMS.indexOf('insurance')
  );

  return {
    definitions: {
      availability,
      links,
      durationHours,
    },
    type: 'object',
    required: ['nameTranslations', 'type', 'partnerUID', 'districtUID'],
    properties: {
      type: {
        type: 'string',
        title: 'Tipo prodotto',
        default: 'insurance',
        enum: ['insurance'],
      },
      productType: {
        type: 'string',
        title: 'Assicurazione su',
        enum: productTypesEnums,
        enumNames: productTypesEnumNames,
      },
      default: {
        type: 'boolean',
        title: 'Assicurazione di default',
        default: false,
      },
      durationHours: {
        $ref: '#/definitions/durationHours',
        description:
          "Durata di validità dell'assicurazione (vale per tutti gli skipass di durata uguale o inferiore)",
      },
      ...commonData(),
      insuranceIncluded: {
        type: 'boolean',
        title: 'Assicurazione inclusa?',
        default: false,
      },
      bundle: {
        type: 'boolean',
        title: 'Vendita abbinata ad altri prodotti',
      },
      externalProductUID: {
        // colpa di MARCO! era per tutti externalUID!! cristo santo (DUPLICO)
        type: 'string',
        title: 'ID esterno (sistema del comprensorio)',
      },
    },
  };
};

export default schema;
