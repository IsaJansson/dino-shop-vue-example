<template>
  <div class="hello">
    <h1>dinos</h1>
    <div class="list-of-dinos" v-for="dino in dinos">
      <div class="item">
          <img v-bind:src="dino.imageUrl" />
            <span class="text-muted">{{dino.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dinos',
  data: function() {
    return {
        dinos: []
      }
  },
      mounted() {
            // go fetch the dinos
            fetch("http://localhost:3000/dinos")
              .then(response => response.json())
              .then((data) => {
                this.dinos = data;
              })
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
