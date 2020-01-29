<template>
  <div
    class="image-nav-bar image-nav-bar-container"
    v-bind:class="{ navImageFullHeight: !visited, navImage: visited }"
    v-bind:style="{ backgroundImage: `url(${navbarImageURL})` }"
  >
    <div class="image-nav-bar-title">
      <div class="ml-4 mt-4">
        <p class="name-tag">Yeh Hsuan Ting</p>
        <p class="title-tag ml-2">Developer / Dreamer</p>
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
    <div class="image-nav-bar-router-link ml-4 mb-4" v-on:click="visitWeb">
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
  font-size: 1.2rem;
  font-weight: bold;
}

.title-tag {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  max-width: 12rem;
  padding: 2px 6px 2px 6px;
  border-width: 0;
  background-color: black;
  opacity: 0.9;
}

.quote {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-right: 1rem;
  color: #808080;
}

.image-nav-bar-container {
  color: black;
  position: relative;
  top: 0;
}

.image-nav-bar-router-link {
  background-color: rgba(142, 142, 142, 0.65);
  position: absolute;
  bottom: 0;
}

.image-nav-bar-title {
  text-align: left;
  position: absolute;
  top: 0;
}

.image-nav-bar {
  margin: 0 auto;
  padding: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% 15%;
}

.navImageFullHeight {
  height: 100vh;
  transition: height 0.7s ease-in-out;
  width: auto;
}

.navImage {
  height: 65vh;
  transition: height 0.7s ease-in-out;
  width: auto;
}
</style>
