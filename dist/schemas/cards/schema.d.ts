export default schema;
declare const schema: {
    type: string;
    required: string[];
    properties: {
        name: {
            type: string;
            title: string;
        };
        phone: {
            type: string;
            title: string;
        };
        email: {
            type: string;
            title: string;
        };
        serialNumber: {
            type: string;
            title: string;
        };
        axessUID: {
            type: string;
            title: string;
        };
        skidataUID: {
            type: string;
            title: string;
        };
        user: {
            type: string;
            title: string;
            require: string[];
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
                fisi_url: {
                    type: string;
                    title: string;
                };
                photo_url: {
                    type: string;
                    title: string;
                };
                front_url: {
                    type: string;
                    title: string;
                };
            };
        };
        userUID: {
            type: string;
            title: string;
        };
    };
};
