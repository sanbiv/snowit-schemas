export default schema;
declare const schema: {
    type: string;
    required: string[];
    properties: {
        code: {
            type: string;
            title: string;
        };
        name: {
            type: string;
            title: string;
        };
        type: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string | undefined;
        };
        description: {
            type: string;
            title: string;
            default: string;
        };
        districtUID: {
            type: string;
            title: string;
            default: string;
        };
        categoryUID: {
            type: string;
            title: string;
            default: string;
        };
        durationHours: {
            type: string;
            title: string;
            enum: number[];
            enumNames: any[];
        };
        externalUID: {
            type: string;
            title: string;
        };
        partnerDelayedPayment: {
            type: string;
            title: string;
        };
        price: {
            type: string;
            title: string;
        };
        _productItems: {
            type: string;
            title: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    productUID: {
                        type: string;
                        title: string;
                    };
                };
            };
        };
    };
};
