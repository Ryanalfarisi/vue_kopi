import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Store from "../views/Store.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard
  },
  {
    path: "/store",
    name: "Store",
    component: Store
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/cart/checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
