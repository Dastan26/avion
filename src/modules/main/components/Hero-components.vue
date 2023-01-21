<template>
  <section class="hero2">
    <div class="container">
      <div class="hero-wrapper">
        <div class="hero-block">
          <h3 class="hero-block__title">It started with a small idea</h3>
          <p class="hero-block__text">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
          <button class="hero-block__btn">View collection</button>
        </div>
        <img
          src="../../../assets/images/ViewCollection.png"
          alt=""
          class="hero-image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero-components",
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/hero.scss";
</style>
