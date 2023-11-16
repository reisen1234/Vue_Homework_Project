import { createRouter, createWebHistory } from "vue-router";
import myRouter from "../views/Home/myRouter.vue";
import home from "../views/Home/homePage.vue";
import myHomeVue from "../views/Home/myHome.vue";
import register from "../components/registerPage.vue";
import login from "../components/loginPage.vue";
import myComponent from "../components/myComponent.vue";
import myDirective from "../components/myDirective.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "base",
      component: myHomeVue,
    },
    {
      path: "/myRouter",
      name: "myRouter",
      component: myRouter,
    },
    {
      path: "/home/:id/:username",
      name: "home",
      component: home,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/myComponent",
      name: "myComponent",
      component: myComponent,
    },
    {
      path: "/myDirective",
      name: "myDirective",
      component: myDirective,
    },
  ],
});
/* router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log(to)
  console.log(next)
  next();
}) */
/* router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log(to)
  console.log(from)
}) */
export default router;
