<template>
  <div class="about">
    <h1 class="about-title">
      A brand built on the love of craftmanship, quality and outstanding
      customer service
    </h1>
    <div class="hero-first">
      <div class="hero-block">
        <h3 class="hero-block__title">
          From a studio in London to a global brand with over 400 outlets
        </h3>
        <p class="hero-block__text">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </p>
        <p class="hero-block__text">
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
      </div>
      <img src="@/assets/images/hero1.png" alt="" class="hero-first__img" />
    </div>
    <div class="hero-first">
      <img src="@/assets/images/hero2.png" alt="" class="hero-first__img" />
      <div class="hero-block2">
        <h3 class="hero-block__title">
          Our service isn’t just personal, it’s actually hyper personally
          exquisite
        </h3>
        <p class="hero-block__text">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </p>
        <p class="hero-block__text">
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
      </div>
    </div>
    <brand-benefits></brand-benefits>
    <signup-components></signup-components>
  </div>
</template>

<script>
import BrandBenefits from "../main/components/Brand-benefits.vue";
import SignupComponents from "../main/components/Signup-components.vue";
export default {
  components: { BrandBenefits, SignupComponents },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/about.scss";
</style>
