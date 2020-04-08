export default schema;
declare const schema: {
    type: string;
    required: string[];
    properties: {
        discountCodes: {
            type: string;
            title: string;
            description: string;
        };
        quantity: {
            type: string;
            title: string;
            default: number;
        };
    };
};
