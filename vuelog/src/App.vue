<template>
  <Nav/>
  <router-view :Contents="Contents"></router-view>
</template>

<script>

import Nav from './components/Nav.vue'
import Contents from './assets/Contents'

export default {
  name: 'App',
  data() {
    return {
      Contents,
    }
  },
  components: {
    Nav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
