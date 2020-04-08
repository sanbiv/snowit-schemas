export default schema;
declare const schema: {
    definitions: {
        address: {
            type: string;
            required: string[];
            properties: {
                city: {
                    type: string;
                    title: string;
                };
                country: {
                    type: string;
                    title: string;
                    enum: string[];
                    enumNames: string[];
                    default: string;
                };
                line1: {
                    type: string;
                    title: string;
                };
                postalCode: {
                    type: string;
                    title: string;
                };
            };
        };
        country: {
            type: string;
            title: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
        dob: {
            type: string;
            required: string[];
            properties: {
                day: {
                    type: string;
                    enum: number[];
                    title: string;
                };
                month: {
                    type: string;
                    enum: number[];
                    enumNames: string[];
                    title: string;
                };
                year: {
                    type: string;
                    enum: number[];
                    title: string;
                };
            };
        };
        companyType: {
            type: string;
            enum: string[];
            enumNames: string[];
            default: string;
        };
    };
    type: string;
    required: string[];
    properties: {
        email: {
            type: string;
            title: string;
            format: string;
            description: string;
        };
        legalEntity: {
            type: string;
            required: string[];
            title: string;
            properties: {
                type: {
                    $ref: string;
                    title: string;
                };
                businessName: {
                    type: string;
                    title: string;
                };
                businessTaxId: {
                    type: string;
                    title: string;
                };
                website: {
                    type: string;
                    title: string;
                };
                address: {
                    $ref: string;
                    title: string;
                };
                additionalOwners: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                        properties: {
                            address: {
                                $ref: string;
                                title: string;
                            };
                            dob: {
                                $ref: string;
                                title: string;
                            };
                            firstName: {
                                type: string;
                                title: string;
                            };
                            lastName: {
                                type: string;
                                title: string;
                            };
                        };
                    };
                };
            };
        };
        personalAddress: {
            $ref: string;
            title: string;
        };
        tosAcceptance: {
            type: string;
            title: string;
            properties: {
                accepted: {
                    type: string;
                    title: string;
                };
                date: {
                    type: string;
                    title: string;
                    default: string;
                };
            };
        };
        documents: {
            type: string;
            title: string;
            description: string;
            items: {
                type: string;
                properties: {
                    file: {
                        type: string;
                        title: string;
                    };
                    name: {
                        type: string;
                        title: string;
                    };
                    group: {
                        type: string;
                        title: string;
                        enum: string[];
                        enumNames: string[];
                        default: string;
                    };
                };
            };
        };
        bankAccount: {
            title: string;
            type: string;
            required: string[];
            properties: {
                iban: {
                    type: string;
                    title: string;
                };
                bankName: {
                    type: string;
                    title: string;
                };
                accountHolder: {
                    type: string;
                    title: string;
                };
            };
        };
    };
};
