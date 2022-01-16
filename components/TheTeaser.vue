<template>
  <nuxt-link
    :to="link"
    class="article-teaser block py-4 px-6 border rounded border-gray-500"
  >
    <h2 class="pt-2 pb-4 text-2xl font-bold">
      {{ name }}
    </h2>
    <time class="pt-2 pb-6 text-slate-400">{{ content.date }}</time>
    <img v-if="content.image" :src="getThumb(content.image)" />
    <p class="pb-6 leading-relaxed">
      {{ content.intro }}
    </p>
  </nuxt-link>
</template>

<script>
import { getThumb } from '~/utils/image'
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { getThumb }
  },
}
</script>

<style scoped>
.article-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
</style>
