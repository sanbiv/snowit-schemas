"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roles_1 = require("./roles");
const i18n_1 = require("../../../utils/i18n");
const options_1 = require("./options");
const keys_1 = __importDefault(require("lodash/keys"));
const values_1 = __importDefault(require("lodash/values"));
const reduce_1 = __importDefault(require("lodash/reduce"));
const schema = formData => {
    let required = ['name', 'surname', 'email', 'type'];
    if (formData.type === 'PARTNER') {
        required.push('partnerUID');
    }
    return {
        type: 'object',
        required,
        properties: Object.assign(Object.assign({ name: {
                type: 'string',
                title: 'Nome',
                default: '',
            }, surname: {
                type: 'string',
                title: 'Cognome',
                default: '',
            }, email: {
                type: 'string',
                title: 'Email',
                format: 'email',
            }, type: {
                type: 'string',
                title: 'Ruolo utente',
                default: roles_1.DEFAULT_ROLE,
                enum: roles_1.ROLE_ENUMS,
                enumNames: roles_1.ROLE_ENUM_NAMES,
            }, photoURL: {
                type: 'string',
                title: 'Foto',
            }, language: {
                type: 'string',
                title: 'Lingua',
                enum: keys_1.default(i18n_1.LANGUAGES),
                enumNames: values_1.default(i18n_1.LANGUAGES),
                default: i18n_1.DEFAULT_LANG,
            } }, reduce_1.default(options_1.POLICIES_OBJECT, (memo, policeDesc, policy) => {
            return Object.assign(Object.assign({}, memo), { [`${policy}Policy`]: {
                    type: 'boolean',
                    title: policeDesc,
                }, [`${policy}PolicyDate`]: {
                    type: 'string',
                    title: 'Data accettazione',
                    format: 'date',
                } });
        }, {})), { discLevel: {
                type: 'string',
                title: 'Livello disciplina',
                enum: keys_1.default(options_1.DISCIPLINE_LEVELS),
                enumNames: values_1.default(options_1.DISCIPLINE_LEVELS),
            }, favouriteDisc: {
                type: 'string',
                title: 'Disciplina preferita',
                enum: keys_1.default(options_1.DISCIPLINES),
                enumNames: values_1.default(options_1.DISCIPLINES),
            }, consentiNotifiche: {
                type: 'boolean',
                title: 'Consenti notifiche',
            }, consentiGPS: {
                type: 'boolean',
                title: 'Consenti GPS',
            }, haVistoTutorial: {
                type: 'boolean',
                title: 'Ha visto tutorial?',
                default: false,
            }, popupCard: {
                type: 'boolean',
                title: 'Popup registra/acquista card',
                default: true,
            }, profiloCompleto: {
                type: 'boolean',
                title: 'Profilo completo',
                default: false,
            }, sullaNeve: {
                type: 'boolean',
                title: 'Sulla neve?',
                default: false,
            }, partnerUID: {
                type: 'string',
                title: 'Partner',
                default: '',
            }, pickupDistrictUID: {
                type: 'string',
                title: 'Distretto pickup',
                default: '',
            }, facebook_id: {
                type: 'string',
                title: 'ID Facebook',
            }, sex: {
                title: 'Sesso',
                type: 'string',
                enum: ['M', 'F'],
                enumNames: ['Maschio', 'Femmina'],
            }, city: {
                type: 'string',
                title: 'Città',
            }, address: {
                type: 'string',
                title: 'Indirizzo (altro)',
                default: '',
            }, nation: {
                type: 'string',
                title: 'Paese',
                default: '',
            }, permissions: {
                type: 'object',
                title: 'Permessi',
                properties: {
                    isBasePartner: {
                        type: 'boolean',
                        title: 'Permessi base partner',
                        default: false,
                    },
                    canSeeUsers: {
                        type: 'boolean',
                        title: 'Può vedere gli utenti',
                        default: false,
                    },
                    canSeeCatalogue: {
                        type: 'boolean',
                        title: 'Può vedere il catalogo',
                        default: false,
                    },
                    canSeeFastSearch: {
                        type: 'boolean',
                        title: 'Può vedere la ricerca veloce',
                        default: false,
                    },
                    canSeeAccounting: {
                        type: 'boolean',
                        title: 'Può vedere la contabilità',
                        default: false,
                    },
                    canSeeOrders: {
                        type: 'boolean',
                        title: 'Può vedere gli ordini',
                        default: false,
                    },
                    canSeeSettings: {
                        type: 'boolean',
                        title: 'Può vedere le impostazioni',
                        default: false,
                    },
                    canSeeWidgets: {
                        type: 'boolean',
                        title: 'Può vedere i widget',
                        default: false,
                    },
                    canSeePickup: {
                        type: 'boolean',
                        title: 'Può vedere i pickup',
                        default: false,
                    },
                    canSeeExperience: {
                        type: 'boolean',
                        title: 'Può vedere le esperienze',
                        default: false,
                    },
                    canSeeSkipass: {
                        type: 'boolean',
                        title: 'Può vedere gli skipass',
                        default: false,
                    },
                    canSeeParkings: {
                        type: 'boolean',
                        title: 'Può vedere i parcheggi',
                        default: false,
                    },
                    canSeeEasyRent: {
                        type: 'boolean',
                        title: 'Può vedere EasyRent',
                        default: false,
                    },
                    canSeeRent: {
                        type: 'boolean',
                        title: 'Può vedere il noleggio',
                        default: false,
                    },
                    canSeeLesson: {
                        type: 'boolean',
                        title: 'Può vedere le lezioni',
                        default: false,
                    },
                    canSeeFood: {
                        type: 'boolean',
                        title: 'Può vedere il cibo',
                        default: false,
                    },
                },
            } }),
    };
};
exports.default = schema;
