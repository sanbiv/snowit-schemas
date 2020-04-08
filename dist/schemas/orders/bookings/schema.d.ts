export default schema;
declare function schema({ product, slots, venues }?: {
    product: any;
    slots: any;
    venues: any;
}): () => {
    type: string;
    required: string[];
    properties: {
        date: {
            type: string;
            format: string;
            title: string;
        };
        quantity: {
            type: string;
            title: string;
            default: number;
        };
        confirmed: {
            type: string;
            title: string;
            default: boolean;
        };
        orderUID: {
            type: string;
            title: string;
        };
        productUID: {
            type: string;
            title: string;
            default: any;
        };
        slotUID: {
            type: string;
            title: string;
            enum: any;
            enumNames: any;
            default: any;
        };
        notes: {
            type: string;
            title: string;
        };
    };
};
