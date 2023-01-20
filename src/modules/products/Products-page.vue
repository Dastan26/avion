<template>
  <div class="products">
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
      <button class="hero-collection__btn">View collection</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: "",
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    loadMoreProducts() {
      this.limitValue += 4;
      this.$store.dispatch("allProducts", this.limitValue);
    },

    getProducts() {
      fetch(`http://localhost:3000/products`)
        .then((res) => res.json())
        .then((json) => (this.products = json));
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/products.scss";
</style>
