import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotDone from "@/views/NotDone.vue";
import ArticlesPage from "@/views/ArticlesPage.vue";
import ArticlePage from "@/views/ArticlePage.vue";
import Portfolio from "@/views/Portfolio.vue";
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
    component: Portfolio
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesPage
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: ArticlePage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
