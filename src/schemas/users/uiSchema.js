import React from 'react';
// import _ from 'lodash';

import { Header } from 'semantic-ui-react';

export default (formData, { jsonSchema }) => {
  return {
    classNames: 'form-root',
    'ui:field': 'layout',
    'ui:layout': [
      {
        type: { width: 6, color: 'yellow' },
        partnerUID: {
          width: 5,
          doShow: ({ formData }) => {
            return formData.type === 'PARTNER';
          },
        },
        pickupDistrictUID: {
          width: 5,
          doShow: ({ formData }) => {
            return formData.type === 'PARTNER';
          },
        },
      },
      {
        sex: { width: 4 },
        name: { width: 6 },
        surname: { width: 6 },
      },
      {
        email: { width: 10 },
        facebook_id: { width: 6 },
      },
      {
        _: {
          render: props => (
            <Header size="small" icon="map" content="Indirizzo" />
          ),
        },
      },
      {
        city: { width: 10 },
        nation: { width: 6 },
      },
      {
        address: { width: 16 },
      },
      {
        _: {
          render: props => (
            <Header size="small" icon="settings" content="Opzioni" />
          ),
        },
      },
      {
        favouriteDisc: { width: 8 },
        discLevel: { width: 8 },
      },
      {
        _: {
          render: props => (
            <Header size="small" icon="eye" content="Consensi" />
          ),
        },
      },
      {
        privacyPolicy: { width: 5 },
        privacyPolicyDate: {
          width: 11,
          doShow: ({ formData }) => formData.privacyPolicy,
        },
      },
      {
        profilingPolicy: { width: 5 },
        profilingPolicyDate: {
          width: 11,
          doShow: ({ formData }) => formData.profilingPolicy,
        },
      },
      {
        communicationPolicy: { width: 5 },
        communicationPolicyDate: {
          width: 11,
          doShow: ({ formData }) => formData.communicationPolicy,
        },
      },
      {
        thirdPartiesCommunicationPolicy: { width: 5 },
        thirdPartiesCommunicationPolicyDate: {
          width: 11,
          doShow: ({ formData }) => formData.thirdPartiesCommunicationPolicy,
        },
      },
      {
        thirdPartiesPolicy: { width: 5 },
        thirdPartiesPolicyDate: {
          width: 11,
          doShow: ({ formData }) => formData.thirdPartiesPolicy,
        },
      },
      {
        _: {
          render: props => (
            <Header
              size="small"
              icon="mobile alternate"
              content="Opzioni app"
            />
          ),
        },
      },
      {
        consentiNotifiche: { width: 5 },
        consentiGPS: { width: 5 },
        haVistoTutorial: { width: 5 },
      },
      {
        popupCard: { width: 5 },
        profiloCompleto: { width: 5 },
        sullaNeve: { width: 5 },
      },
      {
        permissions: {
          width: 16,
          doShow: ({ formData }) => formData.type === 'PARTNER',
        },
      },
    ],
    partnerUID: {
      'ui:widget': 'partnerPicker',
    },
    pickupDistrictUID: {
      'ui:widget': 'districtPicker',
    },
    facebook_id: {
      'ui:help': 'Attenzione! Questa modifica può creare problemi',
    },
    email: {
      'ui:options': {
        inputProps: {
          action: { icon: 'cart' },
        },
      },
    },
  };
};
