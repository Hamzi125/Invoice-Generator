import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "./components/Dashboard.vue"; 
import Rechnung from "./components/rechnung.vue";



const routes = [
  { path: "/", component: Dashboard },
  { path: "/rechnung", component: Rechnung },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
