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
  export default {
    name: 'home'{{#vuex}},
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }{{/vuex}}
  }
</script>

<style lang="scss">

</style>
