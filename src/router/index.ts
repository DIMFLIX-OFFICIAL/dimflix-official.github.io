import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotDone from "@/views/NotDone.vue";
import About from "@/views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  }, 
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: NotDone
  },
  {
    path: "/articles",
    name: "articles",
    component: NotDone
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
