<template>
  <div v-editable="blok" class="text-center">
    <div
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      class="image"
      :style="{ backgroundImage: `url(${image.src})` }"
      @click="index = imageIndex"
    />
    <h3>{{ blok.name }}</h3>
    <CoolLightBox
      :items="images"
      :index="index"
      :full-screen="true"
      :use-zoom-bar="true"
      effect="fade"
      @close="index = null"
    />
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  components: {
    CoolLightBox,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      images: [
        {
          src: this.blok.image.filename,
          description: this.blok.description,
          title: this.blok.name,
        },
      ],
      index: null,
    }
  },
}
</script>

<style scoped>
.image {
  height: 400px;
  width: 400px;
  margin-bottom: 12px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
