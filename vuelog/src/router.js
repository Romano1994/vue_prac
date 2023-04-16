import { createWebHistory, createRouter } from "vue-router";
import MainBody from './components/MainBody'
import List from './components/List'
import Detail from './components/Detail'

const routes = [
  {
    path: "/",
    component: MainBody,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 