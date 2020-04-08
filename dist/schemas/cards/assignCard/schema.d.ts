export default schema;
declare const schema: {
    definitions: {
        status: {
            type: string;
            enum: string[];
            enumNames: string[];
        };
        user: {
            type: string;
            required: string[];
            properties: {
                name: {
                    type: string;
                    title: string;
                };
                surname: {
                    type: string;
                    title: string;
                };
                birthday: {
                    type: string;
                    title: string;
                    format: string;
                };
                city: {
                    type: string;
                    title: string;
                };
                fisi: {
                    type: string;
                    title: string;
                };
            };
        };
    };
    type: string;
    required: string[];
    properties: {
        user: {
            $ref: string;
            title: string;
        };
        status: {
            $ref: string;
            title: string;
            default: string;
        };
        userUID: {
            type: string;
            title: string;
        };
        name: {
            type: string;
            title: string;
        };
    };
};
