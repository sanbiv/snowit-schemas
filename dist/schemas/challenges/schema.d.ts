export default schema;
declare const schema: {
    definitions: {
        translations: {
            type: string;
            properties: {
                name: {
                    type: string;
                    title: string;
                };
                bonus: {
                    type: string;
                    items: {
                        title: string;
                        type: string;
                    };
                };
                bonusShortText: {
                    type: string;
                    title: string;
                };
                termsCond: {
                    type: string;
                    title: string;
                };
            };
        };
    };
    type: string;
    required: string[];
    properties: {
        name: {
            type: string;
            title: string;
            default: string;
        };
        description: {
            type: string;
            title: string;
            default: string;
        };
        allDistricts: {
            type: string;
            title: string;
        };
        districtUID: {
            type: string;
            title: string;
        };
        startDate: {
            type: string;
            title: string;
            format: string;
        };
        endDate: {
            type: string;
            title: string;
            format: string;
        };
        hour: {
            type: string;
            title: string;
            enum: number[];
            default: number;
        };
        order: {
            type: string;
            title: string;
            default: number;
        };
        challengeTypes: {
            type: string;
            title: string;
            properties: {
                calories: {
                    type: string;
                    title: string;
                    enum: string[];
                };
                distance: {
                    type: string;
                    title: string;
                    enum: string[];
                };
                velAvg: {
                    type: string;
                    title: string;
                    enum: string[];
                };
                altitude: {
                    type: string;
                    title: string;
                    enum: string[];
                };
                skitracks: {
                    type: string;
                    title: string;
                    enum: string[];
                };
                days: {
                    type: string;
                    title: string;
                    enum: string[];
                };
            };
            default: {};
        };
        disciplines: {
            type: string;
            title: string;
            properties: {
                ski: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                snowboard: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                bob: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                crossCountry: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                skiMountaineering: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                snowshoes: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                telemark: {
                    type: string;
                    default: boolean;
                    title: string;
                };
            };
            default: {};
        };
        images: {
            type: string;
            title: string;
            properties: {
                main: {
                    type: string;
                    title: string;
                };
                banner: {
                    type: string;
                    title: string;
                };
            };
        };
        termsCond: {
            type: string;
            title: string;
            default: string;
        };
        private: {
            type: string;
            title: string;
            default: boolean;
        };
        status: {
            type: string;
            title: string;
            default: string;
            enum: string[];
            enumNames: string[];
        };
        objectives: {
            type: string;
            title: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    type: {
                        type: string;
                        title: string;
                        enum: string[];
                        enumNames: _.Collection<string>;
                    };
                    treshold: {
                        type: string;
                        title: string;
                    };
                    description: {
                        type: string;
                        title: string;
                    };
                };
            };
        };
        translations: {
            type: string;
            title: string;
            properties: any;
        };
    };
};
import _ from "lodash";
