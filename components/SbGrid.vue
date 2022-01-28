<template>
  <div v-editable="blok">
    <h2 class="py-10 text-center font-bold text-4xl">
      {{ blok.title }}
    </h2>
    <ul class="main-grid">
      <li v-for="bl in blok.columns" :key="bl._uid">
        <component
          class="component"
          :is="bl.component"
          :blok="bl"
          :columns="blok.columns"
        />
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

<style scoped>
.component {
  width: 400px;
}
</style>
