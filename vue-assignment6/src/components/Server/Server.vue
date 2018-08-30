<template>
  <li class="list-group-item" @click='clickedServer'>
    Server #{{ server.id }}
  </li>
</template>

<script>
  import { serverBus } from '../../main.js';

  export default {
    props: ['server'],
    methods: {
      clickedServer() {
        serverBus.$emit('toggleStatus', this.server);
      }
    }
  }
</script>

<style>
</style>