<template>
  <div id="app">
    <demo />
  </div>
</template>

<script>
// import Login from './views/login/login'
import Demo from './views/demo/demo'

export default {
  name: 'app',
  components: {
    // Login,
    Demo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
