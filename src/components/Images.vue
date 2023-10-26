<script setup lang="ts">
import { ref, type Ref, onMounted, watch } from 'vue';
import { Image } from '../types/index';
import axios from 'axios';

const props = defineProps(['text']);

const randomImages: Ref<Image[]> = ref([]);
const searchImages: Ref<Image[]> = ref([]);

onMounted(getRandomImages);
async function getRandomImages() {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        count: 9,
        client_id: '9_f3Z7k1T1rViSuGBEs1RAlr0MhdWdmwAgc5kKAB0eI',
      },
    });
    randomImages.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

async function search(text: string) {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        per_page: 9,
        client_id: '9_f3Z7k1T1rViSuGBEs1RAlr0MhdWdmwAgc5kKAB0eI',
        query: text,
      },
    });
    searchImages.value = response.data.results;
  } catch (error) {
    console.log(error);
  }
}

watch(
  () => props.text,
  (newText: string) => {
    search(newText);
  }
);
</script>
<template>
  <div v-if="text" class="grid-container">
    <div v-for="image in searchImages" :key="image.id" class="grid-item">
      <router-link :to="'/ImageInfo/' + image.id"
        ><img :src="image.urls.small" :alt="image.alt_description" class="art drop-in"
      /></router-link>
    </div>
  </div>
  <div v-else class="grid-container">
    <div v-for="image in randomImages" :key="image.id" class="grid-item">
      <router-link :to="'/ImageInfo/' + image.id"
        ><img :src="image.urls.small" :alt="image.alt_description" class="art drop-in"
      /></router-link>
    </div>
  </div>
</template>

<style scoped>
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
.drop-in {
  animation: drop-in 1s ease 350ms backwards;
}
@keyframes drop-in {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
}

@media (max-width: 750px) {
  .grid-container {
    grid-template-columns: auto;
  }
}
</style>
