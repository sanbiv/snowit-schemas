declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        name: {
            width: number;
        };
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        description: {
            width: number;
        };
        name?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        allDistricts: {
            width: number;
        };
        districtUID: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        name?: undefined;
        description?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        status: {
            width: number;
        };
        private: {
            width: number;
        };
        order: {
            width: number;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        startDate: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        endDate: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        hour: {
            width: number;
            doShow: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        disciplines: {
            width: number;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        challengeTypes: {
            width: number;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        images: {
            width: number;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        objectives: {
            width: number;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        price?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        price: {
            width: number;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        translations?: undefined;
        _?: undefined;
    } | {
        translations: {
            width: number;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        _?: undefined;
    } | {
        _: {
            width: number;
            render: ({ formData }: {
                formData: any;
            }) => any;
        };
        name?: undefined;
        description?: undefined;
        allDistricts?: undefined;
        districtUID?: undefined;
        status?: undefined;
        private?: undefined;
        order?: undefined;
        startDate?: undefined;
        endDate?: undefined;
        hour?: undefined;
        disciplines?: undefined;
        challengeTypes?: undefined;
        images?: undefined;
        objectives?: undefined;
        price?: undefined;
        translations?: undefined;
    })[];
    description: {
        'ui:widget': string;
    };
    allDistricts: {
        'ui:description': string;
    };
    districtUID: {
        'ui:widget': string;
        'ui:placeholder': string;
    };
    disciplines: {
        'ui:field': string;
        'ui:layout': {
            ski: {
                width: number;
            };
            snowboard: {
                width: number;
            };
            bob: {
                width: number;
            };
            crossCountry: {
                width: number;
            };
            skiMountaineering: {
                width: number;
            };
            snowshoes: {
                width: number;
            };
            telemark: {
                width: number;
            };
        }[];
    };
    images: {
        'ui:field': string;
        'ui:layout': {
            main: {
                width: number;
            };
            banner: {
                width: number;
            };
        }[];
        main: {
            'ui:widget': string;
            'ui:options': {
                accept: string;
            };
        };
        banner: {
            'ui:widget': string;
            'ui:options': {
                accept: string;
            };
        };
    };
    challengeTypes: {
        'ui:field': string;
        title: string;
        'ui:layout': {
            calories: {
                width: number;
            };
            distance: {
                width: number;
            };
            velAvg: {
                width: number;
            };
            altitude: {
                width: number;
            };
            skitracks: {
                width: number;
            };
            days: {
                width: number;
            };
        }[];
    };
    translations: any;
    objectives: {
        'ui:options': {
            addLabel: string;
            removeConfirmLabel: string;
            emptyAllButton: boolean;
        };
        items: {
            'ui:field': string;
            'ui:layout': {
                type: {
                    width: number;
                };
                treshold: {
                    width: number;
                };
                description: {
                    width: number;
                };
            }[];
            'ui:options': {};
            description: {
                'ui:widget': string;
            };
        };
    };
};
export default _default;
