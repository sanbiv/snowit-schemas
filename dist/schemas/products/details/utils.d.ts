export function buildDetailsSchema(): {
    type: string;
    title: string;
    required: never[];
    properties: {
        metatags: {
            title: string;
            type: string;
            properties: any;
        };
    };
};
