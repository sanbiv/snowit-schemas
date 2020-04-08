declare function _default({ product }: {
    product: any;
}): {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        upsells: {
            width: number;
        };
        crossSells?: undefined;
        productTypes?: undefined;
        bondedProducts?: undefined;
    } | {
        crossSells: {
            width: number;
            productTypes: {
                width: number;
            };
        };
        productTypes: {
            'ui:description': string;
        };
        upsells?: undefined;
        bondedProducts?: undefined;
    } | {
        bondedProducts: {
            width: number;
        };
        upsells?: undefined;
        crossSells?: undefined;
        productTypes?: undefined;
    })[];
    upsells: {
        'ui:description': string;
        items: {
            'ui:widget': string;
            'ui:placeholder': string;
            'ui:options': {
                conditions: any[][];
            };
        };
    };
    bondedProducts: {
        'ui:description': string;
        items: {
            'ui:widget': string;
            'ui:placeholder': string;
        };
    };
};
export default _default;
