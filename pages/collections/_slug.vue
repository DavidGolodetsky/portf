<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div v-if="story.content.component" class="main-grid">
      <div
        v-for="(body, imageIndex) in story.content.body"
        :key="imageIndex"
        @click="index = imageIndex"
      >
        <SbPhoto :key="imageIndex" :blok="body" class="img" />
      </div>
    </div>
    <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
      This content loads on save. <strong>Save the entry & reload.</strong>
    </p>
    <CoolLightBox
      :items="images"
      :index="index"
      :full-screen="true"
      :use-zoom-bar="true"
      effect="fade"
      @close="index = null"
    />
  </section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      story: { content: {} },
      index: null,
    }
  },
  computed: {
    images() {
      return this.story.content.body.map((item) => ({
        src: item.image.filename,
        description: item.description,
        title: item.name,
      }))
    },
  },
  mounted() {
    this.$storybridge(() => {
      // eslint-disable-next-line no-undef
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
  asyncData(context) {
    // // This what would we do in real project
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path

    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get(`cdn/stories/collections/${context.params.slug}`, {
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

<style scoped>
.img {
  width: 400px;
}
</style>
