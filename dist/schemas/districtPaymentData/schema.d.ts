export default schema;
declare const schema: {
    type: string;
    required: string[];
    properties: {
        iban: {
            type: string;
            title: string;
        };
        bankName: {
            type: string;
            title: string;
        };
        accountHolder: {
            type: string;
            title: string;
        };
    };
};
