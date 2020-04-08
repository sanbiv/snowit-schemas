declare function _default(): {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        title: {
            width: number;
        };
        type: {
            width: number;
        };
        tenant?: undefined;
        category?: undefined;
        description?: undefined;
        image?: undefined;
        link?: undefined;
        target?: undefined;
        price?: undefined;
        position?: undefined;
    } | {
        tenant: {
            width: number;
        };
        category: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        description?: undefined;
        image?: undefined;
        link?: undefined;
        target?: undefined;
        price?: undefined;
        position?: undefined;
    } | {
        description: {
            width: number;
        };
        image: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        tenant?: undefined;
        category?: undefined;
        link?: undefined;
        target?: undefined;
        price?: undefined;
        position?: undefined;
    } | {
        link: {
            width: number;
        };
        target: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        tenant?: undefined;
        category?: undefined;
        description?: undefined;
        image?: undefined;
        price?: undefined;
        position?: undefined;
    } | {
        price: {
            width: number;
        };
        position: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        tenant?: undefined;
        category?: undefined;
        description?: undefined;
        image?: undefined;
        link?: undefined;
        target?: undefined;
    })[];
    description: {
        'ui:widget': string;
    };
    price: {
        'ui:options': {
            inputProps: {
                icon: string;
                iconPosition: string;
            };
        };
    };
};
export default _default;
