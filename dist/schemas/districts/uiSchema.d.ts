declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        district: {
            width: number;
        };
        name: {
            width: number;
        };
        permalink: {
            width: number;
        };
        icon_on?: undefined;
        nation?: undefined;
        purchasable?: undefined;
        active?: undefined;
        popupAlert?: undefined;
        productTypes?: undefined;
    } | {
        icon_on: {
            width: number;
        };
        nation: {
            width: number;
        };
        district?: undefined;
        name?: undefined;
        permalink?: undefined;
        purchasable?: undefined;
        active?: undefined;
        popupAlert?: undefined;
        productTypes?: undefined;
    } | {
        purchasable: {
            width: number;
        };
        active: {
            width: number;
        };
        district?: undefined;
        name?: undefined;
        permalink?: undefined;
        icon_on?: undefined;
        nation?: undefined;
        popupAlert?: undefined;
        productTypes?: undefined;
    } | {
        popupAlert: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => any;
        };
        district?: undefined;
        name?: undefined;
        permalink?: undefined;
        icon_on?: undefined;
        nation?: undefined;
        purchasable?: undefined;
        active?: undefined;
        productTypes?: undefined;
    } | {
        productTypes: {
            width: number;
        };
        district?: undefined;
        name?: undefined;
        permalink?: undefined;
        icon_on?: undefined;
        nation?: undefined;
        purchasable?: undefined;
        active?: undefined;
        popupAlert?: undefined;
    })[];
    popupAlert: {
        'ui:widget': string;
    };
    productTypes: {
        'ui:field': string;
        'ui:layout': {}[];
    };
};
export default _default;
