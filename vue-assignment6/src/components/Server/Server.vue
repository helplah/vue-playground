<template>
  <li class="list-group-item" @click='clickedServer'>
    Server #{{ server.id }}
  </li>
</template>

<script>
  import { serverBus } from '../../main.js';

  export default {
    props: ['server'],
    data: function() {
      return {
        displayStatus: false
      };
    },
    methods: {
      clickedServer() {
        this.displayStatus = !this.displayStatus; 
        //console.log(this.server);
        serverBus.$emit('toggleStatus', this.server);
      }
    }
  }
</script>

<style>
</style>