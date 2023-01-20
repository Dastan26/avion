<template>
  <header class="header">
    <div class="header-wrapper">
      <nav class="nav">
        <ul class="nav-menu">
          <li class="nav-menu__item">
            <router-link to="#"
              ><img src="../../assets/icons/Search.svg" alt="search icon"
            /></router-link>
          </li>
          <li class="nav-menu__item">
            <router-link to="/"
              ><img src="../../assets/icons/Avion.svg" alt="logo"
            /></router-link>
          </li>
          <ul class="header-items">
            <li class="header-item">
              <router-link to="/products">Products</router-link>
              <router-link to="admin">Admin page</router-link>
              <router-link to="/about">About us</router-link>
            </li>
          </ul>
          <div class="user-block">
            <li class="nav-menu__item">
              <router-link to="/cart"
                ><span>{{ cartCounter }}</span>
                <img
                  src="../../assets/icons/ShoppingCart.svg"
                  alt="cart icon"
                />
              </router-link>
            </li>
            <li class="nav-menu__item">
              <router-link to="#"
                ><img src="../../assets/icons/UserAvatar.svg" alt="user icon"
              /></router-link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      products: [],
    };
  },

  computed: {
    cartCounter() {
      return this.$store.getters.getCart.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/header.scss";
</style>
