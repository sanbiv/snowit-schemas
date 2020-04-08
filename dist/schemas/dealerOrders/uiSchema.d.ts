declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        cash: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        snowitcard?: undefined;
        _?: undefined;
        orderItemUID?: undefined;
        snowitcardUser?: undefined;
        dealerNotes?: undefined;
    } | {
        snowitcard: {
            width: number;
            doDisable: ({ formData }: {
                formData: any;
            }) => any;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        cash?: undefined;
        _?: undefined;
        orderItemUID?: undefined;
        snowitcardUser?: undefined;
        dealerNotes?: undefined;
    } | {
        _: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => any;
            render: () => any;
        };
        cash?: undefined;
        snowitcard?: undefined;
        orderItemUID?: undefined;
        snowitcardUser?: undefined;
        dealerNotes?: undefined;
    } | {
        orderItemUID: {
            width: number;
            doDisable: () => boolean;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        cash?: undefined;
        snowitcard?: undefined;
        _?: undefined;
        snowitcardUser?: undefined;
        dealerNotes?: undefined;
    } | {
        snowitcardUser: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        cash?: undefined;
        snowitcard?: undefined;
        _?: undefined;
        orderItemUID?: undefined;
        dealerNotes?: undefined;
    } | {
        dealerNotes: {
            width: number;
        };
        cash?: undefined;
        snowitcard?: undefined;
        _?: undefined;
        orderItemUID?: undefined;
        snowitcardUser?: undefined;
    })[];
    snowitcard: {
        'ui:options': {
            inputProps: {
                size: string;
            };
            minimum: number;
            maximum: number;
        };
        'ui:placeholder': string;
    };
    snowitcardUser: {
        'ui:field': string;
        'ui:layout': {
            name: {
                width: number;
                doDisable: ({ formData }: {
                    formData: any;
                }) => any;
            };
            surname: {
                width: number;
                doDisable: ({ formData }: {
                    formData: any;
                }) => any;
            };
        }[];
    };
    dealerNotes: {
        'ui:widget': string;
    };
};
export default _default;
