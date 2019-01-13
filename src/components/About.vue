<template>
<div id="about">
  <h1>What about us?</h1>
  <div class="about-content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
  data: function() {
    return {
      dinos: []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about h1 {
  margin-top: 20px;
  text-align: center;
}

.about-content {
  border-top: 2px dotted lightgrey;
  padding: 20px;
  margin: 20px auto;
  text-align: center;
}
</style>
