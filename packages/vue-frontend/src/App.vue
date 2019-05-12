<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Courses shop</h1>
    <Catalogue/>
    <AdminPanel/>
  </div>
</template>

<script>
import Catalogue from './components/Catalogue.vue'
import AdminPanel from './components/AdminPanel.vue'

export default {
  name: 'app',
  components: {
    Catalogue,
    AdminPanel
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
  margin-top: 60px;
}
</style>
