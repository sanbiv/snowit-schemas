export default schema;
declare const schema: {
    type: string;
    properties: any;
    required: string[];
    dependencies: {
        type: {
            oneOf: ({
                properties: {
                    type: {
                        enum: string[];
                    };
                };
                required?: undefined;
            } | {
                properties: {
                    type: {
                        enum: string[];
                    };
                };
                required: string[];
            })[];
        };
    };
};
