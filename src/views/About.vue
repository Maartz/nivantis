<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Map/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Map from './../shared/Map.vue';

  @Component({
    components: {
      Map,
    },
  })
  export default class About extends Vue {}
</script>
