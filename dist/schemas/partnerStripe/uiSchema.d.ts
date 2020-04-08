declare var _default: {
    classNames: string;
    'ui:field': string;
    'ui:layout': ({
        email: {
            width: number;
        };
        legalEntity?: undefined;
        personalAddress?: undefined;
    } | {
        legalEntity: {
            width: number;
        };
        email?: undefined;
        personalAddress?: undefined;
    } | {
        personalAddress: {
            width: number;
        };
        email?: undefined;
        legalEntity?: undefined;
    })[];
    legalEntity: {
        'ui:field': string;
        'ui:layout': ({
            type: {
                width: number;
            };
            businessName: {
                width: number;
            };
            businessTaxId?: undefined;
            website?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            address?: undefined;
            dob?: undefined;
            additionalOwners?: undefined;
        } | {
            businessTaxId: {
                width: number;
            };
            website: {
                width: number;
            };
            type?: undefined;
            businessName?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            address?: undefined;
            dob?: undefined;
            additionalOwners?: undefined;
        } | {
            firstName: {
                width: number;
            };
            lastName: {
                width: number;
            };
            type?: undefined;
            businessName?: undefined;
            businessTaxId?: undefined;
            website?: undefined;
            address?: undefined;
            dob?: undefined;
            additionalOwners?: undefined;
        } | {
            address: {
                width: number;
            };
            type?: undefined;
            businessName?: undefined;
            businessTaxId?: undefined;
            website?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            dob?: undefined;
            additionalOwners?: undefined;
        } | {
            dob: {
                width: number;
            };
            type?: undefined;
            businessName?: undefined;
            businessTaxId?: undefined;
            website?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            address?: undefined;
            additionalOwners?: undefined;
        } | {
            additionalOwners: {
                width: number;
            };
            type?: undefined;
            businessName?: undefined;
            businessTaxId?: undefined;
            website?: undefined;
            firstName?: undefined;
            lastName?: undefined;
            address?: undefined;
            dob?: undefined;
        })[];
        dob: {
            'ui:field': string;
            'ui:layout': {
                day: {
                    width: number;
                };
                month: {
                    width: number;
                };
                year: {
                    width: number;
                };
            }[];
        };
        address: {
            'ui:field': string;
            'ui:layout': ({
                line1: {
                    width: number;
                };
                country?: undefined;
                city?: undefined;
                postalCode?: undefined;
            } | {
                country: {
                    width: number;
                };
                city: {
                    width: number;
                };
                postalCode: {
                    width: number;
                };
                line1?: undefined;
            })[];
        };
        additionalOwners: {
            items: {
                'ui:field': string;
                'ui:layout': ({
                    firstName: {
                        width: number;
                    };
                    lastName: {
                        width: number;
                    };
                    address?: undefined;
                    dob?: undefined;
                } | {
                    address: {
                        width: number;
                    };
                    firstName?: undefined;
                    lastName?: undefined;
                    dob?: undefined;
                } | {
                    dob: {
                        width: number;
                    };
                    firstName?: undefined;
                    lastName?: undefined;
                    address?: undefined;
                })[];
                dob: {
                    'ui:field': string;
                    'ui:layout': {
                        day: {
                            width: number;
                        };
                        month: {
                            width: number;
                        };
                        year: {
                            width: number;
                        };
                    }[];
                };
                address: {
                    'ui:field': string;
                    'ui:layout': ({
                        line1: {
                            width: number;
                        };
                        country?: undefined;
                        city?: undefined;
                        postalCode?: undefined;
                    } | {
                        country: {
                            width: number;
                        };
                        city: {
                            width: number;
                        };
                        postalCode: {
                            width: number;
                        };
                        line1?: undefined;
                    })[];
                };
            };
        };
    };
    personalAddress: {
        'ui:field': string;
        'ui:layout': ({
            line1: {
                width: number;
            };
            country?: undefined;
            city?: undefined;
            postalCode?: undefined;
        } | {
            country: {
                width: number;
            };
            city: {
                width: number;
            };
            postalCode: {
                width: number;
            };
            line1?: undefined;
        })[];
    };
};
export default _default;
