<template>
  <div id="app">
      <navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import 'bulma/css/bulma.css'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
$bg-color: #6BAB90;
$content-bg-color: #FFFFFF;

  body {
    background-color: $bg-color;
    height: 100vh;
    width: 100vw;
  }

  .container {
    width: 100vw;
    height: calc(100vh - 89px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background-color: $content-bg-color;
    min-width: 70%;
    min-height: 70%;
  }
</style>

