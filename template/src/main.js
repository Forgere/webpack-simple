import Vue from 'vue'
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import Vuex from 'vuex'
Vue.use(Vuex)
{{/vuex}}
{{#lint}}/* eslint-disable no-new */{{/lint}}
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  template: '<App/>',
  components: { App }
})
