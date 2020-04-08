export default schema;
declare const schema: {
    type: string;
    required: never[];
    properties: {
        _activeSection: {
            type: string;
            default: string;
            title: string;
            enum: string[];
            enumNames: string[];
        };
        gallery: {
            type: string;
            title: string;
            items: {
                type: string;
                required: string[];
                properties: any;
            };
        };
        details: {
            type: string;
            title: string;
            required: never[];
            properties: {
                metatags: {
                    title: string;
                    type: string;
                    properties: any;
                };
            };
        };
    };
};
