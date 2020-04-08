export const DATE_FORMAT: "YYYY-MM-DD";
export function jsonSchema({ adminMode }?: {
    adminMode?: boolean | undefined;
}): {
    type: string;
    required: string[];
    properties: {
        fileType: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        partnerUID: {
            type: string;
            title: string;
            placeholder: string;
        };
        paid: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        createdAt: {
            type: string;
            title: string;
            format: string;
            default: string;
        };
        createdUntil: {
            type: string;
            title: string;
            format: string;
            default: string;
        };
        withInsurance: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        getItemsAsRows: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        limit: {
            type: string;
            title: string;
            descrioption: string;
            default: number;
        };
    };
};
export function uiSchema({ adminMode }?: {
    adminMode?: boolean | undefined;
}): {
    className: string;
    'ui:field': string;
    'ui:layout': ({
        fileType: {
            width: number;
        };
        getItemsAsRows: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        _?: undefined;
        createdAt?: undefined;
        createdUntil?: undefined;
        partnerUID?: undefined;
        withInsurance?: undefined;
        paid?: undefined;
        limit?: undefined;
    } | {
        _: {
            render: () => any;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        fileType?: undefined;
        getItemsAsRows?: undefined;
        createdAt?: undefined;
        createdUntil?: undefined;
        partnerUID?: undefined;
        withInsurance?: undefined;
        paid?: undefined;
        limit?: undefined;
    } | {
        createdAt: {
            width: number;
        };
        createdUntil: {
            width: number;
        };
        fileType?: undefined;
        getItemsAsRows?: undefined;
        _?: undefined;
        partnerUID?: undefined;
        withInsurance?: undefined;
        paid?: undefined;
        limit?: undefined;
    } | {
        partnerUID: {
            width: number;
            doShow: () => boolean;
        };
        fileType?: undefined;
        getItemsAsRows?: undefined;
        _?: undefined;
        createdAt?: undefined;
        createdUntil?: undefined;
        withInsurance?: undefined;
        paid?: undefined;
        limit?: undefined;
    } | {
        withInsurance: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        paid: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        fileType?: undefined;
        getItemsAsRows?: undefined;
        _?: undefined;
        createdAt?: undefined;
        createdUntil?: undefined;
        partnerUID?: undefined;
        limit?: undefined;
    } | {
        limit: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        fileType?: undefined;
        getItemsAsRows?: undefined;
        _?: undefined;
        createdAt?: undefined;
        createdUntil?: undefined;
        partnerUID?: undefined;
        withInsurance?: undefined;
        paid?: undefined;
    })[];
    partnerUID: {
        'ui:widget': string;
        'ui:options': {
            allowClear: boolean;
        };
    };
};
export function normalizeFormToParams({ adminMode, }?: {
    adminMode?: boolean | undefined;
}): (formData: any) => {
    partnerUID: any;
    paid: string | boolean;
    createdAt: string | null;
    createdUntil: string | null;
    getItemsAsRows: boolean;
    withInsurance: boolean | null;
    limit: any;
    fromDate?: undefined;
    toDate?: undefined;
    districtMode?: undefined;
} | {
    partnerUID: any;
    fromDate: string | null;
    toDate: string | null;
    paid?: undefined;
    createdAt?: undefined;
    createdUntil?: undefined;
    getItemsAsRows?: undefined;
    withInsurance?: undefined;
    limit?: undefined;
    districtMode?: undefined;
} | {
    districtMode: boolean;
    paid: string;
    createdAt: string | null;
    createdUntil: string | null;
    getItemsAsRows: boolean;
    limit: any;
    partnerUID?: undefined;
    withInsurance?: undefined;
    fromDate?: undefined;
    toDate?: undefined;
} | {
    fromDate: string | null;
    toDate: string | null;
    partnerUID?: undefined;
    paid?: undefined;
    createdAt?: undefined;
    createdUntil?: undefined;
    getItemsAsRows?: undefined;
    withInsurance?: undefined;
    limit?: undefined;
    districtMode?: undefined;
};
declare namespace _default {
    export { DATE_FORMAT };
    export { uiSchema };
    export { jsonSchema };
}
export default _default;
