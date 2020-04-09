# VERSIONE 0.0.1


### Installazione
Il pacchetto può essere installato via git o registro privato su snowit.bytesafe.dev

```typescript 
  // package.json

  // Installazione tramite repo privata su bitbucket
  {
    "dependencies": {
      "@snowit/schemas": "git+ssh://git@bitbucket.org:snowitdev/schemas.git#{{VERSION}}"
    }
  }

  // Installazione tramite private register
  {
    "dependencies": {
      "@snowit/schemas": "{{VERSION}}"
    }
  }

  // Rimpiazzare {{VERSION}} con la versione desiderata
```
Per installare tramite il registro privato è necessario inserire il file .npmrc


per importare solo i dati necessari, invece di importare da `@snowit/schemas` è possibile indicare il percorso (vedi esempi)

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


### ALIASES

E' possibile utilizzare gli alias per poter richiamare i tipi e le configurazioni con una sintassi più pulita.
Esempio

```typescript
  import { ProductType } from '@types'
  import { PRODUCT_TYPES } from '@config'

  // Per rendere ciò possibile è necessario:

  // 1. impostare typescript compilerOptions.paths
  // tsconfig.json
  {
    "compilerOptions": {

      "paths": {
        "@types/*": "@snowit/schemas/dist/types/*",
        "@config/*": "@snowit/schemas/dist/constants/*",
      }
    }

  }

  // 2. E' necessario anche configurare gli alias con node-alias (installare pacchetto)
  // package.json
  {
    "_aliasModules": {
        "@types": "./node_modules/@snowit/schemas/dist/types",
        "@config": "./node_modules/@snowit/schemas/dist/constants",
    }
  }
```

# Sviluppo (regole per la pubblicazione)

* Per eseguire il commit lanciare il comando "yarn cm"
* Cambiare il numero di versione in package.json formato `1.0.1`
* Inserire il tag con numero versione, esempio: `git tag -a v1.0.1 -m 'Version 1.0.1'`
* Eseguire il push indicando --tags (`git push origin master --tags`) 

