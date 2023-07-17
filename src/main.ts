import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./views/HomePage.vue"
import ImageInfo from "./views/ImageInfo.vue"
import SelectedImages from "./views/SelecetedImages.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component:HomePage
        },
        {
            path:'/ImageInfo/:id',
            component:ImageInfo
        },
        {
            path:'/SelectedImages',
            component:SelectedImages
        }
    ]
})

createApp(App).use(router).mount('#app')
