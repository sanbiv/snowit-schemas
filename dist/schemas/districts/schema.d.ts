export default schema;
declare const schema: {
    type: string;
    required: string[];
    properties: {
        district: {
            type: string;
            title: string;
            description: string;
        };
        name: {
            type: string;
            title: string;
        };
        permalink: {
            type: string;
            title: string;
        };
        icon: {
            type: string;
            title: string;
        };
        nation: {
            type: string;
            title: string;
        };
        active: {
            type: string;
            title: string;
        };
        purchasable: {
            type: string;
            title: string;
        };
        popupAlert: {
            type: string;
            title: string;
        };
        bccOrderEmail: {
            type: string;
            title: string;
        };
        productTypes: {
            type: string;
            title: string;
            properties: {};
        };
    };
};
