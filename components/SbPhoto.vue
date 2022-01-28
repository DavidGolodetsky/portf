<template>
  <div v-editable="blok" class="text-center">
    <div
      class="image mx-auto"
      :style="{ backgroundImage: `url(${getThumb(blok.image)})` }"
    />
    <h3 v-if="showName">{{ blok.name }}</h3>
  </div>
</template>

<script>
import { getThumb } from '~/utils/image'

export default {
  props: {
    blok: {
      type: Object,
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
    return {}
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
