<template>
  <div class="container-fluid p-0 m-0">
    <div class="row justify-content-center text-left ">
      <div class="col-12 mt-4 mb-4 ml-1">
        <p class="section-title">Portfolio</p>
        <div class="mt-4 ml-1 mr-1">
          <p>
            Here are some of my private projects. Most of my projects belong to
            the companies I once served. Those projects will not be shown here.
            Not all my acquired skills are going to show here (e.g. ASP.NET).
          </p>
          <ul class="list-group list-group-flush mt-2">
            <li class="list-group-item">
              <i class="far fa-hand-point-right mr-3"></i>
              <a href="#first-django-project">Company Website (Demo)</a>
            </li>
            <li class="list-group-item">
              <i class="far fa-hand-point-right mr-3"></i>
              <a href="#deep-learning"
                >Deep Learning Notes and Implementation</a
              >
            </li>
            <li class="list-group-item">
              <i class="far fa-hand-point-right mr-3"></i>
              <a href="#vue-django">Vue + Django</a>
            </li>
            <li class="list-group-item">
              <i class="far fa-hand-point-right mr-3"></i>
              <a href="#https://github.com/NoTiger/ResumeWeb"
                >This Resume Web</a
              >
            </li>
            <li class="list-group-item">
              <i class="far fa-hand-point-right mr-3"></i>
              <a href="#learning">My Next Step</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- First Django Project -->
    <div id="first-django-project">
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <p class="section-title">My First Django Project</p>
        </div>
      </div>
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <p class="ml-2"><strong>Description:</strong></p>
          <p class="ml-4 mr-1">
            This is my very first django project. Tried to learn and implement
            different features of django. I understood how poerful this
            framework is, yet learnt the limitation of django. Django is not a
            frontend framework. I spent so much time trying to implement some
            features that could have been with JS easily. Knowing the limitation
            of Django, I started to learn Javascript and later Vue JS.
            <a href="https://github.com/NoTiger/Company">Source Code</a>.
          </p>
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-12 mt-2 ">
          <carousel v-bind:perPage="1" v-bind:centerMode="true">
            <slide
              v-for="(url, index) in firstDjangoProjectImageUrls"
              v-bind:key="index"
            >
              <img class="img-fluid img-max" v-bind:src="url" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- DeepLearning -->
    <div id="deep-learning">
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <p class="section-title">Deep Learning Notes and implementation</p>
        </div>
      </div>
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <p class="ml-2"><strong>Description:</strong></p>
          <p class="ml-4 mr-1">
            Deep Learning is such a hot topic one cannot avoid. I am more
            curious on its theory and implementation. I took the fastai online
            course as starter. However, I am not a fan of its high level API
            built on top of Pytorch. I switched to learning Pytorch instead.
            Yet, fastai course explain key concepts in great details. Loss
            functions, weight decay, optimizers and data augmentation are all
            covered in the course. I did some prototypes of image restoration
            for my company. Lacking of experience and human resources, I was not
            able to push the project further. Now I focus mainly on practical
            web app developement.
            <a href="https://github.com/NoTiger/DeepLearningStudy"
              >Source Codes</a
            >.
          </p>
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-12 mt-2 ">
          <carousel v-bind:perPage="1" v-bind:centerMode="true">
            <slide
              v-for="(url, index) in deepLearningProjectImageUrls"
              v-bind:key="index"
            >
              <img class="img-fluid img-max" v-bind:src="url" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- Vue + Django -->
    <div id="vue-django">
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <p class="section-title">Vue + Django</p>
        </div>
      </div>
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <p class="ml-2"><strong>Description:</strong></p>
          <div class="ml-4 mr-1">
            <p>
              I hosted the website using
              <a href="https://www.pythonanywhere.com/">pythonanywhere</a>. Here
              is the link to my website ->
              <a href="http://notiger.pythonanywhere.com/">link.</a>
              I set up a visitor account. ID: Visitor Password: thisisapassword
            </p>
            <p>
              This is the one project that I learnt so much. I leart how to use
              the djangorestframework. The RESTFUL API is so useful and clean.
              It connected the Vue JS frontend to the Database. Vue JS provide
              clean architecture for frontend development. Ever since this
              project, I start every web app using the same combination.
              <a href="https://github.com/NoTiger/QuestionTime">Source Codes</a>
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-12 mt-2 ">
          <carousel v-bind:perPage="1" v-bind:centerMode="true">
            <slide
              v-for="(url, index) in vueDjangoProjectImageUrls"
              v-bind:key="index"
            >
              <img class="img-fluid img-max" v-bind:src="url" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- Learning -->
    <div id="learning">
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <p class="section-title">Next Steps</p>
        </div>
      </div>
      <div class="row justify-content-center text-left">
        <div class="col-12 mt-4 ml-1">
          <div class="ml-4 mr-1">
            <p>
              I will continue my learning journey. On writing clean code, I am a
              fan of Robert C Martin. I plan to finish all his books. I want to
              learn algorithm and design pattern. Beside all these, I want to
              get my hands on mobile app development or learn one more frontend
              framework. This will increase my range of programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  components: {},
  data: function() {
    return {
      firstDjangoProjectImageUrls: [
        require("@/assets/images/firstDjangoProject/pic1.png"),
        require("@/assets/images/firstDjangoProject/pic2.png"),
        require("@/assets/images/firstDjangoProject/pic3.png"),
        require("@/assets/images/firstDjangoProject/pic4.png")
      ],
      deepLearningProjectImageUrls: [
        require("@/assets/images/deepLearningProject/pic1.png"),
        require("@/assets/images/deepLearningProject/pic2.png"),
        require("@/assets/images/deepLearningProject/pic3.png"),
        require("@/assets/images/deepLearningProject/pic4.png")
      ],
      vueDjangoProjectImageUrls: [
        require("@/assets/images/vueDjangoProject/pic1.png"),
        require("@/assets/images/vueDjangoProject/pic2.png"),
        require("@/assets/images/vueDjangoProject/pic3.png")
      ]
    };
  }
};
</script>

<style scoped>
.section-title {
  margin-left: 1rem;
  color: white;
  display: inline-block;
  padding: 0.3rem;
  background-color: black;
  font-size: 1.4rem;
  font-weight: bold;
}

.list-group-item {
  background-color: transparent;
}

.img-max {
  max-height: 15rem;
  height: 100%;
}
</style>
