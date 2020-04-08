export default schema;
export const priceRule: {
    type: string;
    title: string;
    enum: string[];
    enumNames: string[];
    default: string;
};
export const priceDuration: {
    type: string;
    title: string;
    enum: string[];
    enumNames: string[];
    default: string;
};
export const fixedPrice: {
    type: string;
    title: string;
    properties: {
        price: {
            type: string;
            title: string;
            minimum: number;
        };
        discount: {
            type: string;
            title: string;
        };
        externalPrice: {
            type: string;
            title: string;
            minimum: number;
        };
    };
};
export const pricePerDay: {
    type: string;
    properties: {
        name: {
            type: string;
            title: string;
        };
        price: {
            type: string;
            title: string;
            minimum: number;
        };
        discount: {
            type: string;
            title: string;
        };
        date: {
            type: string;
            title: string;
            format: string;
        };
        externalPrice: {
            type: string;
            title: string;
            minimum: number;
        };
    };
};
export const dynamicPrice: {
    type: string;
    properties: {
        price: {
            type: string;
            title: string;
            minimum: number;
        };
        seasonUID: {
            type: string;
            title: string;
        };
        discount: {
            type: string;
            title: string;
        };
        externalPrice: {
            type: string;
            title: string;
            minimum: number;
        };
        dynamicDiscounts: {
            type: string;
            title: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    daysBefore: {
                        type: string;
                        title: string;
                        minimum: number;
                    };
                    discount: {
                        type: string;
                        title: string;
                        minimum: number;
                        maximum: number;
                    };
                };
            };
        };
    };
};
declare const schema: {
    type: string;
    required: string[];
    properties: {
        priceRule: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        fixedPrice: {
            type: string;
            title: string;
            properties: {
                price: {
                    type: string;
                    title: string;
                    minimum: number;
                };
                discount: {
                    type: string;
                    title: string;
                };
                externalPrice: {
                    type: string;
                    title: string;
                    minimum: number;
                };
            };
        };
        fixedPricePerDuration: {
            properties: {
                duration: {
                    type: string;
                    title: string;
                    enum: string[];
                    enumNames: string[];
                    default: string;
                };
                price: {
                    type: string;
                    title: string;
                    minimum: number;
                };
                discount: {
                    type: string;
                    title: string;
                };
                externalPrice: {
                    type: string;
                    title: string;
                    minimum: number;
                };
            };
            type: string;
            title: string;
        };
        dynamicPrices: {
            type: string;
            title: string;
            items: {
                type: string;
                properties: {
                    price: {
                        type: string;
                        title: string;
                        minimum: number;
                    };
                    seasonUID: {
                        type: string;
                        title: string;
                    };
                    discount: {
                        type: string;
                        title: string;
                    };
                    externalPrice: {
                        type: string;
                        title: string;
                        minimum: number;
                    };
                    dynamicDiscounts: {
                        type: string;
                        title: string;
                        items: {
                            type: string;
                            required: string[];
                            properties: {
                                daysBefore: {
                                    type: string;
                                    title: string;
                                    minimum: number;
                                };
                                discount: {
                                    type: string;
                                    title: string;
                                    minimum: number;
                                    maximum: number;
                                };
                            };
                        };
                    };
                };
            };
        };
        prices: {
            type: string;
            title: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        title: string;
                    };
                    price: {
                        type: string;
                        title: string;
                        minimum: number;
                    };
                    discount: {
                        type: string;
                        title: string;
                    };
                    date: {
                        type: string;
                        title: string;
                        format: string;
                    };
                    externalPrice: {
                        type: string;
                        title: string;
                        minimum: number;
                    };
                };
            };
        };
    };
};
