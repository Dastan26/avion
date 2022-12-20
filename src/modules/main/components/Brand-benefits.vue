<template>
  <section class="benefits">
    <div class="container">
      <h2 class="benefits-title">What makes our brand different</h2>
      <div class="benefits-wrapper">
        <div class="benefits-items">
          <img
            class="benefits-items__icon"
            src="../../../assets/icons/Delivery.svg"
            alt="delivery icon"
          />
          <h3 class="benefits-items__title">Next day as standard</h3>
          <p class="benefits-items__text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div class="benefits-items">
          <img
            class="benefits-items__icon"
            src="../../../assets/icons/CheckmarkOutline.svg"
            alt="delivery icon"
          />
          <h3 class="benefits-items__title">Made by true artisans</h3>
          <p class="benefits-items__text">
            Handmade crafted goods made with real passion and craftmanship
          </p>
        </div>
        <div class="benefits-items">
          <img
            class="benefits-items__icon"
            src="../../../assets/icons/Purchase.svg"
            alt="delivery icon"
          />
          <h3 class="benefits-items__title">Unbeatable prices</h3>
          <p class="benefits-items__text">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div class="benefits-items">
          <img
            class="benefits-items__icon"
            src="../../../assets/icons/Sprout.svg"
            alt="delivery icon"
          />
          <h3 class="benefits-items__title">Recycled packaging</h3>
          <p class="benefits-items__text">
            We use 100% recycled to ensure our footprint is more manageable
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "benefits-component",
};
</script>

<style lang="scss">
@import "../../../assets/scss/benefits.scss";
</style>
