<template>
  <div class="cart">
    <div class="container">
      <div class="cart-wrapper">
        <div class="titles">
          <h2 class="title-product">Product</h2>
          <h2 class="title-quantity">Quantity</h2>
          <h2 class="title-total">Total</h2>
        </div>
        <div class="product" v-for="(product, index) in cart" :key="index">
          <div class="product-info">
            <img :src="product.image" alt="" />
            <div class="product-info__details">
              <h3 class="product-title">{{ product.title }}</h3>
              <div class="product-description">{{ product.description }}</div>
              <div class="product-price">{{ product.price }}</div>
            </div>
            <div class="product-quantity__input">
              <button @click="decrement" class="input-btn">-</button>
              <input type="number" v-model="quantity" />
              <button @click="increment" class="input-btn">+</button>
            </div>
            <span class="total-value"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },

  data() {
    return {
      quantity: 0,
    };
  },

  methods: {
    increment() {
      this.quantity += 1;
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/cart.scss";
</style>
