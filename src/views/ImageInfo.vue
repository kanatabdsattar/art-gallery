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

const handleChosenClick = () => {
  if (image.value) {
    chosenImageIds.value.push(image.value.id);

    localStorage.setItem('id', JSON.stringify(chosenImageIds.value));
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
        class="image"
      />
    </div>
    <div v-else>Loading</div>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
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
.image {
  height: 400px;
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
  transform: translateY(-80%);
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
.save {
  background-color: white;
  color: black;
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
