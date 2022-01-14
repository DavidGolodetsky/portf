<template>
  <div v-editable="blok" class="text-center">
    <div
      v-for="(_, imageIndex) in image"
      :key="imageIndex"
      class="image"
      :style="{ backgroundImage: `url(${thumb})` }"
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
    columns: {
      type: Object,
      required: true,
    },
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
    thumb() {
      const path = this.blok.image.filename.replace(
        'https://a.storyblok.com',
        ''
      )
      return `//img2.storyblok.com/300x300${path}`
    },
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
