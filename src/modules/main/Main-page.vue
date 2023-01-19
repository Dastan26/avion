<template>
  <main class="main">
    <section class="hero">
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-collection">
            <div class="hero-collection__text">
              <h2>
                Luxury homeware for people who love timeless design quality
              </h2>
              <p>Shop the new Spring 2022 collection today</p>
              <button class="hero-collection__btn">View collection</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <brand-benefits></brand-benefits>
    <products-components></products-components>
    <hero-components></hero-components>
    <signup-components></signup-components>
  </main>
</template>

<script>
import BrandBenefits from "./components/Brand-benefits";
import ProductsComponents from "./components/Products-components";
import HeroComponents from "./components/Hero-components";
import SignupComponents from "./components/Signup-components";
export default {
  name: "Main-page",
  components: {
    BrandBenefits,
    ProductsComponents,
    HeroComponents,
    SignupComponents,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
</style>
