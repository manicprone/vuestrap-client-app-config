# Vuestrap | Client App Config

Common foundation app UI, logic, and config setups for Vuestack client apps (Vue + Vue-Router + Vuex).

<br />

## Table of Contents

* [Introduction][section-introduction]
* [Prerequisites][section-prerequisites]
* [How to Use][section-how-to-use]
* [Namespace][section-namespace]
* [Options][section-options]
* [Models][section-models]
* [Store][section-store]
* [Router][section-router]
* [For Developers][section-for-developers]


## Introduction

### What is a Vuestrap?

A Vuestrap is a Vue plugin designed to bootstrap Vue apps with robust, fully-operational application layers.

The plugins strap themselves across the full horizontal stack of the Vue anatomy:
adding router logic, state management handling, application logic, data models, and components,
allowing you to rapidly compose powerful Vue application boilerplates.

### Client App Config

[TBC - More Details]


## Prerequisites

The *Client App Config* plugin requires:

* Vue2 ([github.com/vuejs/vue][link-vue-github])
* Vuex ([github.com/vuejs/vuex][link-vuex-github])


## How to Use

### Install

``` sh
$ yarn add vuestrap-client-app-config
```

### Bootstrap Your Vue App

``` javascript
import Vue from 'vue'
import store from './store' // your vuex store instance
import router from './router' // your vue-router instance
import AppConfig from 'vuestrap-client-app-config'

Vue.use(AppConfig, {
  store,
  router,
})
```

## Namespace

The default namespace for the Client App Config store API is: `app`.

However, you can set your preferred namespace when bootstrapping, using the `namespace` option.


## Options

The following options are available when bootstrapping the app.

| Name             | Required? | Description |
| ---------------- | --------- | ----------- |
| store            | Yes       | The Vuex instance. |
| router           | No        | The Vue-Router instance. |
| namespace        | No        | The namespace to use with the store API. By default, the namespace is `app`. |

[TBC]


## Models

| Model    | Description |
| -------- | ----------- |
| TBD      |  |

[TBC]


## Store

### Getters

| Getter | Returns | Description | Example |
| ------ | --------| ----------- | ------- |
| pluginName | String | The plugin name/identifier. This value cannot be changed. | `this.$store.getters['app/pluginName']` |
| name | String | The application display name. | `this.$store.getters['app/name']` |
| alias | String | The application alias. A programmable alias for third-party configurations. | `this.$store.getters['app/alias']` |
| version | String | The application version for in-app display. | `this.$store.getters['app/version']` |
| platform | String | The platform name (if applicable). | `this.$store.getters['app/platform']` |
| settings | String | Core application settings, that cannot be modified by the user. | `this.$store.getters['app/settings']` |

### Actions

All actions are Promises, but not all actions are asynchronous.

| Name        | Parameters | Returns   | Description | Example |
| ----------- | ---------- | --------- | ----------- | ------- |
| setName     | name       | (void)    | TBC | `this.$store.dispatch('app/setName')` |
| setAlias    | alias      | (void)    | TBC | `this.$store.dispatch('app/setAlias')` |
| setVersion  | version    | (void)    | TBC | `this.$store.dispatch('app/setVersion')` |
| setPlatform | platform   | (void)    | TBC | `this.$store.dispatch('app/setPlatform')` |
| setSettings | name       | (void)    | TBC | `this.$store.dispatch('app/setSettings')` |


## Router

[TBD]


## For Developers

### Dev Run

To provide a fully working Vue app environment to test and develop the plugin, a simple Vue application will build (the plugin & the app bundle) and serve when running:

``` sh
$ npm run dev
```

By default, the development app environment will hot-reload changes and will run on `localhost:3302`.

> You can change the configuration for the development environment via `test/simulator/config.js`.

### Dev Lint

The plugin uses [ESLint][link-eslint-site] for source code linting. The linting will run automatically on `git commit`.

``` sh
$ npm run lint
```


### Dev Test

The plugin uses [Mocha][link-mocha-site] for the testing framework,
and [Chai][link-chai-site] and [Chai-HTTP][link-chai-http-site] for its assertions.

``` sh
$ npm run test
```

### Dev Build

The plugin is automatically built on `npm publish`. But, you can manually build the plugin using:

``` sh
$ npm run build-plugin
```


[section-introduction]: #introduction
[section-prerequisites]: #prerequisites
[section-how-to-use]: #how-to-use
[section-namespace]: #namespace
[section-options]: #options
[section-models]: #models
[section-store]: #store
[section-router]: #router
[section-for-developers]: #for-developers

[link-vue-github]: https://github.com/vuejs/vue
[link-vuex-github]: https://github.com/vuejs/vuex
[link-vue-router-github]: https://github.com/vuejs/vue-router
[link-rollup-plugin-vue-github]: https://github.com/vuejs/rollup-plugin-vue
[link-vue-rollup-boilerplate-github]: https://github.com/dangvanthanh/vue-rollup-boilerplate

[link-eslint-site]: https://eslint.org
[link-mocha-site]: https://mochajs.org
[link-chai-site]: http://chaijs.com
[link-chai-http-site]: http://chaijs.com/plugins/chai-http
