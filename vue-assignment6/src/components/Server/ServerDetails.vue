<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if='!server'>Please select a Server</p>
    <p v-else>Server #{{server.id}} selected, Status: {{server.status}}</p>
    <hr>
    <button @click='changeStatus'>Change to Normal</button>
  </div>
</template>

<script>
  import { serverBus } from '../../main.js';

  export default { 
    data: function() {
      return {
        server: null
      }
    },
    methods: {
      changeStatus() {
        if (this.server !== null) {
          this.server.status = "Normal";
        }
      }
    }, 
    created() {
      serverBus.$on('toggleStatus', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style scoped>
  div {
    border: 1px red solid;
  }
</style>