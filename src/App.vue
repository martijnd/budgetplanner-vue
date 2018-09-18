<template>
  <div id="app">
    <div id="nav">
      <navbar/>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import 'bulma/css/bulma.css';

export default {
  name: 'app',
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
</style>

