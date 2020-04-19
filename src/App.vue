<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
    <md-bottom-bar md-type="shift" md-sync-route>
      <md-bottom-bar-item to="/" id="bottom-bar-item-home" md-label="Home" md-icon="home"></md-bottom-bar-item>
      <md-bottom-bar-item to="/about" id="bottom-bar-item-pages" md-label="Pages" md-icon="pages"></md-bottom-bar-item>
      <md-bottom-bar-item id="bottom-bar-item-favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body {
  font-family: "Montserrat", sans-serif !important;
  min-height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(blue, A200),
    // The primary color of your application
      accent: md-get-palette-color(red, A200),
    // The accent or secondary color
      theme: dark // This can be dark or light
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
