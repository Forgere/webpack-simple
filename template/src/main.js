import Vue from 'vue'
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
})
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  template: '<App/>',
  components: { App }
})
