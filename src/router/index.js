import { createRouter, createWebHistory } from "vue-router";
import Home from "views/home/Home";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("views/category/Category")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("views/cart/Cart")
  },
  {
    path: "/me",
    name: "Me",
    component: () => import("views/me/Me")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
