<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <h2 class="py-10 text-center font-bold text-4xl">Articles Overview</h2>
    <ul class="main-grid">
      <li class="m-4 h-64" v-for="article in stories" :key="article._uid">
        <the-teaser
          v-if="article.content"
          :link="article.full_slug"
          :name="article.content.name"
          :content="article.content"
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
        starts_with: 'blog/',
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
