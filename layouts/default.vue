<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <SbHeader />
    <Nuxt class="px-3 max-w-screen-2xl mx-auto" />
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import SbHeader from '~/components/SbHeader.vue'
// import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    SbHeader,
    // TheFooter,
  },
}
</script>

<style>
.cool-lightbox.cool-lightbox--is-swipping {
  cursor: default !important;
}
</style>
