<template>
  <div class='home'>
    这是主页
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
    name: 'home'{{#vuex}},
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
    }{{/vuex}}
  }
</script>

<style lang="scss">

</style>
