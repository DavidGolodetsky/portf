<template>
  <div v-editable="blok">
    <component
      :is="bl.component"
      v-for="bl in blok.body"
      :key="bl._uid"
      :blok="bl"
    />
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
