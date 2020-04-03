import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import AppConfig from '../../dist/plugin'
import { createStore } from '../test-app-helpers'
import { createRouter } from './routers/simple-public-private'
import App from './pages/App.vue'

Vue.config.productionTip = false

// Create store and router instances, sync router with the store...
const store = createStore()
const router = createRouter()
sync(store, router)

// Bootstrap with app config...
Vue.use(AppConfig, {
  store,
  router,
  config: {
    name: 'Blue Dreamsicles',
    alias: 'blue-dreamsicles',
    version: 'phase 3',
    platform: 'The Universes of Rick',
  },
  settings: {
    enforceAuth: false,
  },
})

// Instantiate root Vue instance...
const app = new Vue({
  router,
  store,
  render: h => h(App),
})

// Mount to DOM...
app.$mount('#app')
