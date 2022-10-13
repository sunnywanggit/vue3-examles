import { createRouter, createWebHistory  } from "vue-router";
import { App } from "vue";
import { routes } from "../routes";


export const installRouter = (app: App) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  app.use(router);
}
