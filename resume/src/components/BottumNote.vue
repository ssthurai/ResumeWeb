<template>
  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 ml-1 mr-1">
            <h6>About this Website</h6>
            <p class="text-justify">
              This page is inspired by this
              <a href="http://themes.pixelwars.org/unrovr/demo-03/">
                <strong>site</strong> </a
              >. Yet all codes are written solely by developer - Hsuan Ting,
              Yeh. This page is written using Vue.js framework and hosted by
              Github.
              <a href="https://github.com/NoTiger/ResumeWeb">
                <strong>
                  Source Code
                </strong>
              </a>
              .
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="bottum-note-links">
              <router-link to="/"><li>About Me</li></router-link>
              <router-link to="/resume"><li>Resume</li></router-link>
              <router-link to="/portfolio"><li>Portfolio</li></router-link>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="bottum-note-links">
              <li><a href="https://github.com/NoTiger">My Github page</a></li>
              <li>
                <a href="https://github.com/NoTiger/ResumeWeb">Source Code</a>
              </li>
              <router-link to="/contact"><li>Contact Me</li></router-link>
              <!--
              <li><a href="https://github.com/NoTiger">Download Resume</a></li>
              -->
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-10 ml-1 mr-1">
            <p style="text-align: left;">
              This Website is written by Hsuan Ting, Yeh. Photos taken by
              <a href="#"><strong>Grace Lau</strong></a
              >.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-footer {
  background-color: transparent; /*#26272b*/
  padding: 45px 0 20px;
  font-size: 0.9em;
  line-height: 24px;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer h6 {
  color: #bbb;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #9c9c9c !important;
}
.site-footer a:hover {
  color: #eaeaea;
  text-decoration: none;
  font-size: 1.1rem;
}

.bottum-note-links {
  padding-left: 0;
  list-style: none;
}
.bottum-note-links li {
  display: block;
}

.bottum-note-links a {
  color: #737373;
}
.bottum-note-links a:active,
.bottum-note-links a:focus,
.bottum-note-links a:hover {
  color: #eaeaea;
  text-decoration: none;
}

.site-footer .social-network-icons {
  text-align: right;
}
.site-footer .social-network-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #dee3f9;
}

@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-network-icons {
    text-align: center;
  }
}
</style>
