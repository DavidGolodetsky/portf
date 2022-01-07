<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ul v-editable="blok" class="flex py-8 mb-6">
    <li v-for="bl in blok.columns" :key="bl._uid" class="flex-auto px-6">
      <component :is="bl.component" :blok="bl" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
