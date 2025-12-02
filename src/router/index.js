import {createRouter,createWebHistory} from 'vue-router'
import CafeView from "@/views/CafeView.vue";

const routes = [
    {
      path: '/cafe',
      name: 'cafe',
      component: CafeView
    },
  ]
    const router=createRouter({
        history:createWebHistory(process.env.BASE_URL),
        routes
    })

export default router;