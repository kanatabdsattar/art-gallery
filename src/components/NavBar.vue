<script setup lang="ts">
import Chosen from './icon/Chosen.vue';
</script>
<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="../icons/OBJECTS.png" alt="logo" class="logo" />
      </router-link>
      <router-link to="/SelectedImages" class="link">
        <Chosen />
        <p class="selected">Избранный</p>
      </router-link>
    </nav>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
header {
  background-color: black;
}
nav {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
}
button {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
}
.logo {
  padding: 20px;
  height: 50px;
}
.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  gap: 5px;
}
.selected {
  font-family: 'Roboto', sans-serif;
}
</style>
