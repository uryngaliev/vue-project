import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/MainView.vue"),
  },

  {
    path: "/support",
    name: "support",
    component: () => import("@/views/SupportView.vue"),
  },

  {
    path: "/video",
    name: "video",
    component: () => import("@/views/VideoView.vue"),
  },

  {
    path: "/video/game-room",
    name: "game-room",
    component: () => import("@/views/GameRoom.vue"),
  },

  {
    path: "/video/wardrobe",
    name: "wardrobe",
    component: () => import("@/views/Wardrobe.vue"),
  },

  {
    path: "/video/bed-room",
    name: "bed-room",
    component: () => import("@/views/BedRoom.vue"),
  },

  {
    path: "/video/play-ground",
    name: "play-ground",
    component: () => import("@/views/Playground.vue")
  },

  {
    path: "/video/dining-room",
    name: "dining-room",
    component: () => import("@/views/DiningRoom.vue"),
  },

  {
    path: "/food-menu",
    name: "food-menu",
    component: () => import("@/views/FoodMenu.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
