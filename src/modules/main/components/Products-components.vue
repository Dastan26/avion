<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper">
        <div
          class="product-card"
          v-for="(product, index) in products"
          :key="index"
        >
          <img class="products-items__icon" :src="product.image" alt="icon" />
          <h2 class="products-items__title">{{ product.title }}</h2>
          <h3 class="products-items__cost">£{{ product.price }}</h3>
        </div>
        <!-- <div class="products-cards">
          <img
            class="products-items__icon"
            src="../../../assets/images/Chair.png"
            alt="chair icon"
          />
          <h3 class="products-items__title">The Dandy chair</h3>
          <p class="products-items__cost">£250</p>
        </div>
        <div class="products-cards">
          <img
            class="products-items__icon"
            src="../../../assets/images/Vase.png"
            alt="delivery icon"
          />
          <h3 class="products-items__title">Rustic Vase Set</h3>
          <p class="products-items__cost">£155</p>
        </div>
        <div class="products-cards">
          <img
            class="products-items__icon"
            src="../../../assets/images/Botle.png"
            alt="delivery icon"
          />
          <h3 class="products-items__title">The Silky Vase</h3>
          <p class="products-items__cost">£125</p>
        </div>
        <div class="products-cards">
          <img
            class="products-items__icon"
            src="../../../assets/images/Lamp.png"
            alt="delivery icon"
          />
          <h3 class="products-items__title">The Lucy Lamp</h3>
          <p class="products-items__cost">£399</p>
        </div>
       -->
      </div>
      <button class="hero-collection__btn">
        <router-link to="/products">View collection</router-link>
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      limitValue: 4,
    };
  },

  computed: mapGetters(["products"]),

  created() {
    this.$store.dispatch("allProducts", this.limitValue);
  },
  methods: {
    loadMoreProducts() {
      this.limitValue += 4;

      this.$store.dispatch("allProducts", this.limitValue);
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/products.scss";
</style>
