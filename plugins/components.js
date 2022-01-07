import Vue from 'vue'
import ThePage from '~/components/ThePage.vue'
import TheTeaser from '~/components/TheTeaser.vue'
import TheGrid from '~/components/TheGrid.vue'
import TheFeature from '~/components/TheFeature.vue'
import ArticleTeaser from '~/components/ArticleTeaser.vue'

Vue.component('page', ThePage)
Vue.component('teaser', TheTeaser)
Vue.component('grid', TheGrid)
Vue.component('feature', TheFeature)
Vue.component('article-teaser', ArticleTeaser)
