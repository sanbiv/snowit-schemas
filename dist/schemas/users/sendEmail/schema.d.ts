export default schema;
declare function schema({ formData }: {
    formData: any;
}): {
    type: string;
    required: string[];
    properties: {
        type: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
        };
        subject: {
            type: string;
            title: string;
        };
        message: {
            type: string;
            title: string;
        };
    };
};
