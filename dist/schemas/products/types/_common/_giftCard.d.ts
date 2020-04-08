export function schema({ formData }: {
    formData: any;
}): {
    type: string;
    title: string;
    properties: {
        productTypes: {
            type: string;
            title: string;
            properties: {};
        };
    };
};
export function uiSchema({ formData }: {
    formData: any;
}): {
    'ui:field': string;
    'ui:layout': {
        productTypes: {
            width: number;
        };
    }[];
    productTypes: {
        'ui:field': string;
        'ui:layout': {}[];
    };
};
