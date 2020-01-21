import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css"; // Import css file
import "@fortawesome/fontawesome-free/css/all.css";

// will be removed eventually
//import animate from "animate.css";
//Vue.use(animate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
