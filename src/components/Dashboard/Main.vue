<template>
<div class="container">
  <div class="columns">
    <div class="column">
      <h2 class="title is-2">Dashboard</h2>
        <h4 class="title is-4">Huidig saldo: &euro; 157,38</h4>
    </div>
    <div class="column">
      <h4 class="title is-4">Saldo toevoegen</h4>
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="number" step="0.01">
        </div>
        <div class="control">
          <a class="button is-info">
            Toevoegen
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Main'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
