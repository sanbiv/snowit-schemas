# VERSIONE 0.0.2


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

  // Installazione tramite private register (vedi dettagli 'Associating a scope with a registry')
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


### CONFIGURAZIONI/COSTANTI
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
* Pubblicare la libreria sul registro privato: `yarn deploy`

# Link e maggiori informazioni

* https://bytesafe.dev/posts/using-bytesafe-the-basics/
* I dati di accesso su `snowit.bytesafe.dev` sono: username=`bytesafe` password=recuperala accedendo su https://snowit.bytesafe.dev/

# Associating a scope with a registry
Scopes can be associated with a separate registry. This allows you to seamlessly use a mix of packages from the primary npm registry and one or more private registries, such as npm Enterprise.

You can associate a scope with a registry at login, e.g.

`npm login --registry=https://snowit.bytesafe.dev/r/default --scope=@snowit`

Scopes have a many-to-one relationship with registries: one registry can host multiple scopes, but a scope only ever points to one registry.

You can also associate a scope with a registry using npm config:

`npm config set @snowit:registry https://snowit.bytesafe.dev/r/default`

Once a scope is associated with a registry, any npm install for a package with that scope will request packages from that registry instead. Any npm publish for a package name that contains the scope will be published to that registry instead.
