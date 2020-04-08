export default schema;
declare function schema(formData: any): {
    type: string;
    required: string[];
    properties: {
        discLevel: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
        };
        favouriteDisc: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
        };
        consentiNotifiche: {
            type: string;
            title: string;
        };
        consentiGPS: {
            type: string;
            title: string;
        };
        haVistoTutorial: {
            type: string;
            title: string;
            default: boolean;
        };
        popupCard: {
            type: string;
            title: string;
            default: boolean;
        };
        profiloCompleto: {
            type: string;
            title: string;
            default: boolean;
        };
        sullaNeve: {
            type: string;
            title: string;
            default: boolean;
        };
        partnerUID: {
            type: string;
            title: string;
            default: string;
        };
        pickupDistrictUID: {
            type: string;
            title: string;
            default: string;
        };
        facebook_id: {
            type: string;
            title: string;
        };
        sex: {
            title: string;
            type: string;
            enum: string[];
            enumNames: string[];
        };
        city: {
            type: string;
            title: string;
        };
        address: {
            type: string;
            title: string;
            default: string;
        };
        nation: {
            type: string;
            title: string;
            default: string;
        };
        permissions: {
            type: string;
            title: string;
            properties: {
                isBasePartner: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeUsers: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeCatalogue: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeFastSearch: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeAccounting: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeOrders: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeSettings: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeWidgets: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeePickup: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeExperience: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeSkipass: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeParkings: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeEasyRent: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeRent: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeLesson: {
                    type: string;
                    title: string;
                    default: boolean;
                };
                canSeeFood: {
                    type: string;
                    title: string;
                    default: boolean;
                };
            };
        };
        name: {
            type: string;
            title: string;
            default: string;
        };
        surname: {
            type: string;
            title: string;
            default: string;
        };
        email: {
            type: string;
            title: string;
            format: string;
        };
        type: {
            type: string;
            title: string;
            default: string;
            enum: string[];
            enumNames: any[];
        };
        photoURL: {
            type: string;
            title: string;
        };
        language: {
            type: string;
            title: string;
            enum: string[];
            enumNames: any[];
            default: any;
        };
    };
};
