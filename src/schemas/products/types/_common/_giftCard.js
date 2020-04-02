import React from 'react';
import IconProductType from '../../../../../screens/Products/components/IconProductType';
import reduce from 'lodash/reduce';
import chunk from 'lodash/chunk';
import each from 'lodash/each';
// import includes from 'lodash/includes';
import filter from 'lodash/filter';
import { PRODUCT_TYPES, PRODUCT_TYPE_ENUMS } from '../index';
import { durationHours } from './_definitions';
// import { buildTranslatedSchemaAttributes } from '../../../../../utils/i18n';

const hasDuration = type => {
  if (type === 'snowitcard') return false;
  return true;
};
const schema = ({ formData }) => {
  const jsonSchema = {
    type: 'object',
    title: 'Regole e prodotti inclusi',
    properties: {
      productTypes: {
        type: 'object',
        title: 'Tipologia prodotti per cui è valido lo sconto',
        properties: reduce(
          PRODUCT_TYPES,
          (memo, productTypeDetails, productType) => {
            if (productType === 'coupon') return memo;
            const properties = memo;
            properties[productType] = {
              type: 'boolean',
              title: productTypeDetails.text,
              default: true,
            };
            return properties;
          },
          {}
        ),
      },
    },
  };

  const defaultProductDetailsSchema = ({ productType }) => {
    const schema = {
      type: 'object',
      properties: {
        quantity: {
          type: 'number',
          title: 'Quantità inclusa',
          default: 1,
        },
        allCategories: {
          type: 'boolean',
          title: 'Tutte le categorie',
          default: true,
        },
        categoryUIDS: {
          type: 'array',
          title: 'Categorie incluse',
          items: {
            title: `Categoria ${PRODUCT_TYPES[productType].text}`,
            type: 'string',
            // enum: [],
            // enumNames: [],
          },
          // uniqueItems: true,
        },
      },
    };
    if (hasDuration(productType)) {
      schema.properties = {
        ...schema.properties,
        durationHours: {
          ...durationHours,
          title: 'Durata massima',
        },
      };
    }
    return schema;
  };

  each(PRODUCT_TYPES, (productDetails, productType) => {
    if (productType === 'coupon') return;
    let productTypeSchema = {
      ...defaultProductDetailsSchema({ productType }),
    };
    jsonSchema.properties[productType] = productTypeSchema;
  });
  return jsonSchema;
};

const uiSchema = ({ formData }) => {
  const jsonUiSchema = {
    'ui:field': 'layout',
    'ui:layout': [
      {
        productTypes: { width: 16 },
      },
    ],
    productTypes: {
      'ui:field': 'layout',
      'ui:layout': chunk(
        filter(PRODUCT_TYPE_ENUMS, type => type !== 'coupon'),
        5
      ).map(row =>
        reduce(
          row,
          (cols, type) => {
            cols[type] = { width: 3 };
            return cols;
          },
          {}
        )
      ),
    },
  };

  each(PRODUCT_TYPES, (productDetails, productType) => {
    jsonUiSchema['ui:layout'].push({
      [productType]: {
        width: 16,
        doShow: ({ formData }) => formData.productTypes[productType],
      },
    });
    let taxonomyType = productType;
    if (productType === 'experience') {
      taxonomyType = 'experienceConcept';
    }
    jsonUiSchema[productType] = {
      'ui:field': 'layout',
      'ui:layoutOptions': {
        gridProps: {
          verticalAlign: 'middle',
          // celled: 'divided',
        },
      },
      'ui:layout': [
        {
          _: {
            width: 1,
            render: () => (
              <React.Fragment>
                <strong>{PRODUCT_TYPES[productType].text}</strong>
                <IconProductType type={productType} size="big" />
              </React.Fragment>
            ),
            textAlign: 'left',
          },
          quantity: { width: 2 },
          durationHours: {
            width: 3,
            doShow: () => hasDuration(productType),
          },
        },
        {
          _: {
            width: 1,
            render: () => null,
          },
          allCategories: { width: 3 },
          categoryUIDS: {
            width: 5,
            doShow: ({ formData: data }) => !data.allCategories,
          },
        },
      ],
      categoryUIDS: {
        items: {
          'ui:widget': 'categoryPicker',
          'ui:placeholder': 'Tutte le categorie',
          'ui:options': {
            allowClear: true,
            taxonomyType,
            // conditions: () => ({ taxonomyType }),
          },
        },
      },
    };
  });
  return jsonUiSchema;
};

export { schema, uiSchema };
