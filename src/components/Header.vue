<script setup lang="ts">
import Search from './icon/Search.vue';
import { ref } from 'vue';
const queryText = ref('');
const emit = defineEmits(['search']);

const searchQuery = () => {
  emit('search', queryText.value);
};
</script>
<template>
  <header>
    <img src="../icons/background.png" alt="background" class="background" />
    <div class="loop">
      <input
        type="text"
        placeholder="Поиск"
        v-model="queryText"
        class="input"
      />
      <Search class="icon" @click="searchQuery" />
    </div>
  </header>
</template>
<style scoped>
header {
  overflow: hidden;
  justify-content: center;
}
.background {
  position: relative;
}
.loop {
  position: absolute;
  align-items: center;
  bottom: 60%;
  left: 30%;
  display: flex;
  width: 500px;
  height: 50px;
  background-color: white;
}
.loop > input {
  padding-left: 10px;
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
}
input::placeholder {
  font-size: 16px;
}
.icon {
  padding-right: 10px;
}
</style>
