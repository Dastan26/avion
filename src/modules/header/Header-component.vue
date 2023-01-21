<template>
  <header class="header">
    <div class="header-wrapper">
      <nav class="nav">
        <ul class="nav-menu">
          <div
            class="burger"
            @click="isOpen = !isOpen"
            :class="{ open: isOpen }"
          >
            <div class="burger-line burger-line_first"></div>
            <div class="burger-line burger-line_second"></div>
            <div class="burger-line burger-line_third"></div>
          </div>
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
          <ul
            class="header-items"
            id="items"
            @click="isOpen = false"
            :class="{ open: isOpen }"
          >
            <li class="header-item">
              <router-link to="/products">Products</router-link>
              <router-link to="admin">Admin page</router-link>
              <router-link to="/about">About us</router-link>
            </li>
          </ul>
          <div class="user-block" id="block">
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
      isOpen: false,
    };
  },

  // methods: {
  //   showHideMenu() {
  //     if (this.$refs.burger && this.$refs.navMenu) {
  //       if (this.$refs.burger.classList.contains("open")) {
  //         this.$refs.burger.classList.remove("open");
  //         this.$refs.navMenu.classList.remove("open");
  //       } else {
  //         this.$refs.burger.classList.add("open");
  //         this.$refs.navMenu.classList.add("open");
  //       }
  //     }
  //   },

  //   hideMenuForLinks() {
  //     this.$refs.burger.classList.remove("open");
  //     this.$refs.navMenu.clasList.remove("open");
  //   },
  // },

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
