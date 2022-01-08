<template>
  <div v-editable="blok">
    <h2 class="py-10 text-center font-bold text-4xl">
      {{ blok.title }}
    </h2>
    <ul class="flex justify-between flex-wrap py-8 mb-6">
      <li v-for="bl in blok.columns" :key="bl._uid" class="mb-10 px-6">
        <component :is="bl.component" :blok="bl" />
      </li>
    </ul>
  </div>
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
