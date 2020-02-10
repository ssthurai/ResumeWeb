<template>
  <div class="container-fluid p-0 m-0">
    <!-- headline -->
    <div class="headline">
      <div
        class="row justify-content-center align-items-center text-center mt-4 mb-2 p-0"
      >
        <div class="col-4 p-0 ml-0">
          <div class="resume-round-image">
            <img
              alt="resume_profile_pic"
              src="../assets/images/Resume_profile_pic.jpg"
            />
          </div>
        </div>
        <div class="col-8 p-0 m-0">
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
      <div class="row justify-content-center align-items-center text-left">
        <div class="col-12 mt-2 mb-5">
          <p>
            {{ decodeHtml(leftQuotation) }} Programming can be as simple as
            putting compenents together and make sure they can run. I consider
            programming as a lifelong pursue of craftmenship. On the path of
            becoming an expert, Enthusiasm and the desire of becoming an expert
            is all you need. {{ decodeHtml(rightQuotation) }}
          </p>
          <!--
          <button class="btn-color-dark float-right">
            DOWNLOAD CV
          </button>
          -->
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="education mt-4">
      <div class="row justify-content-center align-items-center text-left ">
        <div class="col-12 mt-2 mb-2">
          <div class="section-title">Education</div>
          <hr />
        </div>
      </div>
      <div class="row justify-content-center align-items-center text-left">
        <div class="col-12">
          <carousel v-bind:perPage="1">
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
                <h5>2000 - 2003</h5>
                <h6>Ren-Ai Elementary School</h6>
                <p class="pt-1">
                  Studied 3 years in Taipei, Taiwan. Had a lot of good memories
                  in Taiwan.
                </p>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="experience mt-4">
      <div class="row justify-content-center align-items-center text-left ">
        <div class="col-12 mt-2 mb-2">
          <div class="section-title">Experience</div>
          <hr />
        </div>
      </div>
      <div
        class="row justify-content-center align-items-center
        text-left "
      >
        <div class="col-12">
          <carousel v-bind:perPage="1">
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
            <slide>
              <div class="display-card">
                <h5>June, 2018 ~ September, 2018</h5>
                <h6>
                  Research Assitant in Taiwan-Malaysia Digital Technology
                  International Centre (DiTIC)
                </h6>
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
          </carousel>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="skills mt-4">
      <div class="row justify-content-center align-items-center text-left">
        <div class="col-12 mt-2 mb-2">
          <div class="section-title">Skills</div>
          <hr />
        </div>
      </div>
      <div
        class="row justify-content-center align-items-center
        text-left ml-3 mr-3"
      >
        <div class="col-12">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="fas fa-brain mr-3"></i>
              Decision Making
            </li>
            <li class="list-group-item">
              <i class="fas fa-crosshairs mr-3"></i>
              Critical Thinking
            </li>
            <li class="list-group-item">
              <i class="fas fa-search mr-3"></i>
              Problem-Solving
            </li>
            <li class="list-group-item">
              <i class="fas fa-handshake mr-3"></i>
              Teamwork
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Programming Skills -->
    <div class="programming-skills mt-4">
      <div class="row justify-content-center align-items-center text-left">
        <div class="col-12 mt-2 mb-2">
          <div class="section-title">Programming Skills</div>
          <hr />
        </div>
      </div>
      <div
        class="row justify-content-center align-items-center
        text-left"
      >
        <div class="col-12">
          <carousel v-bind:perPage="1">
            <slide>
              <div class="display-card">
                <h6>ASP.NET</h6>
                <p class="pt-1">
                  Before using ASP.NET, I do not really know there are backend
                  and frontend in web application development. I was reqested to
                  maintained and extended a commercial applications. It was
                  written in ASP.NET MVC Architecture. Besied this framework, I
                  also got my hands on SQL Language.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h6>Ext. JS</h6>
                <p class="pt-1">
                  Company did not have its frontend developement team. Hence,
                  developers need to write both the backend and frontend all by
                  themselves. Jumping from C# to Javascript can be very
                  confusing. Extended Javascript (Ext. JS) is a JS framework
                  used mostly in commercial applications.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h6>SQL</h6>
                <p class="pt-1">
                  SQL is inevitable language in backend development. I had the
                  chance to develope in both MySQL and SQL Server Database.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h6>Unity</h6>
                <p class="pt-1">
                  It has been awhile since my last use of Unity. It is the first
                  the first framework that I used. I learnt Unity throught
                  different means. I took some online courses on Udemy. I also
                  attained live local class. At the end, I switched job and no
                  longer get involved in Unity development. Yet, I often think
                  about writing some mobile games.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h6>Pytorch</h6>
                <p class="pt-1">
                  Company wanted to develope some deep learning related
                  applications. Hence, I tried to dive into the field of deep
                  learning. I took a course higly rated by the community -
                  fastai course. It recommended Pytorch as the way to go. I have
                  implemented some image-processing tools with Pytorch.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h6>Django</h6>
                <p class="pt-1">
                  In fact, Python is the very first language that I code with. I
                  really like the simplicity of Python. ASP.NET is good but not
                  my personal favorite. I spent time learning how to write web
                  applicatioin using Django. The experience was awesome.
                  Planning to develope some Fintech application using Django.
                </p>
              </div>
            </slide>
            <slide>
              <div class="display-card">
                <h6>Vue JS</h6>
                <p class="pt-1">
                  Django is an awesome web development framework. But it is not
                  powerful in frontend. So I started to look for a frontend
                  framework. Vue seems to be a wise choice. Did not consider Ext
                  JS because of its licence policy and community size. I love
                  how Vue divides web components into Props. All things are well
                  documented and easy to implement. Not to mention the large
                  community.
                </p>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>

    <!-- Certificates -->
    <div class="certificates mt-4">
      <div class="row justify-content-center align-items-center text-left">
        <div class="col-12 mt-2 mb-2">
          <div class="section-title">Certificates</div>
          <hr />
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-12 mt-2 ">
          <carousel v-bind:perPage="1" v-bind:centerMode="true">
            <slide
              v-for="(url, index) in certificateImageUrls"
              v-bind:key="index"
            >
              <img class="img-fluid img-max" v-bind:src="url" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  components: {},
  data: function() {
    return {
      leftQuotation: "&#8220",
      rightQuotation: "&#8221",
      certificateImageUrls: [
        require("@/assets/images/certificates/pic1.png"),
        require("@/assets/images/certificates/pic2.png")
      ]
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
  margin-left: 2rem;
  margin-top: 1rem;
  height: auto;
  width: auto;
  max-width: 15rem;
  max-height: 15rem;
  border-width: thin;
  border-radius: 50%;
}

.cool_title .fisrt-line {
  display: inline-block;
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

@media only screen and (max-width: 770px) {
  .resume-round-image img {
    margin-left: 1.5rem;
    height: auto;
    width: auto;
    max-width: 10rem;
    max-height: 10rem;
    border-width: thin;
    border-radius: 50%;
  }

  .cool_title .fisrt-line {
    display: inline-block;
    width: 25rem;
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .cool_title .second-line {
    display: inline-block;
    width: 20rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: black;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
}

@media only screen and (max-width: 450px) {
  .resume-round-image img {
    float: left;
    margin-left: 2rem;
    height: auto;
    width: auto;
    max-width: 5rem;
    max-height: 5rem;
    border-width: thin;
    border-radius: 50%;
  }

  .cool_title .fisrt-line {
    display: inline-block;
    width: 13rem;
    color: black;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .cool_title .second-line {
    display: inline-block;
    width: 10rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    background-color: black;
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
  }
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

.section-title {
  margin-left: 1.5rem;
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

.list-group-item {
  background-color: transparent;
  font-size: 1.2rem;
}

.img-max {
  max-height: 15rem;
  height: 100%;
}
</style>
