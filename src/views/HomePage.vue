<script setup lang="ts">
import Header from '../components/Header.vue';
import Images from '../components/Images.vue';
import { ref } from 'vue';

const text = ref('');

const onSearch = (searchText: string) => {
  console.log('Search text:', searchText);
  text.value = searchText;
};
</script>
<template>
  <div class="main">
    <Header @search="onSearch" />
    <Images :text="text" />
  </div>
</template>
<style scoped>
.main {
  display: flex;
  width: 100vw;
  flex-direction: column;
  gap: 40px;
}
@media (max-width: 600px) {
  .main {
    width: 100vw;
    justify-content: center;
  }
}
</style>
