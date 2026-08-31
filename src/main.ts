import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router.js";
// import { router } from "./router.js";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
  routes,
  history: createWebHistory(),
});

app.use(router);
app.use(pinia);
app.mount("#app");
