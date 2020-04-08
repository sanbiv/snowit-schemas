export default uiSchema;
declare function uiSchema({ formData: form }: {
    formData: any;
}): {
    classNames: string;
    couponCodes: {
        'ui:widget': string;
    };
    'ui:field': string;
    'ui:layout': ({
        couponCodes: {
            width: number;
        };
        quantity?: undefined;
        type?: undefined;
        _?: undefined;
        name?: undefined;
        termsCond?: undefined;
        setExplicitDates?: undefined;
        onlyDates?: undefined;
        validFrom?: undefined;
        validUntil?: undefined;
        excludedDates?: undefined;
    } | {
        quantity: {
            width: number;
        };
        type: {
            width: number;
            doDisable: ({ formData: data }: {
                formData: any;
            }) => any;
        };
        couponCodes?: undefined;
        _?: undefined;
        name?: undefined;
        termsCond?: undefined;
        setExplicitDates?: undefined;
        onlyDates?: undefined;
        validFrom?: undefined;
        validUntil?: undefined;
        excludedDates?: undefined;
    } | {
        _: {
            width: number;
            render: ({ formData, ...props }: {
                [x: string]: any;
                formData: any;
            }) => any;
            verticalAlign: string;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        couponCodes?: undefined;
        quantity?: undefined;
        type?: undefined;
        name?: undefined;
        termsCond?: undefined;
        setExplicitDates?: undefined;
        onlyDates?: undefined;
        validFrom?: undefined;
        validUntil?: undefined;
        excludedDates?: undefined;
    } | {
        name: {
            width: number;
        };
        termsCond: {
            width: number;
        };
        couponCodes?: undefined;
        quantity?: undefined;
        type?: undefined;
        _?: undefined;
        setExplicitDates?: undefined;
        onlyDates?: undefined;
        validFrom?: undefined;
        validUntil?: undefined;
        excludedDates?: undefined;
    } | {
        setExplicitDates: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        couponCodes?: undefined;
        quantity?: undefined;
        type?: undefined;
        _?: undefined;
        name?: undefined;
        termsCond?: undefined;
        onlyDates?: undefined;
        validFrom?: undefined;
        validUntil?: undefined;
        excludedDates?: undefined;
    } | {
        onlyDates: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => any;
        };
        couponCodes?: undefined;
        quantity?: undefined;
        type?: undefined;
        _?: undefined;
        name?: undefined;
        termsCond?: undefined;
        setExplicitDates?: undefined;
        validFrom?: undefined;
        validUntil?: undefined;
        excludedDates?: undefined;
    } | {
        validFrom: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        validUntil: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        couponCodes?: undefined;
        quantity?: undefined;
        type?: undefined;
        _?: undefined;
        name?: undefined;
        termsCond?: undefined;
        setExplicitDates?: undefined;
        onlyDates?: undefined;
        excludedDates?: undefined;
    } | {
        excludedDates: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        couponCodes?: undefined;
        quantity?: undefined;
        type?: undefined;
        _?: undefined;
        name?: undefined;
        termsCond?: undefined;
        setExplicitDates?: undefined;
        onlyDates?: undefined;
        validFrom?: undefined;
        validUntil?: undefined;
    })[];
    onlyDates: {
        'ui:field': string;
        'ui:options': {
            numberOfMonths: number;
        };
    };
    excludedDates: {
        'ui:field': string;
        'ui:options': {
            numberOfMonths: number;
            negative: boolean;
        };
    };
};
