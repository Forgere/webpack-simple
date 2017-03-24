import Vue from 'vue'
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store/store.js'
{{/vuex}}
{{#lint}}/* eslint-disable no-new */{{/lint}}
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  template: '<App/>',
  components: { App }
})
