export default schema;
declare function schema({ product }: {
    product: any;
}): {
    type: string;
    properties: {
        upsells: {
            type: string;
            items: {
                type: string;
            };
            title: string;
        };
        crossSells: {
            type: string;
            title: string;
            properties: {
                productTypes: {
                    title: string;
                    type: string;
                    items: {
                        type: string;
                        enum: string[];
                        enumNames: any[];
                    };
                };
            };
        };
        bondedProducts: {
            type: string;
            items: {
                type: string;
            };
            title: string;
        };
    };
};
