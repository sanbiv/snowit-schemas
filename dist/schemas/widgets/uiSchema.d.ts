declare function _default(formData: any): {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        partnerUID: {
            width: number;
        };
        tenant: {
            width: number;
        };
    } | {
        title: {
            width: number;
        };
        type: {
            width: number;
        };
        category: {
            width: number;
        };
        description?: undefined;
        image?: undefined;
        link?: undefined;
        target?: undefined;
        price?: undefined;
        position?: undefined;
        active?: undefined;
    } | {
        description: {
            width: number;
        };
        image: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        category?: undefined;
        link?: undefined;
        target?: undefined;
        price?: undefined;
        position?: undefined;
        active?: undefined;
    } | {
        link: {
            width: number;
        };
        target: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        category?: undefined;
        description?: undefined;
        image?: undefined;
        price?: undefined;
        position?: undefined;
        active?: undefined;
    } | {
        price: {
            width: number;
        };
        position: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        category?: undefined;
        description?: undefined;
        image?: undefined;
        link?: undefined;
        target?: undefined;
        active?: undefined;
    } | {
        active: {
            width: number;
        };
        title?: undefined;
        type?: undefined;
        category?: undefined;
        description?: undefined;
        image?: undefined;
        link?: undefined;
        target?: undefined;
        price?: undefined;
        position?: undefined;
    })[];
    image: {
        'ui:widget': string;
        'ui:options': {
            accept: string;
        };
    };
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
    partnerUID: {
        'ui:widget': string;
        'ui:options': {
            allowClear: boolean;
        };
    };
};
export default _default;
