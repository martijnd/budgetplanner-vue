<template>
<div class="content">
  <div class="section">
    <Main/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Dashboard/Main.vue'

export default {
  name: 'home',
  components: {
    Main
  }
}
</script>

<style lang="scss">
  .content {
    box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.39);
  }
</style>
