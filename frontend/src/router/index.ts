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
    component: () => import("../views/TodoAdd.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
