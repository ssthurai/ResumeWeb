import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css"; // Import css file
import "@fortawesome/fontawesome-free/css/all.css";
import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
