<template>
  <div id="app">
      <div class="home-card">
        <div class="home-nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <div v-if="isVisited">
            <router-view />
        </div>
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
      document.body.className = this.scrollActivated ? 'not-scrollable' : 'scrollable';
    }
  },
  beforeCreate: function() {
    alert('test');
    document.body.className = 'not-scrollable';
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
    position: sticky;
    background-color: red;
    height: 100vh;
    width: 100vw;
    overflow:hidden;
}

.home-nav {
  text-align: center;
  background-color: blue;
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
