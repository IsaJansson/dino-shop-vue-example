<template>
<div id="dino-details" class="container">
  <div class="row">
    <div class="col-12 simple-paging">
      <div class="float-left paging-element" v-on:click="goToPrevious">
        <font-awesome-icon icon="chevron-left" class="fa-1x" /> Previous dino</div>
      <div class="float-right paging-element" v-on:click="goToNext">Next dino
        <font-awesome-icon icon="chevron-right" class="fa-1x" />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4">
      <div class="image-wrapper">
        <img v-bind:src="dino.imageUrl" />
      </div>
    </div>
    <div class="col-sm-6 dino-info">
      <h2>{{dino.name}} <span class="pronunciation text-muted">({{dino.pronunciation}})</span></h2>
      <ul class="specs-list">
        <li>
          <span class="label">General info</span><br /> <span v-html="dino.info"></span>
        </li>
        <li>
          <span class="label">Meaning of name</span><br /> {{dino.meaningOfName}}
        </li>
        <li>
          <span class="label">Diet</span><br /> {{dino.diet}}
        </li>
        <li>
          <span class="label">Period</span><br /> {{dino.period}}
        </li>
        <li>
          <span class="label">Length</span><br /> {{dino.length}}
        </li>
      </ul>
    </div>
    <div class="col-sm-2">
      <div class="price-wrapper">
        &euro;{{dino.price}}
      </div>
      <div id="btnAddToCart" class="btn btn-primary float-right"  v-b-tooltip.hover.bottom title="Sadly not implemented yet">
        Add to cart
        <font-awesome-icon icon="cart-plus" class="btn-icon-right" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DinoDetails',
  props: [
    'id',
  ],
  data: function() {
    return {
      dino: {},
      passedID: this.id,
      nextDinoID: 0,
      previousDinoID: 0,
    }
  },
  methods: {
    goToNext: function() {
      this.$router.push({
        name: 'DinoDetails',
        params: {
          id: this.nextDinoID
        }
      });
    },
    goToPrevious: function() {
      this.$router.push({
        name: 'DinoDetails',
        params: {
          id: this.previousDinoID
        }
      });
    },
    loadData: function() {
      // go fetch the dino with the given id
      fetch("http://localhost:3000/dinos/" + this.id)
        .then(response => response.json())
        .then((data) => {
          this.dino = data;

          // very hard coded
          this.nextDinoID = this.passedID;
          if (this.nextDinoID < 18) {
            this.nextDinoID++
          } else {
            this.nextDinoID = 1;
          }
          this.previousDinoID = this.passedID;
          if (this.previousDinoID > 1) {
            this.previousDinoID--
          } else {
            this.previousDinoID = 18;
          }
        })
    }
  },
  watch: {
    id: function(newId) { // watch it
      this.passedID = newId;
    },
    '$route': 'loadData'
  },
  mounted() {
    this.loadData();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#dino-details {
    font-size: 11pt;

    .pronunciation {
        vertical-align: middle;
    }
    .dino-info {
        padding-right: 80px;
    }

    .price-wrapper {
        text-align: right;
        margin: 10px 0;
        font-size: 15pt;
        font-weight: bold;
        color: #006060;
    }

    .btn-icon-right {
        margin-left: 10px;
    }

    .simple-paging {
        margin-bottom: 10px;

        .paging-element {
            color: grey;

            &:hover {
                color: #666;
                cursor: pointer;
            }
        }
    }
    .image-wrapper {
        float: left;
        border: 1px solid #CCC;
        background: white;
        height: 100%;
        width: 95%;
        display: flex;
        justify-content: center;
        margin-right: 5%;

        img {
            align-self: center;
            max-width: 99%;
        }
    }

    .specs-list {
        list-style: none;
        margin-top: 10px;
        padding: 0;

        li {
            margin-bottom: 8px;
            line-height: 1.2em;
        }

        .label {
            color: #888;
            margin-right: 5px;
        }
    }
}
</style>
