<template>
  <section class="signUp">
    <div class="signUp-wrapper">
      <h3 class="signUp-title">Join the club and get the benefits</h3>
      <p class="signUp-text">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <ul class="signUp-list">
        <li class="signUp-list__item">
          <img src="../../../assets/icons/CheckmarkFilled.svg" alt="check" />
          Exclusive offers
        </li>
        <li class="signUp-list__item">
          <img src="../../../assets/icons/CheckmarkFilled.svg" alt="check" />
          Free events
        </li>
        <li class="signUp-list__item">
          <img src="../../../assets/icons/CheckmarkFilled.svg" alt="check" />
          Large discounts
        </li>
      </ul>
      <div class="input-group">
        <label for="email"></label>
        <input
          type="mailto"
          id="email"
          class="signUp-input"
          placeholder="your@email.com"
        />
        <button class="input-btn">Sign up</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Signup-components",
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/signup.scss";
</style>
