export default schema;
import schema from "./schema";
import uiSchema from "./uiSchema";
export const optionSchema: {
    type: string;
    properties: {
        available: {
            type: string;
            title: string;
            default: boolean;
        };
        included: {
            type: string;
            title: string;
        };
        price: {
            type: string;
            title: string;
        };
        ignoreQuantity: {
            type: string;
            title: string;
        };
    };
};
export const optionUiSchema: {
    'ui:field': string;
    'ui:layout': {
        available: {
            width: number;
        };
        included: {
            width: number;
        };
        price: {
            width: number;
        };
        ignoreQuantity: {
            width: number;
        };
    }[];
};
export { schema, uiSchema };
