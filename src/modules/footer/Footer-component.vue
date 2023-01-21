<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <nav class="nav">
          <ul class="nav-menu" v-for="block in blocks" :key="block.block_name">
            <li class="nav-menu__item">
              {{ block.block_name }}
            </li>
            <li v-for="item in block.items" :key="(item.id, item.link)">
              <router-link :to="{ path: item.link }">{{
                item.title
              }}</router-link>
            </li>
          </ul>
          <div class="input-group">
            <label for="email">Join our mailing list</label>
            <div class="input-group__action">
              <input
                type="mailto"
                id="email"
                class="signUp-input"
                placeholder="your@email.com"
              />
              <button class="input-btn">Sign up</button>
            </div>
          </div>
        </nav>
        <div class="footer-underline"></div>
        <div class="social-links">
          <p class="social-links__copyright">Copyright 2022 Avion LTD</p>
          <div class="social-links__block">
            <router-link to="#">
              <img src="../../assets/icons/LogoLinkedin.svg" alt="" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/icons/LogoFacebook.svg" alt="" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/icons/LogoInstagram.svg" alt="" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/icons/LogoSkype.svg" alt="" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/icons/LogoTwitter.svg" alt="" />
            </router-link>
            <router-link to="#">
              <img src="../../assets/icons/LogoPinterest.svg" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {
      blocks: [
        {
          block_name: "Menu",
          items: [
            {
              title: "New arrivals",
              link: "#!",
            },
            {
              title: "Best sellers",
              link: "#!",
            },
            {
              title: "Recently viewed",
              link: "#!",
            },
            {
              title: "Popular this week",
              link: "#!",
            },
            {
              title: "All products",
              link: "#!",
            },
          ],
        },
        {
          block_name: "Categories",
          items: [
            {
              title: "Crockery",
              link: "#!",
            },
            {
              title: "Furniture",
              link: "#!",
            },
            {
              title: "Homeware",
              link: "#!",
            },
            {
              title: "Plant pots",
              link: "#!",
            },
            {
              title: "Chairs",
              link: "#!",
            },
            {
              title: "Crockery",
              link: "#!",
            },
          ],
        },
        {
          block_name: "Our company",
          items: [
            {
              title: "About us",
              link: "#!",
            },
            {
              title: "Vacancies",
              link: "#!",
            },
            {
              title: "Contact us",
              link: "#!",
            },
            {
              title: "Privacy",
              link: "#!",
            },
            {
              title: "Returns policy",
              link: "#!",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/footer.scss";
</style>
