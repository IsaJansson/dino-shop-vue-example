<template>
  <div id="list-of-dinos">
    <h1>dinos</h1>
    <div class="dino-wrapper" v-for="dino in dinos">
      <div class="image-wrapper">
        <img v-bind:src="dino.imageUrl" />
      </div>
          <br />
      <p>{{dino.name}}</p>
      <span class="text-muted">{{dino.price}}</span>
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
#list-of-dinos {
  display: flex;
  justify-content: space-around;
}

.dino-wrapper {
  margin-bottom: 20px;
  margin-top: 10px;
  width: 300px;
  height: 250px;
}

.dino-wrapper .image-wrapper img {
  width: 100%;
  max-height: 100%;
  margin: auto;
  vertical-align: middle;
}

.dino-wrapper .image-wrapper {
  align-items: baseline;
  height: 200px;
}

.text-muted {
  color: grey;
  font-size: 10pt;
}
</style>
