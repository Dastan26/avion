<template>
  <div class="details">
    <div class="container">
      <div class="details-wrapper">
        <img src="@/assets/images/chairD.png" alt="chair" />
        <div class="product-info">
          <h1 class="product-info__title"></h1>
          <h2 class="product-info__price">£</h2>
          <div class="produuct-description">
            <h4 class="product-info__description-title"></h4>
            <p class="product-info__description-title"></p>
          </div>
          <div class="product-characteristics">
            <h4 class="product-info__dimensions"></h4>
            <span class="product-info__values"></span>
            <span class="product-info__values"></span>
            <span class="product-info__values"></span>
          </div>
          <div class="product-quantity">
            <h5 class="product-quantity__title"></h5>
            <p class="product-quantity__val"></p>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
      <div class="products-list">
        <h3>You might also like</h3>
        <products-components></products-components>
      </div>
      <brand-benefits></brand-benefits>
    </div>
  </div>
</template>

<script>
import BrandBenefits from "./Brand-benefits.vue";
import ProductsComponents from "./Products-components.vue";
export default {
  components: { ProductsComponents, BrandBenefits },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/details.scss";
</style>
