<template>
  <div v-editable="blok" class="prose lg:prose-xl my-24 mx-auto">
    <h1>{{ blok.name }}</h1>
    <time class="pt-2 pb-4">{{ blok.date }}</time>
    <p>{{ blok.intro }}</p>
    <rich-text-renderer :document="blok.body" />
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
