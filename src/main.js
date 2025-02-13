import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);

Vue.config.productionTip = false;

const linkActiveClass = "md-active-item";

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
