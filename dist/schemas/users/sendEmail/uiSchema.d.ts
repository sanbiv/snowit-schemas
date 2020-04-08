export default uiSchema;
declare function uiSchema({ formData }: {
    formData: any;
}): {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        type: {
            width: number;
        };
        subject?: undefined;
        message?: undefined;
    } | {
        subject: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        type?: undefined;
        message?: undefined;
    } | {
        message: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        type?: undefined;
        subject?: undefined;
    })[];
    message: {
        'ui:widget': string;
    };
};
