<template>
  <div id="app">
    <div class="container-fluid p-0 mr-0 ml-0 mb-1 mt-1">
      <div class="row justify-content-center text-center mx-auto">
        <div class="main-container-style col-lg-10 col-sm-12 col-md-12 m-0 p-0">
          <ImageNavBar v-on:webVisited="showRouterView" />
          <transition name="switchRouterView" mode="out-in">
            <router-view v-if="isRouterView" />
          </transition>
          <BottumNote v-if="isRouterView" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageNavBar from "@/components/ImageNavBar.vue";
import BottumNote from "@/components/BottumNote.vue";

export default {
  name: "App",
  components: {
    ImageNavBar,
    BottumNote
  },
  data: function() {
    return {
      isRouterView: false,
      scrollActivated: false
    };
  },
  methods: {
    showRouterView: function() {
      this.isRouterView = true;
      this.scrollActivated = true;
    }
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
  }
};
</script>

<style>
*,
html {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  min-width: 100vw;
  background-color: #fbf1ea;
}

.main-container-style {
  border: 1px solid black;
}

body.not-scrollable {
  overflow: hidden;
}

body.scrollable {
  overflow-y: auto;
  overflow-x: hidden;
}

.switchRouterView-enter-active {
  animation: swing-in-left-fwd 1s ease-in-out both;
}

.switchRouterView-leave-active {
  animation: swing-out-right-bck 1s ease-in-out both;
  /*cubic-bezier(0.600, -0.280, 0.735, 0.045)*/
}

@keyframes swing-out-right-bck {
  0% {
    transform: rotateY(0);
    transform-origin: right;
    opacity: 1;
  }
  100% {
    transform: rotateY(-100deg);
    transform-origin: right;
    opacity: 0;
  }
}

@keyframes swing-in-left-fwd {
  0% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
}
</style>

<!--
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
-->
