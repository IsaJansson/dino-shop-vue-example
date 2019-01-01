<template>
  <div id="app">
    <img class="site-logo" src="./assets/dino-logo1.svg">
    <div id="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
#main-content {
  margin: auto;
  width: 90%;
}
.site-logo {
  width: 100px;
}

</style>
