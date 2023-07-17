<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  margin: 0;
  padding: 0;
}
</style>
