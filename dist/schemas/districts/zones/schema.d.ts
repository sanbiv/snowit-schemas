export default schema;
declare const schema: {
    type: string;
    required: string[];
    properties: {
        name: {
            type: string;
            title: string;
        };
        permalink: {
            type: string;
            title: string;
        };
        districtUID: {
            type: string;
            title: string;
            default: string;
        };
        active: {
            type: string;
            title: string;
            default: boolean;
        };
    };
};
