<template>
  <header class="max-w-5xl ml-auto py-8">
    <nav>
      <ul class="flex justify-end">
        <li class="mr-4" v-for="({ text, link }, i) in links" :key="i">
          <nuxt-link class="text-teal-600 hover:underline" :to="link">
            {{ text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          link: '/',
          text: 'Home',
        },
        {
          link: '/gallery',
          text: 'Gallery',
        },
        {
          link: '/articles',
          text: 'Blog',
        },
      ],
    }
  },
}
</script>
