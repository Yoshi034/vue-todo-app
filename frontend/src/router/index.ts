import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoBoard from "../views/TodoBoard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TodoBoard",
    component: TodoBoard,
  },
  {
    path: "/add",
    name: "TodoAdd",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "a" */ "../views/TodoAdd.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
