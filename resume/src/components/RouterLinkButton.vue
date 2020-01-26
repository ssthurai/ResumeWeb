<template>
  <button class="router-button">
    <div class="router-button-inline-block">
      <i v-bind:class="iconCode"></i>
    </div>
    <div class="router-button-inline-block">
      <p>{{ buttonText }}</p>
    </div>
  </button>
</template>

<script>
export default {
  name: "RouterLinkButton",
  props: {
    iconCode: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.router-button {
  background-color: transparent;
  border: none;
  color: black;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.5s ease-in-out;
}

.router-button:hover {
  color: #939393;
}

.router-button-inline-block {
  display: block;
}
</style>
