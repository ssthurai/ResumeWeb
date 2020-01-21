<template>
  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About this Website</h6>
            <p class="text-justify">
              This page is inspired by this
              <a href="http://themes.pixelwars.org/unrovr/demo-03/">site</a>.
              Yet all codes are written solely by developer - Hsuan Ting, Yeh.
              This page is written using Vue.js framework and hosted by Github.
              <a href="https://github.com/NoTiger/ResumeWeb">Source Code .</a>
            </p>
          </div>

          <div class="col-xs-6 col-md-3 border-left">
            <h6>Categories</h6>
            <ul class="bottum-note-links">
              <router-link to="/"><li>About Me</li></router-link>
              <router-link to="/resume"><li>Resume</li></router-link>
              <router-link to="/portfolio"><li>Portfolio</li></router-link>
              <router-link to="/education"><li>Education</li></router-link>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3 border-left">
            <h6>Quick Links</h6>
            <ul class="bottum-note-links">
              <li><a href="https://github.com/NoTiger">My Github page</a></li>
              <router-link to="/contact"><li>Contact Me</li></router-link>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p style="text-align: left;">
              This Website is coded by Hsuan Ting, Yeh. Photo taken by
              <a href="#">Grace Lau</a>.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-network-icons">
              <li>
                <a class="facebook" href="#"><i class="fab fa-facebook"></i></a>
              </li>
              <li>
                <a class="twitter" href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a>
              </li>
              <li>
                <a class="linkedin" href="#"><i class="fab fa-linkedin"></i></a>
              </li>
            </ul>
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
  color: #737373;
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
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
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
  color: #3366cc;
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
.social-network-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-network-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-network-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-network-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-network-icons a:active,
.social-network-icons a:focus,
.social-network-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-network-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-network-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-network-icons a.twitter:hover {
  background-color: #00aced;
}
.social-network-icons a.linkedin:hover {
  background-color: #007bb6;
}
.social-network-icons a.dribbble:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-network-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>
