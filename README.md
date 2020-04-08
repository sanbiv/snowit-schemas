# VERSIONE 0.0.1


### Installazione
Aggiungere a package.json

```json 
  {
    "dependencies": {
      "@snowit/schemas": "git+ssh://git@bitbucket.org:snowitdev/schemas.git#latest"
    }
  }
```
per importare solo i dati necessari, invece di importare da `@snowit/schemas` è possibile indicare il percordo (vedi esempi)

### TYPES

E' possibile importare i tipi dal seguente percorso: `@snowit/schemas/dist/types`

Esempio di alcuni tipi più usati

``` typescript
  import { ProductType } from '@snowit/schemas/dist' // oppure dist/types - si trova dentro dist/types/products
```


### CONFIGURAZIONE
E' possibile importare i tipi dal seguente percorso: `@snowit/schemas/dist/constants`


Esempio di alcune configurazioni disponibili

``` typescript
  import { PRODUCT_TYPES } from '@snowit/schemas/dist' // oppure dist/constants - si trova dentro dist/constants/products
```

