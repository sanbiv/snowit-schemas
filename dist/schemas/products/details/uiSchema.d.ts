declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:displayLabel': boolean;
    'ui:layout': ({
        _activeSection: {
            width: number;
        };
        gallery?: undefined;
        details?: undefined;
    } | {
        gallery: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        _activeSection?: undefined;
        details?: undefined;
    } | {
        details: {
            width: number;
        };
        _activeSection?: undefined;
        gallery?: undefined;
    })[];
    _activeSection: {
        'ui:widget': string;
        'ui:options': {
            uncheckIcon: string;
            enumSettings: {
                details: {
                    icon: string;
                };
                gallery: {
                    icon: string;
                };
            };
        };
    };
    gallery: {
        'ui:options': {
            addLabel: string;
            orderable: boolean;
        };
        items: any;
    };
    details: {
        classNames: string;
        'ui:field': string;
        'ui:layout': ({
            fullDescription: {
                width: number;
            };
            conditions?: undefined;
            metatags?: undefined;
        } | {
            conditions: {
                width: number;
            };
            fullDescription?: undefined;
            metatags?: undefined;
        } | {
            metatags: {
                width: number;
            };
            fullDescription?: undefined;
            conditions?: undefined;
        })[];
        fullDescription: any;
        conditions: any;
        metatags: any;
    };
};
export default _default;
