<template>
  <div v-editable="blok" class="text-center wrapper">
    <div class="lightbox" :class="{ 'lightbox-open': isLightbox }">
      <img class="photo" :src="blok.image.filename" @click="lightboxToggle" />
      <span class="cross" @click="lightboxToggle">X</span>
    </div>
    <h1 class="text-lg">{{ blok.name }}</h1>
    <p class="text-gray-600">
      {{ blok.description }}
    </p>
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
  data() {
    return {
      isLightbox: false,
    }
  },
  methods: {
    lightboxToggle() {
      this.isLightbox = !this.isLightbox
      const body = document.querySelector('body')
      const html = document.querySelector('html')
      const root = [body, html]
      root.forEach((el) => (el.style.overflow = 'auto'))
      if (this.isLightbox) {
        root.forEach((el) => (el.style.overflow = 'hidden'))
      }
    },
  },
}
</script>

<style scoped>
.lightbox {
  cursor: pointer;
}
.photo {
  max-height: 400px;
  max-width: 400px;
  margin: auto;
  margin-bottom: 12px;
}
.cross {
  display: none;
  position: fixed;
  top: 50px;
  right: 50px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}
.lightbox-open {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}
.lightbox-open .photo {
  height: 98%;
  overflow: hidden;
  width: auto;
  max-height: 100%;
  max-width: 100%;
  cursor: pointer;
}
.lightbox-open .cross {
  display: inline-block;
}
</style>
