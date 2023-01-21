<template>
  <div class="details">
    <div class="container">
      <div class="details-wrapper">
        <img :src="product.img" alt="chair" />
        <div class="product-info">
          <h1 class="product-info__title">{{ product.title }}</h1>
          <h2 class="product-info__price">£{{ product.price }}</h2>
          <div class="line"></div>
          <div class="product-info__description">
            <h4 class="product-info__description-title">Product description</h4>
            <p class="product-info__description-text">
              {{ product.description }}
            </p>
          </div>
          <div class="product-characteristics">
            <p class="product-info__dimensions">Dimensions</p>
            <table>
              <tr>
                <th>Height</th>
                <th>Width</th>
                <th>Depth</th>
              </tr>
              <tr>
                <td class="product-info__values">{{ product.height }}</td>
                <td class="product-info__values">{{ product.width }}</td>
                <td class="product-info__values">{{ product.depth }}</td>
              </tr>
            </table>
          </div>
          <div class="product-quantity">
            <p class="product-quantity__title">Quantity</p>
            <div class="product-quantity__input">
              <button @click="decrement" class="input-btn">-</button>
              <input type="number" v-model="quantity" />
              <button @click="increment" class="input-btn">+</button>
            </div>
          </div>
          <button @click="addToCart">Add to cart</button>
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
  data() {
    return {
      quantity: 0,
      product: "",
      productId: this.$route.params.id,
    };
  },

  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
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

    addToCart() {
      this.cart.push(this.product);
      this.$store.commit("SET_CART", this.cart);
    },
  },

  created() {
    fetch(`http://localhost:3000/products/${this.productId}`)
      .then((res) => res.json())
      .then((json) => (this.product = json));
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/details.scss";
</style>
