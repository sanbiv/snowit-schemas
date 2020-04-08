export default schema;
declare function schema(formData: any): {
    type: string;
    required: string[];
    properties: {
        title: {
            type: string;
            title: string;
            default: string;
        };
        category: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
        };
        description: {
            type: string;
            title: string;
            default: string;
        };
        type: {
            type: string;
            title: string;
            default: string;
            enum: string[];
            enumNames: string[];
        };
        image: {
            type: string;
            title: string;
        };
        link: {
            type: string;
            title: string;
            default: string;
        };
        target: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
        };
        position: {
            type: string;
            title: string;
            default: number;
        };
        price: {
            type: string;
            title: string;
            default: number;
        };
        partnerUID: {
            type: string;
            title: string;
        };
        tenant: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        active: {
            type: string;
            title: string;
            default: boolean;
        };
    };
};
