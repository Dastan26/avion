import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import MainPage from "./modules/main/Main-page.vue";
import AdminPage from "@/modules/admin/Adminn-page";
import CartPage from "@/modules/cart/Cart-page";
import ProductsPage from "@/modules/products/Products-page";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: MainPage,
    },
    {
      name: "admin",
      path: "/admin",
      component: AdminPage,
    },
    {
      name: "cart",
      path: "/cart",
      component: CartPage,
    },
    {
      name: "products",
      path: "/products",
      component: ProductsPage,
    },
  ],
});
