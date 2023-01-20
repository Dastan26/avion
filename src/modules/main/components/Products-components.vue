<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper">
        <router-link
          :to="{ name: 'product', params: { id: product.id } }"
          class="products-cards"
          v-for="(product, index) in products"
          :key="index"
        >
          <img class="products-items__icon" :src="product.image" alt="icon" />
          <h2 class="products-items__title">{{ product.title }}</h2>
          <h3 class="products-items__cost">£{{ product.price }}</h3>
        </router-link>
      </div>
      <router-link class="hero-collection__btn" to="/product-page"
        >View collection
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      limitValue: 4,
    };
  },
  computed: {
    products: {
      get() {
        return this.$store.getters.products;
      },
      set(value) {
        this.$store.commit("SET_PRODUCTS", value);
      },
    },
  },
  created() {
    fetch(`http://localhost:3000/products?limit=${this.limitValue}`)
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/products.scss";
</style>
