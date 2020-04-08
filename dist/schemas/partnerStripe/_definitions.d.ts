export const country: {
    type: string;
    title: string;
    enum: string[];
    enumNames: string[];
    default: string;
};
export const address: {
    type: string;
    required: string[];
    properties: {
        city: {
            type: string;
            title: string;
        };
        country: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        line1: {
            type: string;
            title: string;
        };
        postalCode: {
            type: string;
            title: string;
        };
    };
};
export const dob: {
    type: string;
    required: string[];
    properties: {
        day: {
            type: string;
            enum: number[];
            title: string;
        };
        month: {
            type: string;
            enum: number[];
            enumNames: string[];
            title: string;
        };
        year: {
            type: string;
            enum: number[];
            title: string;
        };
    };
};
export const companyType: {
    type: string;
    enum: string[];
    enumNames: string[];
    default: string;
};
