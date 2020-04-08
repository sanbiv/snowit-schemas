declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        priceRule: {
            width: number;
        };
        fixedPrice?: undefined;
        fixedPricePerDuration?: undefined;
        dynamicPrices?: undefined;
        _?: undefined;
        prices?: undefined;
    } | {
        fixedPrice: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        priceRule?: undefined;
        fixedPricePerDuration?: undefined;
        dynamicPrices?: undefined;
        _?: undefined;
        prices?: undefined;
    } | {
        fixedPricePerDuration: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        priceRule?: undefined;
        fixedPrice?: undefined;
        dynamicPrices?: undefined;
        _?: undefined;
        prices?: undefined;
    } | {
        dynamicPrices: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        priceRule?: undefined;
        fixedPrice?: undefined;
        fixedPricePerDuration?: undefined;
        _?: undefined;
        prices?: undefined;
    } | {
        _: {
            width: number;
            render: ({ formData }: {
                formData: any;
            }) => any;
        };
        priceRule?: undefined;
        fixedPrice?: undefined;
        fixedPricePerDuration?: undefined;
        dynamicPrices?: undefined;
        prices?: undefined;
    } | {
        prices: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        priceRule?: undefined;
        fixedPrice?: undefined;
        fixedPricePerDuration?: undefined;
        dynamicPrices?: undefined;
        _?: undefined;
    })[];
    prices: {
        'ui:options': {
            addable: boolean;
            sortable: boolean;
            removable: boolean;
            addLabel: string;
            removeConfirmLabel: string;
            canAddBatch: number[];
            emptyAllButton: boolean;
            beforeCreate: (newPriceData: any, index: any, props: any) => any;
        };
        items: {
            'ui:field': string;
            'ui:layout': {
                date: {
                    width: number;
                };
                price: {
                    width: number;
                };
                discount: {
                    width: number;
                };
                name: {
                    width: number;
                };
                externalPrice: {
                    width: number;
                };
            }[];
            'ui:options': {};
            price: {
                'ui:placeholder': string;
            };
            discount: {
                'ui:placeholder': string;
            };
        };
    };
    fixedPrice: {
        'ui:field': string;
        'ui:layout': {
            price: {
                width: number;
            };
            discount: {
                width: number;
            };
            externalPrice: {
                width: number;
            };
        }[];
    };
    fixedPricePerDuration: {
        'ui:field': string;
        'ui:layout': {
            price: {
                width: number;
            };
            duration: {
                width: number;
            };
            discount: {
                width: number;
            };
            externalPrice: {
                width: number;
            };
        }[];
    };
    dynamicPrices: {
        'ui:options': {
            emptyAllButton: boolean;
            addable: boolean;
            orderable: boolean;
            removable: boolean;
        };
        items: {
            'ui:field': string;
            'ui:layout': ({
                _: {
                    render: ({ formData }: {
                        formData: any;
                    }) => any;
                    width: number;
                };
                price?: undefined;
                discount?: undefined;
                externalPrice?: undefined;
                dynamicDiscounts?: undefined;
            } | {
                price: {
                    width: number;
                };
                discount: {
                    width: number;
                };
                externalPrice: {
                    width: number;
                };
                dynamicDiscounts: {
                    width: number;
                    doDisable: ({ formData }: {
                        formData: any;
                    }) => boolean;
                };
                _?: undefined;
            })[];
            dynamicDiscounts: {
                'ui:options': {
                    emptyAllButton: boolean;
                    addable: boolean;
                    orderable: boolean;
                    removable: boolean;
                };
                items: {
                    'ui:field': string;
                    'ui:layout': {
                        daysBefore: {
                            width: number;
                        };
                        discount: {
                            width: number;
                        };
                    }[];
                };
            };
        };
    };
};
export default _default;
