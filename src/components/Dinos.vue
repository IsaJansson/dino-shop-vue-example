<template>
<div id="list-of-dinos" class="container">
  <div class="dino-wrapper" v-for="dino in dinos">
    <router-link v-bind:to="'dino/' + dino.id">
      <div class="description-overlay">
        <p v-html="dino.info.length > 100 ? dino.info.slice(0, 60) + '...' : dino.info"></p>
      </div>
      <div class="image-wrapper">
        <img v-bind:src="dino.imageUrl" />
      </div>
      <p>{{dino.name}}</p>
      <span class="text-muted">&euro;{{dino.price}}</span>
      <span class="addToCart" v-b-tooltip.hover.left title="Sadly not implemented yet">
        <font-awesome-layers>
          <font-awesome-icon :icon="['far', 'circle']" class="fa-2x" />
          <font-awesome-icon icon="cart-plus" class="foreground-icon" />
        </font-awesome-layers>
      </span>
    </router-link>
  </div>
  </br />
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
<style lang="scss" scoped>
$break-small: 768px;
$break-medium: 992px;

#list-of-dinos {
    a {
        color: darkgrey;
        &:hover {
            text-decoration: none;
        }
    }

    .dino-wrapper {
        position: relative;
        background-color: #fafafa;
        margin: 2%;
        width: 28%;
        height: 250px;
        float: left;
        text-align: center;
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 3px 3px 8px lightgrey;

        @media screen and (max-width: $break-medium) {
            width: 46%;
        }
        @media screen and (max-width: $break-small) {
            height: 150px;
        }

        .description-overlay {
            position: absolute;
            top: 70px;
            left: 0;
            display: none;
            width: 100%;
            height: 200px;
            justify-content: center;

            @media screen and (max-width: $break-small) {
                height: 100px;
            }

            p {
              background-color:  rgba(89, 123, 143, 0.7);
              border-radius: 5px;
                color: white;
                font-size: 12px;
                margin: auto;
                margin-left: 5px;
                margin-right: 5px;
                padding:10px 30px;
            }
        }

        &:hover {
            box-shadow: 5px 5px 10px lightgrey;
            background-color: #f4f4f4;
            transform: scale(1.1);

            .description-overlay {
                display: flex;
            }

            p {
                font-weight: bold;
            }
        }

        p {
            line-height: 0.9em;
            color: #01a59d;
            margin-top: 10px;
            margin-bottom: 0;
        }

        .addToCart {
            position: absolute;
            top: 8px;
            right: 20px;
            color: #ddd;

            &:hover {
                font-size: 1.2em;
                color: #01a59d;
            }

            .foreground-icon {
                padding-left: 3px;
                left: 5px;
            }
        }

        .image-wrapper {
            background: white;
            align-items: baseline;
            height: 200px;

            @media screen and (max-width: $break-small) {
                height: 100px;
            }

            img {
                height: 100%;
                margin: auto;
                vertical-align: middle;
            }
        }
    }
}
</style>
