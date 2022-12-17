<template>
  <component :is="iconName"></component>
</template>

<script>
const components = {
  Avion: () => import("./Avion.vue" /* webpackChunkName: "icons/Avion" */),
  Checkmark: () =>
    import("./CheckMark.vue" /* webpackChunkName: "icons/Checkmark" */),
  CheckmarkOutline: () =>
    import(
      "./CheckmarkOutline.vue" /* webpackChunkName: "icons/CheckmarkOutline" */
    ),
  Delivery: () =>
    import("./Delivery.vue" /* webpackChunkName: "icons/Delivery" */),
  LogoFacebook: () =>
    import("./LogoFacebook.vue" /* webpackChunkName: "icons/LogoFacebook" */),
  LogoInstagram: () =>
    import("./LogoInstagram.vue" /* webpackChunkName: "icons/LogoInstagram" */),
  LogoLinkedin: () =>
    import("./LogoLinkedin.vue" /* webpackChunkName: "icons/LogoLinkedin" */),
  LogoPinterest: () =>
    import("./LogoPinterest.vue" /* webpackChunkName: "icons/LogoPinterest" */),
  LogoSkype: () =>
    import("./LogoSkype.vue" /* webpackChunkName: "icons/LogoSkype" */),
  LogoTwitter: () =>
    import("./LogoTwitter.vue" /* webpackChunkName: "icons/LogoTwitter" */),
  Menu: () => import("./Menu.vue" /* webpackChunkName: "icons/Menu" */),
  Purchase: () =>
    import("./Purchase.vue" /* webpackChunkName: "icons/Purchase" */),
  Search: () => import("./Search.vue" /* webpackChunkName: "icons/Search" */),
  ShoppingCart: () =>
    import("./ShoppingCart.vue" /* webpackChunkName: "icons/ShoppingCart" */),
  Sprout: () => import("./Sprout.vue" /* webpackChunkName: "icons/Sprout" */),
  UserAvatar: () =>
    import("./UserAvatar.vue" /* webpackChunkName: "icons/UserAvatar" */),
};
export default {
  components,
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
