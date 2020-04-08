declare function _default({ slots, venues }: {
    slots: any;
    venues: any;
}): () => {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        productUID: {
            width: number;
            doDisable: () => boolean;
        };
        confirmed?: undefined;
        date?: undefined;
        quantity?: undefined;
        slotUID?: undefined;
        venueUID?: undefined;
        orderUID?: undefined;
        notes?: undefined;
    } | {
        confirmed: {
            width: number;
        };
        date: {
            width: number;
        };
        quantity: {
            width: number;
        };
        productUID?: undefined;
        slotUID?: undefined;
        venueUID?: undefined;
        orderUID?: undefined;
        notes?: undefined;
    } | {
        slotUID: {
            width: number;
            doShow: () => boolean;
        };
        venueUID: {
            width: number;
            doShow: () => boolean;
        };
        productUID?: undefined;
        confirmed?: undefined;
        date?: undefined;
        quantity?: undefined;
        orderUID?: undefined;
        notes?: undefined;
    } | {
        orderUID: {
            width: number;
            doDisable: ({ formData }: {
                formData: any;
            }) => boolean;
        };
        productUID?: undefined;
        confirmed?: undefined;
        date?: undefined;
        quantity?: undefined;
        slotUID?: undefined;
        venueUID?: undefined;
        notes?: undefined;
    } | {
        notes: {
            width: number;
        };
        productUID?: undefined;
        confirmed?: undefined;
        date?: undefined;
        quantity?: undefined;
        slotUID?: undefined;
        venueUID?: undefined;
        orderUID?: undefined;
    })[];
    productUID: {
        'ui:widget': string;
    };
    notes: {
        'ui:widget': string;
    };
};
export default _default;
