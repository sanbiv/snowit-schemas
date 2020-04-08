export default schema;
declare const schema: {
    type: string;
    required: string[];
    properties: {
        couponCodes: {
            type: string;
            title: string;
            description: string;
        };
        quantity: {
            type: string;
            title: string;
            default: number;
        };
        type: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        setExplicitDates: {
            type: string;
            title: string;
            default: boolean;
        };
        validFrom: {
            type: string;
            title: string;
            format: string;
            default: string;
        };
        validUntil: {
            type: string;
            title: string;
            format: string;
            default: string;
        };
        onlyDates: {
            type: string;
            title: string;
            items: {
                type: string;
                title: string;
                format: string;
            };
        };
        excludedDates: {
            type: string;
            title: string;
            items: {
                type: string;
                title: string;
                format: string;
            };
        };
    };
};
