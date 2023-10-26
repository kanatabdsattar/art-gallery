<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import axios from 'axios';
import { Image } from '../types/index';
import { useRoute } from 'vue-router';
import Chosen from '../components/icon/Chosen.vue';
import Download from '../components/icon/Download.vue';

const image: Ref<Image | null> = ref(null);
const user = ref();
const route = useRoute();
const chosenImageIds: Ref<string[]> = ref([]);

onMounted(async () => {
  const accessKey = '9_f3Z7k1T1rViSuGBEs1RAlr0MhdWdmwAgc5kKAB0eI';

  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/${route.params.id}?client_id=${accessKey}`
    );
    image.value = response.data;
    user.value = response.data.user.name;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
});
function getChosenImageIds() {
  const ids = localStorage.getItem('chosenImageIds');
  return ids ? JSON.parse(ids) : [];
}

chosenImageIds.value = getChosenImageIds();
const handleChosenClick = () => {
  if (image.value) {
    chosenImageIds.value.push(image.value.id);

    localStorage.setItem(
      'chosenImageIds',
      JSON.stringify(chosenImageIds.value)
    );
  }
};
</script>

<template>
  <div class="main">
    <img
      src="../icons/imageinfo.png"
      alt="background"
      class="background-image"
    />
    <div class="image-function">
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
            fill="white"
          />
        </svg>
        <p>Вернуться назад</p>
      </router-link>
      <div class="image-function__autor">
        <p class="author">
          {{ user }} <br />
          <span class="author__mail">@{{ user }}</span>
        </p>
      </div>
      <div class="buttons">
        <button class="chosen" @click="handleChosenClick">
          <Chosen class="chosen__icon" />
        </button>
        <button class="save"><Download class="save__icon" />Download</button>
      </div>
    </div>
    <div v-if="image" class="image-info">
      <img
        :src="image.urls.regular"
        :alt="image.alt_description"
        class="image drop-in"
      />
    </div>
    <div v-else></div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.main {
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  z-index: -1;
}
.background-image {
  aspect-ratio: 2/1;
  height: 450px;
  width: 100vw;
  object-fit: cover;
  position: relative;
}
.author {
  color: white;
  font-family: 'Roboto', sans-serif;
}
.author__mail {
  font-size: 13px;
}
.save:hover {
  transition: 0.4s ease;
  background-color: white;
}
.back {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: white;
  z-index: 3;
}
.back:hover {
  transition: 0.4s ease;
  border-bottom: 1px solid white;
}
.image {
  height: 500px;
  z-index: -1;
}
.drop-in {
  animation: drop-in 1s ease 250ms backwards;
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

.image-function {
  width: 90vw;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-info {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  transform: translateY(-60%);
  margin-top: 400px;
}
.buttons {
  display: flex;
  gap: 10px;
}
.chosen {
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  height: 100%;
}
.chosen:hover {
  transition: 0.4s ease;
  background-color: #fff200;
}
.save {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  background-color: white;
  border-radius: 6px;
  background-color: #fff200;
}
.save__icon {
  stroke: black;
  height: 20px;
}
.chosen__icon {
  stroke: black;
}
</style>
