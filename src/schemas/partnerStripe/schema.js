import moment from 'moment';
import { address, country, dob, companyType } from './_definitions';
// Vedi https://github.com/mozilla-services/react-jsonschema-form#usage

const schema = {
  definitions: {
    address,
    country,
    dob,
    companyType,
  },
  type: 'object',
  required: [
    // 'name',
    'legalEntity',
  ],
  properties: {
    email: {
      type: 'string',
      title: 'Email contatto',
      format: 'email',
      description:
        'A questo indirizzo verranno inviate informazioni in merito ai pagamenti e alle transazioni.',
    },
    legalEntity: {
      type: 'object',
      required: [
        'businessName',
        'businessTaxId',
        'address',
        'dob',
        'firstName',
        'lastName',
      ],
      title: 'Dati fiscali',
      properties: {
        type: {
          $ref: '#/definitions/companyType',
          title: 'Tipo',
        },
        businessName: { type: 'string', title: 'Ragione sociale' },
        businessTaxId: { type: 'string', title: 'P.IVA/C.F.' },
        website: { type: 'string', title: 'Sito web' },
        address: {
          $ref: '#/definitions/address',
          title: 'Sede fiscale',
        },
        additionalOwners: {
          type: 'array',
          title: 'Soci/altri intestatari',
          items: {
            type: 'object',
            properties: {
              address: {
                $ref: '#/definitions/address',
                title: 'Sede fiscale',
              },
              dob: {
                $ref: '#/definitions/dob',
                title: 'Data di nascita',
              },
              firstName: { type: 'string', title: 'Nome' },
              lastName: { type: 'string', title: 'Cognome' },
            },
          },
        },
      },
    },

    personalAddress: {
      $ref: '#/definitions/address',
      title: 'Altro indirizzo',
    },

    tosAcceptance: {
      type: 'object',
      title: 'Accettazione dei termini di Stripe',
      properties: {
        accepted: { type: 'boolean', title: 'Accetto' },
        date: {
          type: 'string',
          title: 'Data',
          default: moment().format('YYYY-MM-DD'),
        },
      },
    },

    documents: {
      type: 'array',
      title: 'Documento di identità del rappresentante legale',
      description:
        "Carica una copia fronte/retro del documento di identità del rappresentante legale. I file devono essere in formato JPEG o PNG e di dimensioni inferiori a 5 MB. Non è possibile verificare i file PDF. I file devono essere a colori, ruotati nel verso dell'immagine corretto e tutte le informazioni che includono devono essere chiaramente leggibili.",
      items: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            // format: 'data-url',
            title: 'File',
          },
          name: {
            type: 'string',
            title: 'Nome/note',
          },
          group: {
            type: 'string',
            title: 'Tipo documento',
            enum: ['identity_card', 'proof_of_address', 'other'],
            enumNames: ['Documento identità', 'Prova di identità', 'Altro'],
            default: 'other',
          },
        },
        // format: "data-url",
      },
    },

    bankAccount: {
      title: 'Conto bancario',
      type: 'object',
      required: ['iban', 'bankName', 'accountHolder'],
      properties: {
        iban: {
          type: 'string',
          title: 'IBAN',
        },
        bankName: {
          type: 'string',
          title: 'Nome banca',
        },
        accountHolder: {
          type: 'string',
          title: 'Intestato a',
        },
      },
    },
  },
};

export default schema;
