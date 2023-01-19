import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: "",
  },
  mutations: {
    SET_PRODUCTS(state, newProducts) {
      state.product = newProducts;
    },
  },
  actions: {
    allProducts({ commit }, payload) {
      fetch(`http://localhost:3000=${payload}`)
        .then((res) => res.json())
        .then((json) => {
          commit("SET_PRODUCTS", json);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {
    getProducts: (state) => state.product,
  },
});
