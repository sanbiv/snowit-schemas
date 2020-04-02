import { DEFAULT_ROLE, ROLE_ENUMS, ROLE_ENUM_NAMES } from './roles';
import { LANGUAGES, DEFAULT_LANG } from '../../../utils/i18n';
import { DISCIPLINES, DISCIPLINE_LEVELS, POLICIES_OBJECT } from './options';
import keys from 'lodash/keys';
import values from 'lodash/values';
import reduce from 'lodash/reduce';

// {
//   "name": "Diego",
//   "surname": "Chessa",
//   "nation": "Italia",
//   "sex": "M",
//   "city": "Roma",
//   "email": "sergiochessa@libero.it",
//   "facebook_id": null, // Importante se si logga con facebook, altrimenti vuoto
//   "photoURL": "", // da mettere su storage: users/UID/pic.png e qui memorizzi il link
//   "type": "USER", // Sono tutti type USER quelli che scriviamo dall'app/sito
//   "createdAt": "2018-03-08T08:28:28.000Z",
//   "date_login": "2018-11-02T18:50:10.200Z", // ultimo login, settalo
//   "language" : "it", // prendilo dal telefono
//   "userUID": "0004UHxvOfM2qiHcrMyJo3QSYuQ2",

//   // consensi alla privacy, guarda il sito per allinearli
//   "communicationPolicy": 1541190614,
//   "privacyPolicy": true,
//   "profilingPolicy": false,
//   "thirdPartiesCommunicationPolicy": false,
//   "thirdPartiesPolicy": false,

//   // consensi specifici dell'app, appaiono subito dopo la registrazione
//   "consentiNotifiche" : 1,
//   "consentiGPS" : 0,

//   // Subito dopo la registrazione ci sono un paio di schermate che chiedono questo:
//   "discLevel" : "beginner", // livello disciplina, subito dopo la registrazione intermediate, advanced
//   "favouriteDisc" : "snowboard",// disciplina preferita, subito dopo la registrazione ["snowboard", "sci"]
//   // Poi parte un tutorial che puoi saltare
//   "haVistoTutorial" : 0, // flag per non far ricomparire il tutorial
//   // Ti chiede se vuoi aggiungere card
//   "popupCard" : 1, // flag per non far ricomparire il registra o acquista card
//   "profiloCompleto" : 0, // se ha completato anche la seconda schermata di info o meno, altrimenti la ripresenti al login, vedi screenshot
//   "sullaNeve" : 0 // non ricordo :)
// }
// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage
const schema = formData => {
  let required = ['name', 'surname', 'email', 'type'];
  if (formData.type === 'PARTNER') {
    required.push('partnerUID');
  }
  return {
    type: 'object',
    required,
    properties: {
      name: {
        type: 'string',
        title: 'Nome',
        default: '',
      },
      surname: {
        type: 'string',
        title: 'Cognome',
        default: '',
      },
      email: {
        type: 'string',
        title: 'Email',
        format: 'email',
      },
      type: {
        type: 'string',
        title: 'Ruolo utente',
        default: DEFAULT_ROLE,
        enum: ROLE_ENUMS,
        enumNames: ROLE_ENUM_NAMES,
      },
      photoURL: {
        type: 'string',
        title: 'Foto',
      },
      language: {
        type: 'string',
        title: 'Lingua',
        enum: keys(LANGUAGES),
        enumNames: values(LANGUAGES),
        default: DEFAULT_LANG,
      },
      // CONSENSI
      ...reduce(
        POLICIES_OBJECT,
        (memo, policeDesc, policy) => {
          return {
            ...memo,
            [`${policy}Policy`]: {
              type: 'boolean',
              title: policeDesc,
            },
            [`${policy}PolicyDate`]: {
              type: 'string',
              title: 'Data accettazione',
              format: 'date',
            },
          };
        },
        {}
      ),
      // Altre info/scelte
      discLevel: {
        // -1 se non selezionato
        type: 'string',
        title: 'Livello disciplina',
        enum: keys(DISCIPLINE_LEVELS),
        enumNames: values(DISCIPLINE_LEVELS),
      },
      favouriteDisc: {
        // -1 se non selezionato
        type: 'string',
        title: 'Disciplina preferita',
        enum: keys(DISCIPLINES),
        enumNames: values(DISCIPLINES),
      },
      // Le opzini di seguito sul database sono salvare come numero 0 - 1
      // Opzioni APP
      consentiNotifiche: {
        type: 'boolean',
        title: 'Consenti notifiche',
      },
      consentiGPS: {
        type: 'boolean',
        title: 'Consenti GPS',
      },
      // Altre opzioni APP
      haVistoTutorial: {
        type: 'boolean',
        title: 'Ha visto tutorial?',
        default: false,
      },
      popupCard: {
        type: 'boolean',
        title: 'Popup registra/acquista card',
        default: true,
      },
      profiloCompleto: {
        type: 'boolean',
        title: 'Profilo completo',
        default: false,
      },
      sullaNeve: {
        type: 'boolean',
        title: 'Sulla neve?',
        default: false,
      },
      // Usato per indicare il partner che gestisce (SOLO se type === 'PARTNER')
      partnerUID: {
        type: 'string',
        title: 'Partner',
        default: '',
      },
      pickupDistrictUID: {
        type: 'string',
        title: 'Distretto pickup',
        default: '',
      },
      facebook_id: {
        type: 'string',
        title: 'ID Facebook',
      },
      // Dati personali
      sex: {
        title: 'Sesso',
        type: 'string',
        enum: ['M', 'F'],
        enumNames: ['Maschio', 'Femmina'],
      },
      city: {
        type: 'string',
        title: 'Città',
      },
      address: {
        type: 'string',
        title: 'Indirizzo (altro)',
        default: '',
      },
      nation: {
        type: 'string',
        title: 'Paese',
        default: '',
      },
      permissions: {
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
      },
    },
  };
};

export default schema;
