"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ product }) => {
    const json = {
        classNames: 'form-root',
        'ui:field': 'layout',
        'ui:layout': [
            {
                upsells: { width: 16 },
            },
            {
                crossSells: {
                    width: 16,
                    productTypes: {
                        width: 16,
                    },
                },
                productTypes: {
                    'ui:description': 'Cross-selling: raccomando all’utente prodotti di certe categorie o singoli prodotti configurati nel pannello',
                },
            },
            {
                bondedProducts: { width: 16 },
            },
        ],
        upsells: {
            'ui:description': 'Up-selling: propongo all’utente stessa tipologia di prodotto, ma prezzo superiore',
            items: {
                'ui:widget': 'productPicker',
                'ui:placeholder': 'Seleziona prodotto',
                'ui:options': {
                    conditions: product ? [['type', '==', product.type]] : [],
                },
            },
        },
        bondedProducts: {
            'ui:description': 'Prodotti vincolati: propongo prodotto col vincolo al prodotto che ho nel carrello',
            items: {
                'ui:widget': 'productPicker',
                'ui:placeholder': 'Seleziona prodotto',
            },
        },
    };
    return json;
};
