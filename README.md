# Vue3 Project Bootstrap SPA:

## Project setup

```
yarn
```

Compiles and hot-reloads for development

```
yarn serve
```

Note: Server settings defined in `vite.config.js`, by default runs on `http://127.0.0.1:5173/`

Compiles and minifies for production

```
yarn build
```

Compiles for development

```
yarn dev
```

Run your unit tests

```
yarn test:unit
```

Lints and fixes files

```
yarn check-all
yarn check-build
yarn tsc
yarn lint
yarn stylelint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project structure

```
- project root
    - src
        - assets // static resources
            - fonts
                - ui-icons // source folder for icons font used in UiIcon component
        - components
            - ui // base ui components
            - ComponentName // other custom components
        - store // pinia store modules
            - modules
        - style // general styles and variables
        - types // typescript types
        App.vue // main component
        main.ts // main entry point
    - typings // typescript custom declarations
```

## Development

### Run outside of kms

Compiles and hot-reloads for development

```
yarn serve
```

In this case you have to setup some environment variables to use kms api.
Copy and rename `.env.example` to `.env.local` and setup if needed.
See available links in router sources.

### Run inside kms

In this case app settings will be sent from kms.
See `src/services/config.ts` for more details.

build with watcher (but without HMR)

```
yarn dev
```

build for production

```
yarn build
```

### Tests

run unit tests

```
yarn test:unit
```

### Links

#### Essential

https://v3.vuejs.org/guide/

#### Store

https://pinia.esm.dev/introduction.html

#### Tests

https://vitest.dev/api/

https://next.vue-test-utils.vuejs.org/guide/

https://jestjs.io/docs/getting-started

#### Composition utils

https://vueuse.org/guide/

#### Components

https://valgeirb.github.io/vue3-popper/guide/getting-started.html

#### KMS Swagger

http://localhost/kms/lh/swagger-ui/index.html

#### Tools

https://icomoon.io/app/

https://app.zeplin.io/

### Legacy layout components

Main component LegacyLayoutApp is injected to layout
and can communicate with legacy code by sending and receiving events.

Children components are async.

sending message:

```
window.postMessage({
  type : 'kms:show.item.crete.dialog'
}, '*');
```

receiving message:

```
useMessageListener({
  'kms:show.item.crete.dialog': () => toggleDialog('ItemCreateDialog')
});
```

#### Local dev server

It can be opened in local dev server (yarn serve) by following url:

http://localhost:5173/resources/vue3-project-boostrap/
