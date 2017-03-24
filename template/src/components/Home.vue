<template>
  <div class='home'>
    这是主页
    \{{count}}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
  </div>
</template>

<script>
  import store from '../store/store.js'
  export default {
    name: 'home',
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
    }
  }
</script>

<style lang="scss">

</style>
