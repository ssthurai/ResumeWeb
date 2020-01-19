import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css"; // Import css file
import animate from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animate)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
