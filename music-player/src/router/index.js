import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ManagePage from "@/views/ManagePage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/manage",
    component: ManagePage,
    beforeEnter: (from, to, next) => {
      console.log("custom guard");
      next();
    },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  console.log("Global Quard", from, to);
  next();
});

export default router;
