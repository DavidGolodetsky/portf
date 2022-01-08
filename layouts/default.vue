<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <TheHeader />
    <Nuxt class="px-3 max-w-screen-2xl mx-auto" />
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
// import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
}
</script>

<style>
.cool-lightbox.cool-lightbox--is-swipping {
  cursor: default !important;
}
</style>
