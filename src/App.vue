<template>
<div id="app">
  <div id="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="navbar-brand" to="/">
          <div class="site-logo">
            <font-awesome-icon icon="dragon" size="2x" />
          </div>
        </router-link>
        <b-btn class="navbar-toggler" v-b-toggle.collapsMenu >
          <span class="navbar-toggler-icon"></span>
        </b-btn>

        <b-collapse visible id="collapsMenu">
          <ul class="navbar-nav mr-auto site-menu">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <font-awesome-icon icon="mountain" /> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                <font-awesome-icon icon="dna" /> About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">
                <font-awesome-icon icon="dove" /> Contact</router-link>
            </li>
          </ul>
        </b-collapse>
        <div class="shopping-cart-wrapper">
          <font-awesome-layers v-b-tooltip.hover.left title="Sadly not implemented yet">
            <font-awesome-icon icon="square" size="3x" class="background-icon" />
            <font-awesome-icon icon="shopping-cart" size="1x" class="shopping-cart-icon" />
          </font-awesome-layers>
      </div>
      </nav>
    </div>
  </div>

  <div id="main-content">
    <router-view />
  </div>
  <div id="footer">
    <div class="upper-footer">
      <div class="container">
        <div class="row justify-content-between">
          <div class="contact col-sm-6">
            <p>
              <span class="icon">
                <font-awesome-icon icon="phone" /></span>
              (+46)0723456576
            </p>
            <p>
              <span class="icon">
                <font-awesome-icon icon="envelope" /></span>
              dino.shop@example.com
            </p>
          </div>
          <div class="social col-sm-6">
            <a href="http://facebook.com">
              <font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="http://instagram.com">
              <font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="http://linkedin.com">
              <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a href="http://twitter.com">
              <font-awesome-icon :icon="['fab', 'twitter']" /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="lower-footer">
      <span>
        <router-link to="/#">Privacy Policy</router-link> &#8226; <router-link to="/contact">Contact</router-link> &#8226;
        &#9400; {{ new Date().getFullYear() }} Dino Shop
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$break-small: 768px;
$break-medium: 992px;

body {
    background-color: #f7f9f9;

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

        .btn-primary {
            background-color: #006868;
            border-color: #006060;

            &:hover {
                background-color: #01a59d;
            }
        }

        a {
            &:hover {
                text-decoration: none;
            }
        }

        .text-muted {
            font-style: italic;
            font-size: 9pt;
        }

        .container {
            padding-top: 20px;
            padding-bottom: 20px;
        }

        #header {
            display: inline-block;
            background: #333;
            width: 100%;

            #collapsMenu {
              width:100%;
            }

            .site-logo {
                color: white;
                float: left;
                width: 90px;
            }

            .navbar-toggler {
              margin-right:50px;
            }

            .site-menu {
                margin-top: 5px;
                list-style: none;
                vertical-align: middle;
                padding-left: 0;

                li {
                    float: left;
                    margin-right: 25px;

                    a {
                        color: white;
                        &:hover {
                            text-decoration: none;
                            color: #01a59d;
                        }
                    }

                    .svg-inline--fa {
                        color: #01a59d;
                        font-size: 0.9em;
                        margin-right: 3px;
                    }
                }
            }

            .shopping-cart-wrapper {
                text-align: right;
                color: white;
                margin: 5px 20px 0 0;
                position: absolute;
                top: 17px;
                right: 10px;

                .background-icon {
                    color: #006060;
                }

                .shopping-cart-icon {
                    margin-left: 10px;
                }
            }
        }

        #footer {
            margin-top: 30px;

            .upper-footer {
                display: inline-block;
                width: 100%;
                background: #006868;
                color: white;
                text-align: center;

                .contact {
                    .icon {
                        margin-right: 10px;
                    }
                }

                .social {

                    a {
                        font-size: 18pt;
                        color: white;
                        margin-left: 10px;

                        &:hover {
                            color: lightgrey;
                        }
                    }
                }
            }

            .lower-footer {
                padding: 10px;
                text-align: center;
                background-color: #006060;

                a {
                    color: #2c3e50;

                    &:hover {
                        color: #333;
                    }
                }
            }
        }

        #main-content {
            margin: auto;
            width: 80%;
            flex: 1;
        }
    }
}

</style>
