import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Index.vue"
import Show from "@/pages/Show.vue"

// define routes
const routes = [
    { path: "/", component: Home },
    { path: "/:pokemonId", component: Show }
]

// define router
export const router = createRouter({
    history: createWebHistory(),
    routes
})