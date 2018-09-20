<template>
  <md-content class="md-elevation-1">
    <Saldo/>
  </md-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Saldo from '@/components/Saldo.vue'; // @ is an alias to /src

@Component({
  components: {
    Saldo
  },
})
export default class Home extends Vue {}
</script>
