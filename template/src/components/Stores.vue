<template>
  <div class="stores">
    <router-link to='/'>返回主页，查看鱼</router-link>
    <div>这是vuex示例</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'back',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
