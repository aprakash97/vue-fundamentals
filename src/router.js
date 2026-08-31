import HomePage from "./components/views/HomePage.vue";
import LoginPage from "./components/views/LoginPage.vue";
// import { createRouter, createMemoryHistory } from "vue-router";

export const routes = [
  { path: "/", component: HomePage },
  {
    path: "/login",
    component: () => import("./components/views/LoginPage.vue"),
  },
  {
    path: "/users",
    component: () => import("@/components/views/UsersPage.vue"),
  },
  {
    path: "/users/:id",
    component: () => import("@/components/views/ProfilePage.vue"),
  },
];

// export const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// });
