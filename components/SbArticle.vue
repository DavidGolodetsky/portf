<template>
  <div v-editable="blok" class="prose lg:prose-xl my-24 mx-auto">
    <h1>{{ blok.name }}</h1>
    <time class="pt-2 pb-4">{{ blok.date }}</time>
    <div class="relative">
      <SbGallery
        :blok="blok.gallery[0].columns[0]"
        :columns="blok.gallery[0].columns"
        :show-name="false"
      />
      <CarbonImageCopy
        v-if="blok.gallery[0].columns.length > 1"
        class="absolute bottom-5 right-5 text-white cursor-none pointer-events-none"
      />
    </div>

    <p>{{ blok.intro }}</p>
    <rich-text-renderer :document="blok.body" />
  </div>
</template>

<script>
import CarbonImageCopy from '~/components/icons/CarbonImageCopy'
export default {
  components: {
    CarbonImageCopy,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
