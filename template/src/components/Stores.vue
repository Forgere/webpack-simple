<template>
  <div class="stores">
    <router-link to='/'>返回主页，查看鱼</router-link>
    <div>这是vuex示例</div>
    {{#vuex}}
    \{{count}}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    {{/vuex}}
  </div>
</template>

<script>
{{#vuex}}
import store from '../store/store.js'
{{/vuex}}
export default {
  name: 'store',
  {{#vuex}}
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  },{{/vuex}}
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
