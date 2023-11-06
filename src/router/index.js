import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/views/MainView.vue')
  },

  {
    path: "/support",
    name: "support",
    component: () => import('@/views/SupportView.vue')
  },

  {
    path: "/video",
    name: "video",
    component: () => import("@/views/VideoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
