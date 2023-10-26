<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import axios from 'axios';
import { Image } from '../types/index';
function getChosenImageIds() {
  let ids = localStorage.getItem('chosenImageIds');
  ids = ids ? JSON.parse(ids) : [];

  // Remove duplicates and keep only unique values
  const uniqueIds = [...new Set(ids)];

  // Update the localStorage with the unique IDs
  localStorage.setItem('chosenImageIds', JSON.stringify(uniqueIds));

  return uniqueIds;
}
const chosenImages: Ref<Image[]> = ref([]);
onMounted(getChosenImages);
async function getChosenImages() {
  const chosenImageIds = getChosenImageIds();
  const accessKey = '9_f3Z7k1T1rViSuGBEs1RAlr0MhdWdmwAgc5kKAB0eI';

  for (const imageId of chosenImageIds) {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/${imageId}`,
        {
          params: {
            client_id: accessKey,
          },
        }
      );
      chosenImages.value.push(response.data);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }
}
</script>
<template>
  <div class="main">
    <router-link to="/" class="back">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="12"
        viewBox="0 0 6 10"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.70711 0.292893C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L2.41421 5L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L4.29289 0.292893C4.68342 -0.0976311 5.31658 -0.0976311 5.70711 0.292893Z"
          fill="black"
        />
      </svg>
      <p>Вернуться назад</p>
    </router-link>
    <h1>Избранное</h1>
    <div class="grid-container">
      <div v-for="image in chosenImages" :key="image.id" class="grid-item">
        <img
          :src="image.urls.regular"
          :alt="image.alt_description"
          class="art"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
h1 {
  font-family: 'Roboto', sans-serif;
}
.main {
  margin: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.back {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: #0075cd;
}
.grid-container {
  margin: 0 auto;
  gap: 20px;
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  font-size: 30px;
  text-align: center;
}
.grid-item img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
.art {
  object-fit: scale-down;
  height: 250px;
  width: 300px;
  object-fit: cover;
}
</style>
