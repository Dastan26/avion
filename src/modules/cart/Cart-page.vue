<template>
  <div class="cart">
    <div class="container">
      <div class="cart-wrapper">
        <div class="titles">
          <h2 class="title-product">Product</h2>
          <h2 class="title-quantity">Quantity</h2>
          <h2 class="title-total">Total</h2>
        </div>
        <div class="line"></div>
        <h4 class="mobile-title">Your shopping cart</h4>
        <div class="product" v-for="(product, index) in cart" :key="index">
          <div class="product-info">
            <div class="product-info__group">
              <img :src="product.img" alt="" />
              <div class="product-info__details">
                <h3 class="product-title">{{ product.title }}</h3>
                <div class="product-description">{{ product.description }}</div>
                <div class="product-price">£{{ product.price }}</div>
              </div>
            </div>
            <div class="product-quantity__input">
              <button @click="decrement(product)" class="input-btn">-</button>
              <input type="number" v-model="product.quantity" />
              <button @click="increment(product)" class="input-btn">+</button>
            </div>
            <span class="total-value"
              >£{{ product.price * product.quantity }}</span
            >
          </div>
        </div>
        <div class="line"></div>
        <div class="summary">
          <p class="taxes">Taxes and shipping are calculated at checkout</p>
          <div class="subtotal">
            <h4 class="subtotal-title">Subtotal</h4>
            <p>£{{ subtotal }}</p>
          </div>
        </div>
        <div class="cart-btn">
          <button>Go to checkout</button>
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

    subtotal() {
      return this.cart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },

  data() {
    return {
      quantity: 0,
      totalQuantity: 0,
    };
  },

  methods: {
    increment(product) {
      product.quantity++;
      this.updateTotalQuantity();
    },
    decrement(product) {
      if (product.quantity > 0) {
        product.quantity--;
        this.updateTotalQuantity();
      }
    },
    updateTotalQuantity() {
      this.totalQuantity = this.cart.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/cart.scss";
</style>
