<template>
  <div
    class="image-nav-bar image-nav-bar-container"
    v-bind:class="{ navImageFullHeight: !visited, navImage: visited }"
    v-bind:style="{ backgroundImage: `url(${navbarImageURL})` }"
  >
    <div class="image-nav-bar-title">
      <div class="ml-4 mt-5">
        <p class="name-tag">Steven Yeh</p>
        <p class="title-tag">Developer / Dreamer</p>
        <div class="quote" v-if="!visited">
          <p>
            “So if you want to go fast, if you want to get done quickly,
          </p>
          <p>
            if you want your code to be easy to write, make it easy to read.”
          </p>
          <p>
            ― Robert C. Martin
          </p>
        </div>
      </div>
    </div>
    <div class="image-nav-bar-router-link ml-4 mb-3" v-on:click="visitWeb">
      <router-link to="/">
        <RouterLinkButton iconCode="far fa-user" buttonText="About Me" />
      </router-link>
      <router-link to="/resume">
        <RouterLinkButton iconCode="far fa-file-alt" buttonText="Resume" />
      </router-link>
      <router-link to="/portfolio">
        <RouterLinkButton iconCode="far fa-list-alt" buttonText="Portfolio" />
      </router-link>
      <router-link to="/contact">
        <RouterLinkButton iconCode="far fa-envelope" buttonText="Contact" />
      </router-link>
    </div>
  </div>
</template>

<script>
import RouterLinkButton from "@/components/RouterLinkButton.vue";

export default {
  name: "ImageNavBar",
  components: {
    RouterLinkButton
  },
  props: {},
  data: function() {
    return {
      navbarImageURL: require("@/assets/images/bg-card.jpg"),
      visited: false
    };
  },
  methods: {
    visitWeb: function() {
      this.visited = true;
      this.$emit("webVisited");
    }
  }
};
</script>

<style scoped>
.name-tag {
  display: inline-block;
  padding: 2px 5px 2px 5px;
  border-width: 0;
  border-radius: 10px;
  background-color: rgba(135, 136, 140, 0.8);
  font-size: 1.2rem;
  color: white;
}

.title-tag {
  font-size: 1rem;
  max-width: 10em;
  padding: 2px 5px 2px 5px;
  border-width: 0;
  border-radius: 10px;
  background-color: rgba(135, 136, 140, 0.5);
  opacity: 90%;
}

.quote {
  font-size: 1rem;
  margin-top: 3rem;
  margin-right: 1rem;
  opacity: 80%;
}

.image-nav-bar-container {
  position: relative;
  top: 0;
}

.image-nav-bar-router-link {
  padding: 2px 2px 0.5px 2px;
  border-width: 0;
  border-radius: 10px;
  background-color: rgba(135, 136, 140, 0.4);
  position: absolute;
  bottom: 0;
}

.image-nav-bar-title {
  color: white;
  text-align: left;
  position: absolute;
  top: 0;
}

.image-nav-bar {
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40% center;
}

.navImageFullHeight {
  height: 100vh;
  transition: height 0.7s ease-in-out;
  width: auto;
}

.navImage {
  height: 50vh;
  transition: height 0.7s ease-in-out;
  width: auto;
}
</style>
