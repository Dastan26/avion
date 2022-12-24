<template>
  <div id="app">
    <link
      href="https://api.fontshare.com/v2/css?f[]=satoshi@400&f[]=clash-display@400&display=swap"
      rel="stylesheet"
    />
    <header-component></header-component>
    <main-page></main-page>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component";
import MainPage from "./modules/main/Main-page";
import FooterComponent from "./modules/footer/Footer-component";

export default {
  components: {
    HeaderComponent,
    MainPage,
    FooterComponent,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
@import "../src/assets/scss/global.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
