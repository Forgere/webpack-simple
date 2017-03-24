<template>
  <div class="stores">
    <router-link to='/'>返回主页，查看鱼</router-link>
    <div>这是vuex示例</div>
    \{{count}}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
  </div>
</template>

<script>
import store from '../store/store.js'
export default {
  name: 'store',
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
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
