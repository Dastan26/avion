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
          <div class="user-block">
            <li class="nav-menu__item">
              <router-link to="/cart"
                ><img src="../../assets/icons/ShoppingCart.svg" alt="cart icon"
              /></router-link>
            </li>
            <li class="nav-menu__item">
              <router-link to="#"
                ><img src="../../assets/icons/UserAvatar.svg" alt="user icon"
              /></router-link>
            </li>
          </div>
        </ul>
      </nav>
      <div class="header-line"></div>
      <ul class="header-items">
        <li class="header-item">
          <router-link to="/products">Products</router-link>
          <router-link to="admin">Admin page</router-link>
        </li>
      </ul>
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/header.scss";
</style>
