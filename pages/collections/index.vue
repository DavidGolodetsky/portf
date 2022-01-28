<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <h2 class="py-10 text-center font-bold text-4xl">Collections</h2>
    <ul class="main-grid">
      <li class="m-4" v-for="gallery in stories" :key="gallery._uid">
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
export default {
  data() {
    return {
      stories: [],
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        starts_with: 'collections/',
        version: 'draft',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
}
</script>
