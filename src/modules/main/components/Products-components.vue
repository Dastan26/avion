<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper">
        <div class="products-cards">
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
      </div>
      <button class="hero-collection__btn">View collection</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Products-component",
};
</script>

<style lang="scss">
@import "../../../assets/scss/products.scss";
</style>
