<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </router-link>

    <router-link to="/" class="navbar-item">Home</router-link>
    <router-link to="/about" class="navbar-item">About</router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {}
};
</script>

<style lang="scss">
</style>
