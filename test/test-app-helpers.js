import Vue from 'vue'
import Vuex from 'vuex'
// import Router from 'vue-router';
// import { sync } from 'vuex-router-sync';

Vue.use(Vuex)
// Vue.use(Router);

// const renderer = require('vue-server-renderer').createRenderer();
// const cheerio = require('cheerio');

// export function generateDOM(template, data = {}) {
//   return new Promise((resolve) => {
//     const app = createApp(template, data);
//
//     renderer.renderToString(app, (error, html) => {
//       const dom = cheerio.load(html);
//       resolve(dom, app);
//     });
//   });
// }

// export function createApp(template, data = {}) {
//   // Create store and router instances, sync router with the store...
//   const store = createStore();
//   // const router = createRouter();
//   // sync(store, router);
//
//   // Create root Vue instance...
//   const app = new Vue({
//     template,
//     router,
//     store,
//     ...data,
//   });
//
//   return app;
// }

export function createStore() {
  return new Vuex.Store({
    modules: {},
  })
}
