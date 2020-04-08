declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        type: {
            width: number;
        };
        durationHours: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
            help: string;
        };
        name?: undefined;
        districtUID?: undefined;
        categoryUID?: undefined;
    } | {
        name: {
            width: number;
        };
        type?: undefined;
        durationHours?: undefined;
        districtUID?: undefined;
        categoryUID?: undefined;
    } | {
        districtUID: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        type?: undefined;
        durationHours?: undefined;
        name?: undefined;
        categoryUID?: undefined;
    } | {
        categoryUID: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => any;
        };
        type?: undefined;
        durationHours?: undefined;
        name?: undefined;
        districtUID?: undefined;
    })[];
    categoryUID: {
        'ui:widget': string;
        'ui:placeholder': string;
    };
    districtUID: {
        'ui:widget': string;
        'ui:placeholder': string;
    };
};
export default _default;
