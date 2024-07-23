import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/HomeComponent.vue'
import Favorites from './pages/BookmarkComponent.vue'

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/favorites', name: 'favorites', component: Favorites},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')