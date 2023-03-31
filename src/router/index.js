import { createRouter, createWebHistory } from "vue-router";
import ShowCase from "@/templates/showcase/index.vue";
const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        component: ShowCase,
      },
      {
        path: "wealthfront",
        component: () => import("@/templates/wealthfront/index.vue"),
      },
      {
        path: "squeezy",
        component: () => import("@/templates/squeezy/index.vue"),
      },
      {
        path: "shopify",
        component: () => import("@/templates/shopify/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
