declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        name: {
            width: number;
        };
        status?: undefined;
        userUID?: undefined;
        user?: undefined;
    } | {
        status: {
            width: number;
        };
        userUID: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        name?: undefined;
        user?: undefined;
    } | {
        user: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        name?: undefined;
        status?: undefined;
        userUID?: undefined;
    })[];
    userUID: {
        'ui:widget': string;
        'ui:placeholder': string;
        'ui:options': {
            allowClear: boolean;
            closeOnChange: boolean;
        };
    };
    user: {
        'ui:field': string;
        'ui:layout': ({
            name: {
                width: number;
            };
            surname: {
                width: number;
            };
            birthday?: undefined;
            city?: undefined;
            fisi?: undefined;
        } | {
            birthday: {
                width: number;
            };
            city: {
                width: number;
            };
            name?: undefined;
            surname?: undefined;
            fisi?: undefined;
        } | {
            fisi: {
                width: number;
            };
            name?: undefined;
            surname?: undefined;
            birthday?: undefined;
            city?: undefined;
        })[];
    };
};
export default _default;
