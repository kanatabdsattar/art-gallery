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
  <div class="main">
    <div class="loop">
      <input
        type="text"
        placeholder="Поиск"
        v-model="queryText"
        class="input"
      />
      <Search class="icon" @click="searchQuery" />
    </div>
  </div>
</template>
<style scoped>
.main {
  background-image: url('../icons/background.png');
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.background {
  position: relative;
}
.loop {
  position: absolute;
  align-items: center;
  display: flex;
  width: 40vw;
  height: 50px;
  background-color: white;
}
.loop > input {
  flex: 1;
  padding-left: 10px;
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
@media (max-width: 750px) {
  .loop {
    width: 90vw;
  }
}
</style>
