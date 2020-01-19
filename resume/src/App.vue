<template>
  <div id="app">
    <transition>
      <div
        class="homeCardBackgroundImage"
        v-bind:class="{ homeCardFullHeight: isVisited, homeCard: !isVisited }"
        v-bind:style="{
          backgroundImage: 'url(' + require('@/assets/images/bg-card.png') + ')'
        }"
      >
        <div class="home-nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <br />
        <br />
        <button
          class="ml-3"
          v-on:click="scrollActivated = !scrollActivated"
          type="button"
        >
          Test scrollable
        </button>
        <button class="ml-3" v-on:click="isVisited = !isVisited" type="button">
          Test Height
        </button>
        <button
          class="ml-3"
          v-on:click="isFaded = !isFaded"
          type="button"
        >
          Test Fade
        </button>
        <button
          class="ml-3"
          v-on:click="isBounced = !isBounced"
          type="button"
        >
          Test Bounce
        </button>
        <button
          class="ml-3"
          v-on:click="isRolled = !isRolled"
          type="button"
        >
          Test Rolling
        </button>
        <button
          class="ml-3"
          v-on:click="isAnimatedCss = !isAnimatedCss"
          type="button"
        >
          Test Animate CSS
        </button>
      </div>
    </transition>

    <transition name="fade">
      <h1 v-if="isFaded">Fading</h1>
    </transition>

    <transition name="bounce">
      <h1 class="text-center" v-if="isBounced">Bouncing</h1>
    </transition>

    <transition name="roll">
      <h1 class="test" v-if="isRolled">Rolling</h1>
    </transition>

    <transition enter-active-class="animated flipInY"
                leave-active-class="animated zoomOutRight">
      <h1 class="test" v-if="isAnimatedCss">Animation</h1>
    </transition>

    <div>
      <transition mode="out-in"
                  enter-active-class="animated fadeIn delay-1s"
                  leave-active-class="animated zoomOutRight delay-1s">
      <router-view />
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      isVisited: false,
      scrollActivated: false,
      isFaded: false,
      isBounced: false,
      isRolled: false,
      isAnimatedCss: false
    };
  },
  watch: {
    scrollActivated: function() {
        document.body.className = this.scrollActivated
        ? "scrollable"
        : "not-scrollable";
    }
  },
  beforeCreate: function() {
    document.body.className = "not-scrollable";
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
  overflow: hidden;
  margin: 0px;
}

body.scrollable {
  margin: 0px;
}

.homeCardBackgroundImage {
  overflow-y: hidden;
  overflow-x: hidden;
  background-size: cover;
  /*background-size: contain;*/
  background-repeat: no-repeat;
  background-position: right;
}

.homeCardFullHeight {
  height: 100vh;
  transition: height 0.7s ease-in-out;
  width: 100vw;
}

.homeCard {
  height: 45vh;
  transition: height 0.7s ease-in-out;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.test {
    transform-origin: 10% 10%;
}

.delay-1s {
  animation-delay: 0.1s;
}

.roll-enter-active {
  animation: rolling 2.5s;
}

.roll-leave-active {
    animation: rolling 2.5s reverse;
}

@keyframes rolling {
  0% {
    transform: scale(0) rotateZ(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1) rotateZ(360deg);
  }
}

</style>
