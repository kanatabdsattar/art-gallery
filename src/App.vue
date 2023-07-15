<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <Header/>
  </div>
</template>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app{
  margin: 0;
  padding: 0;
}
</style>
