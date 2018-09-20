<template>
    <div>
        {{ saldo }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

Vue.component('Saldo', {
  name: 'Reveal',
  data: () => {
      return {
        saldo: 0
      }
  },
  methods: {
      increment: () {
        return this.saldo++
      }
  },
  created: () :void => { 
      
    this.increment();
  }
});

export default class Home extends Vue {}
</script>
