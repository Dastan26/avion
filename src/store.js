import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: "",
    cart: [],
  },
  mutations: {
    SET_PRODUCTS(state, newProducts) {
      state.products = newProducts;
    },
    SET_CART(state, newCart) {
      state.cart = newCart;
    },
  },
  actions: {
    allProducts({ commit }, payload) {
      fetch(`http://localhost:3000/products?limit=${payload}`)
        .then((res) => res.json())
        .then((json) => {
          commit("SET_PRODUCTS", json);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    products: (state) => state.products,
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
  },
});
