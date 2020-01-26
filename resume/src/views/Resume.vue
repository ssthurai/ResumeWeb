<template>
  <div class="container">
    <!-- headline -->
    <div class="headline">
      <div
        class="row justify-content-center align-items-center text-center mt-4 mb-2 p-0"
      >
        <div class="col-4">
          <div class="resume-round-image">
            <img
              alt="resume_profile_pic"
              src="../assets/images/Resume_profile_pic.jpg"
            />
          </div>
        </div>
        <div class="col-8">
          <div class="cool_title">
            <h5 class="fisrt-line">
              Programming is what I love,
            </h5>
            <h5 class="second-line">
              not just a work skill.
            </h5>
          </div>
        </div>
      </div>
    </div>

    <!-- quote and download cv link -->
    <div class="quotation-and-download">
      <div class="row justify-content-center align-items-center text-left mx-2">
        <div class="col-12 mt-2 mb-2">
          <p>
            {{ decodeHtml(leftQuotation) }} Programming can be as simple as
            putting compenents together and make sure they can run. I consider
            programming as a lifelong pursue of craftmenship. On the path of
            becoming an expert, Enthusiasm and the desire of becoming an expert
            is all you need. {{ decodeHtml(rightQuotation) }}
          </p>
          <button class="btn-color-dark float-right">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="education mt-4">
      <div class="row justify-content-center align-items-center text-left mx-2">
        <div class="col-12 mt-2 mb-2">
          <div class="section-title">Education</div>
          <hr />
        </div>
      </div>
      <div
        class="row justify-content-center align-items-center
      text-left carousel-sectionmx-2"
      >
        <div class="col-12">
          <carousel
            v-bind:perPage="1"
            v-bind:navigationEnabled="true"
            v-bind:paginationEnabled="false"
          >
            <slide>
              <div class="display-card">
                <h5>2000 - 2003</h5>
                <h6>Ren-Ai Elementary School</h6>
                <p class="pt-1">Studied 3 years in Taipei, Taiwan.</p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h5>2003 - 2006</h5>
                <h6>S.K.H. Wei Lun Primary School</h6>
                <p class="pt-1">
                  Started a new life in Hong Kong. I went through a lot of
                  changes. Not to mention it was the time when SARS striked Hong
                  Kong. It turned out great and I still hang out with my
                  classmates back then.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h5>2006 - 2012</h5>
                <h6>S.K.H. Tang Shiu Kin Secondary School</h6>
                <p class="pt-1">
                  I used to hate English. Yet I ended up in here. A English
                  based school. Now, I am so glad that I studied in this school.
                  I felt very comfortable reading and speaking in English. It
                  cahnged my whole life.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h5>2012 - 2017</h5>
                <h6>
                  The Hong Kong Polytechnic University - Civil Engineering
                  Degree
                </h6>
                <p class="pt-1">
                  I got almost kicked out from University. Yet I somehow stood
                  up again. I studied real hard and conquer all challenging
                  Engineering courses. Now I never complain about study. It is
                  always hard and exhuasting. It costed me almost a degree to
                  learnt it.
                </p>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="experience mt-4">
      <div class="row justify-content-center align-items-center text-left mx-2">
        <div class="col-12 mt-2 mb-2">
          <div class="section-title">Experience</div>
          <hr />
        </div>
      </div>
      <div
        class="row justify-content-center align-items-center
        text-left mx-2"
      >
        <div class="col-12">
          <carousel
            v-bind:perPage="1"
            v-bind:navigationEnabled="true"
            v-bind:paginationEnabled="false"
          >
            <slide>
              <div class="display-card">
                <h5>June, 2017 ~ May, 2018</h5>
                <h6>Alternative civilian service</h6>
                <p class="pt-1">
                  Unable to fulfill military service due to my physical
                  condition. Complete my civil duty by contributing for the
                  police deparment in Taiwan. It has been a tough year. Yet, I
                  spent my weekend attending private academy of programming.
                  Fell in love with code instantly.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h5>June, 2018 ~ September, 2018</h5>
                <h6>Research Assitant in Tamkang University</h6>
                <p class="pt-1">
                  It is rather difficult trying to enter the software industry
                  without a relevent degree. I got a chance in Tamkung
                  University. I took part in a VR project in which I worked on a
                  VR program with the use of Unity (C#).
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h5>October, 2018 ~ Now</h5>
                <h6>Software Developer in Software Island Inc.</h6>
                <p class="pt-1">
                  With my previsous experience, I officially entered the
                  software industry. In Software Island, I not only maintained
                  pre-existing program but had the chance to develope new
                  application. I learnt to write bacnkend (ASP.NET & SQL),
                  frontend (Extended JS) and Desktop(.Net WinForm) Applications.
                  It has been a fruitful journey
                </p>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div></div>

    <!-- Certificates -->
    <div></div>

    <!-- Hobbies -->
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  components: {},
  data: function() {
    return {
      leftQuotation: "&#8220",
      rightQuotation: "&#8221"
    };
  },
  methods: {
    decodeHtml: function(htmlString) {
      var textArea = document.createElement("textarea");
      textArea.innerHTML = htmlString;
      return textArea.value;
    }
  }
};
</script>

<style scoped>
.resume-round-image img {
  float: left;
  margin-left: 1rem;
  height: auto;
  width: auto;
  max-width: 15rem;
  max-height: 15rem;
  border-width: thin;
  border-radius: 50%;
}

.cool_title .fisrt-line {
  width: 30rem;
  color: black;
  font-size: 2rem;
  font-weight: bold;
}

.cool_title .second-line {
  display: inline-block;
  width: 23rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: black;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.btn-color-dark {
  color: white;
  background-color: #808080;
  padding: 0.5rem;
  border-style: none;
  border-radius: 1rem;
}

.btn-color-dark:hover {
  color: black;
  transition: color 0.7s ease-in-out;
}

.carousel-section {
  max-height: 10rem;
  overflow-y: hidden;
  overflow-x: hidden;
}

.section-title {
  color: white;
  display: inline-block;
  padding: 0.3rem;
  background-color: black;
  font-size: 1.4rem;
  font-weight: bold;
}

.display-card {
  margin-left: 2rem;
  padding: 1rem 0rem 1rem 0rem;
}

.display-card h5 {
  color: #e1e1e1;
}

.display-card h6 {
  color: white;
}
</style>
