<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <h2 class="py-10 text-center font-bold text-4xl">Collections</h2>
    <ul class="main-grid">
      <li v-for="gallery in stories" :key="gallery._uid" class="m-4">
        <the-teaser
          v-if="gallery.content"
          :link="gallery.full_slug"
          :name="gallery.name"
          :content="gallery.content"
        />
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
          This content loads on save. <strong>Save the entry & reload.</strong>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import { defineComponent, useAsync, computed } from '@nuxtjs/composition-api'
import useSb from '~/composables/useSb'

export default defineComponent({
  setup() {
    const { getSbData } = useSb()
    const storiesRaw = useAsync(() => getSbData('collections'))
    const stories = computed(() => storiesRaw.value?.stories)

    return {
      stories,
    }
  },
})
</script>
