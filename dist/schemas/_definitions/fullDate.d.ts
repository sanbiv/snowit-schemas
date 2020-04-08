declare var _default: {
    type: string;
    required: string[];
    properties: {
        date: {
            type: string;
            required: string[];
            properties: {
                year: {
                    type: string;
                    enum: number[];
                };
                month: {
                    type: string;
                    enum: number[];
                    enumNames: string[];
                };
                day: {
                    type: string;
                    enum: number[];
                };
            };
        };
        epoc: {
            type: string;
        };
        formatted: {
            type: string;
        };
    };
};
export default _default;
