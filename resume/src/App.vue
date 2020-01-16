<template>
  <div id="app">
      <div class="home-card">
        <div class="home-nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <br/>
        <br/>
        <button v-on:click="scrollActivated = !scrollActivated" type="button">Test</button>
      </div>
      <h1>Hello World</h1>


     <div v-if="isVisited">
     <router-view />
     </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function(){
      return {
          isVisited: false,
          scrollActivated: false
      }
  },
  watch: {
    scrollActivated: function () {
      alert('value changed');
      document.body.className = this.scrollActivated ? 'scrollable' : 'not-scrollable';
    }
  },
  beforeCreate: function() {
    document.body.className = 'not-scrollable';
  },
  methods: {
    testMethod: function() {
        this.scrollActivated = !this.scrollActivated;
    }
  }
};
</script>

<style>
body.not-scrollable {
    overflow:hidden;
    margin: 0px;
}

body.scrollable {
    margin: 0px;
}

.home-card {
    background-color: blue;
    height: 100vh;
    width: 100vw;
}

.home-nav {
  text-align: center;
  padding: 30px;
}

.home-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.home-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
