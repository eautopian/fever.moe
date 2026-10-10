import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './views/HomeView/HomeView.vue'
import EautopianView from './views/EautopianView/EautopianView.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', component: HomeView },
    { path: '/eautopian', component: EautopianView },
    { path: '/:pathMatch(.*)*', redirect: '/' }
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
