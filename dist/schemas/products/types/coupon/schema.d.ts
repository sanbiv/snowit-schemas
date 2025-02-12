export default schema;
declare function schema({ formData }: {
    formData: any;
}): {
    definitions: {
        productItems: {
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
        availability: {
            type: string;
            title: string;
            properties: {
                daysAdvance: {
                    type: string;
                    title: string;
                    default: number;
                };
                quantity: {
                    type: string;
                    title: string;
                };
                quantityPerVenue: {
                    type: string;
                    title: string;
                };
                calendarEnabled: {
                    type: string;
                    title: string;
                };
                dateInterval: {
                    type: string;
                    title: string;
                    properties: {
                        from: {
                            type: string;
                            title: string;
                            format: string;
                        };
                        to: {
                            type: string;
                            title: string;
                            format: string;
                        };
                    };
                };
                exceptDates: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        format: string;
                    };
                };
                onlyDates: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
        links: {
            type: string;
            title: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    href: {
                        type: string;
                        title: string;
                    };
                    text: {
                        type: string;
                        title: string;
                    };
                    target: {
                        type: string;
                        enum: string[];
                        enumNames: string[];
                        default: string;
                    };
                };
            };
        };
        giftCardProductsRules: {
            type: string;
            title: string;
            properties: {
                productTypes: {
                    type: string;
                    title: string;
                    properties: {};
                };
            };
        };
    };
    type: string;
    required: string[];
    properties: any;
};
