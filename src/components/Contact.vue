<template>
<div id="contact">
  <h1>We would
    <font-awesome-icon icon="heart" /> to help you</h1>
  <div class="contact-content">
    <h4>Give us a call or if you are shy and not in any immidiate danger write us an email instead.</h4>
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
  <div class="social-content">
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
</template>

<script>
export default {
  name: 'Contact',
  data: function() {
    return {
      dinos: []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact h1 {
  margin-top: 20px;
  text-align: center;
}

.icon {
  margin-right: 10px;
}

.contact-content {
  border-top: 2px dotted lightgrey;
  padding: 20px 20px 0 20px;
  margin: 20px auto;
  text-align: center;
}

.contact-content h4 {
  margin-bottom: 35px;
}

.social-content {
  margin: 25px auto;
  border-top: 1px solid lightgrey;
  padding-top: 20px;
  text-align: center;
}

.social-content a {
  margin-right: 5px;
  font-size: 18pt;
  color: lightgrey;
}

.social-content a:hover {
  color: grey;
  text-decoration: none;
}
</style>
