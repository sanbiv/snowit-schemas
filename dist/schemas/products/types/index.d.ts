export const DEFAULT_TYPE: "skipass";
export const PRODUCT_TYPES: {
    skipass: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    snowitcard: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    insurance: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    coupon: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    experience: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    rental: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    lesson: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    bundle: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    food: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    parking: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    'bundle:family-pack': {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    'rental:bike': {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
    hotel: {
        icon: {
            name: string;
            color: string;
        };
        text: string;
        value: string;
        key: string;
    };
};
export const PRODUCT_TYPE_ENUMS: string[];
export const PRODUCT_TYPE_ENUM_NAMES: any[];
export function getProductPriceRule(product: any): any;
export function getAttrPrices(productOrPriceRule: any): "fixedPrice" | "fixedPricePerDuration" | "dynamicPrices" | "prices";
