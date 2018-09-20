<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <h2 class="title is-2">Budgetplanner</h2>

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
  props: {
  }
}
</script>

<style lang="scss">

  .navbar {
    box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.39);
  }

  .navbar-brand {
    margin: 10px 20px 0 20px;
  }
</style>
