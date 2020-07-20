import Vue from "vue";
import VueRouter from "vue-router";
//import Content from "../views/Content.vue";
import Main from "../views/Main.vue";
import Om from "../views/Om.vue";
// import Kontakt from "../views/Kontakt.vue";
import TheNotFound from "../components/TheNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/om",
    name: "Om",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Om,
  },
  // {
  //   path: "/kontakt",
  //   name: "Kontakt",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: Kontakt,
  // },
  {
    path: "/404",
    component: TheNotFound,
  },
  {
    path: "*",
    component: TheNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
