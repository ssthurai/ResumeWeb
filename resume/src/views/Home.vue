<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="row justify-content-center align-items-center">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
