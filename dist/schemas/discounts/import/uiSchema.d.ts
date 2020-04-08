export default uiSchema;
declare function uiSchema({ formData: form }: {
    formData: any;
}): {
    classNames: string;
    discountCodes: {
        'ui:widget': string;
    };
    'ui:field': string;
    'ui:layout': ({
        discountCodes: {
            width: number;
        };
        quantity?: undefined;
        type?: undefined;
        _?: undefined;
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
        discountCodes?: undefined;
        _?: undefined;
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
        discountCodes?: undefined;
        quantity?: undefined;
        type?: undefined;
    })[];
};
