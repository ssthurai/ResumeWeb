import Vue from "vue";
import VueRouter from "vue-router";

import AboutMe from "../views/AboutMe.vue";
import Resume from "../views/Resume.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "about-me",
    component: AboutMe
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
