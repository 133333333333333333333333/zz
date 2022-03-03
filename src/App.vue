<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  components: { Home },
name:'App'
}
</script>

<style>

</style>