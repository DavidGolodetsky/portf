<template>
  <div v-editable="blok" class="text-center">
    <div
      v-for="(_, imageIndex) in image"
      :key="imageIndex"
      class="image mx-auto"
      :style="{ backgroundImage: `url(${getThumb(blok.image)})` }"
      @click="index = imageIndex"
    />
    <h3 v-if="showName">{{ blok.name }}</h3>

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
import { getThumb } from '~/utils/image'
export default {
  components: {
    CoolLightBox,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    showName: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return { getThumb }
  },
  data() {
    return {
      index: null,
      image: [
        {
          src: this.blok.image.filename,
          description: this.blok.description,
          title: this.blok.name,
        },
      ],
    }
  },
  computed: {
    images() {
      return this.columns.map((column) => ({
        src: column.image.filename,
        description: column.description,
        title: column.name,
      }))
    },
  },
}
</script>

<style scoped>
.image {
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
