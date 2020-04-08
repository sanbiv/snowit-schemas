export const status: {
    type: string;
    enum: string[];
    enumNames: string[];
};
export const user: {
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
