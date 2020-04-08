export default schema;
declare const schema: {
    type: string;
    required: never[];
    properties: {
        cash: {
            type: string;
            title: string;
            default: boolean;
        };
        snowitcard: {
            type: string;
            title: string;
        };
        orderItemUID: {
            type: string;
            title: string;
        };
        snowitcardUser: {
            type: string;
            properties: {
                name: {
                    type: string;
                    title: string;
                };
                surname: {
                    type: string;
                    title: string;
                };
            };
        };
        dealerNotes: {
            type: string;
            title: string;
        };
    };
};
