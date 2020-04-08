declare var _default: {
    coupon: {
        schema: ({ formData }: {
            formData: any;
        }) => {
            definitions: {
                productItems: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            productUID: {
                                type: string;
                                title: string;
                            };
                        };
                    };
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
                giftCardProductsRules: {
                    type: string;
                    title: string;
                    properties: {
                        productTypes: {
                            type: string;
                            title: string;
                            properties: {};
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: ({ formData }: {
            formData: any;
        }) => any;
    };
    experience: {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    insurance: {
        schema: () => {
            definitions: {
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    rental: {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    skipass: {
        schema: ({ formData }: {
            formData: any;
        }) => {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: ({ formData }: {
            formData: any;
        }) => any;
    };
    snowitcard: {
        schema: {
            definitions: {
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    bundle: {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    lesson: {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    food: {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    parking: {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    'bundle:family-pack': {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    'rental:bike': {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
    hotel: {
        schema: {
            definitions: {
                durationHours: {
                    type: string;
                    title: string;
                    enum: number[];
                    enumNames: any[];
                };
                availability: {
                    type: string;
                    title: string;
                    properties: {
                        daysAdvance: {
                            type: string;
                            title: string;
                            default: number;
                        };
                        quantity: {
                            type: string;
                            title: string;
                        };
                        quantityPerVenue: {
                            type: string;
                            title: string;
                        };
                        calendarEnabled: {
                            type: string;
                            title: string;
                        };
                        dateInterval: {
                            type: string;
                            title: string;
                            properties: {
                                from: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                                to: {
                                    type: string;
                                    title: string;
                                    format: string;
                                };
                            };
                        };
                        exceptDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        onlyDates: {
                            type: string;
                            title: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                links: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        required: string[];
                        properties: {
                            href: {
                                type: string;
                                title: string;
                            };
                            text: {
                                type: string;
                                title: string;
                            };
                            target: {
                                type: string;
                                enum: string[];
                                enumNames: string[];
                                default: string;
                            };
                        };
                    };
                };
            };
            type: string;
            required: string[];
            properties: any;
        };
        uiSchema: any;
    };
};
export default _default;
