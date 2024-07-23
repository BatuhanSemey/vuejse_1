import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeComponent.vue'
import Bookmark from '../components/BookmarkComponent.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router