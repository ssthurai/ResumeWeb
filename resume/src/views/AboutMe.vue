<template>
  <div class="container-fluid p-0 m-0">
    <div class="row justify-content-center text-left">
      <!-- About Me -->
      <div class="col-10 mt-5 mb-5">
        <h3><i class="far fa-smile-wink mr-2"></i>About Me</h3>
        <hr />
        <p>
          I am Yeh Hsuan Ting. A Software Developer from Taiwan. I have
          experience in many fields: Game Dev. , Frontend Web Dev. , Backend
          Dev. ect. I also did some minor implementation in deep-learning and
          machine learning. Always looking for more learning opportunities. An
          enthusiatic programmer who made a lifelong commitment with codes and
          fun.
        </p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="far fa-hand-point-right mr-3"></i>
            Age: {{ AGE }}
          </li>
          <li class="list-group-item">
            <i class="far fa-hand-point-right mr-3"></i>
            Residence: R.O.C (Taiwan)
          </li>
          <li class="list-group-item">
            <i class="far fa-hand-point-right mr-3"></i>
            Address: New Taipei City, Taiwan
          </li>
          <li class="list-group-item">
            <i class="far fa-hand-point-right mr-3"></i>
            Properties: Video Game Player and Movie Maniac
          </li>
        </ul>
      </div>
      <!-- Programming Language -->
      <div class="col-10 mt-5 mb-5">
        <h3><i class="fas fa-laptop-code mr-2"></i>Programming Language</h3>
        <hr />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fas fa-code mr-3"></i>
            C#: My Current Work Language
          </li>
          <li class="list-group-item">
            <i class="fas fa-code mr-3"></i>
            Javascript: The one I cannot avoid
          </li>
          <li class="list-group-item">
            <i class="fas fa-code mr-3"></i>
            Python: My Personal Favorite
          </li>
          <li class="list-group-item">
            <i class="fas fa-code mr-3"></i>
            Java: The one I got an associate certificate but seldom use
          </li>
        </ul>
      </div>
      <!-- Services -->
      <div class="col-10 mt-5 mb-5">
        <h3><i class="fas fa-briefcase mr-3"></i>Services</h3>
        <h5></h5>
        <hr />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fas fa-genderless mr-3"></i>
            Frontend Web Development
          </li>
          <li class="list-group-item">
            <i class="fas fa-genderless mr-3"></i>
            Backend API Development
          </li>
          <li class="list-group-item">
            <i class="fas fa-genderless mr-3"></i>
            Desktop Application Development
          </li>
          <li class="list-group-item">
            <i class="fas fa-genderless mr-3"></i>
            Software Solution
          </li>
          <li class="list-group-item">
            <i class="fas fa-genderless mr-3"></i>
            <a class="link" href="#">Portfolio</a>
          </li>
        </ul>
      </div>
      <!-- Fun Fact -->
      <div class="col-10 mt-5 mb-5">
        <h3><i class="fab fa-angellist mr-3"></i>Fun Fact</h3>
        <hr />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fas fa-arrow-right mr-3"></i>
            Own 1 bachelor degree in Civil Engineering
          </li>
          <li class="list-group-item">
            <i class="fas fa-arrow-right mr-3"></i>
            Had 2 chihuahuas in the family
          </li>
          <li class="list-group-item">
            <i class="fas fa-arrow-right mr-3"></i>
            Completed 3 commercial software projects
          </li>
          <li class="list-group-item">
            <i class="fas fa-arrow-right mr-3"></i>
            20 years experience being a video game lover
          </li>
          <li class="list-group-item">
            <i class="fas fa-arrow-right mr-3"></i>
            Got 58 courses on Udemy
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  components: {},
  data: function() {
    return {};
  },
  computed: {
    AGE: {
      get: function() {
        let today = new Date();
        let birthDate = new Date("1993-05-05");
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
    }
  }
};
</script>

<style scoped>
hr {
  border-size: 2px;
}

.list-group-item {
  background-color: transparent;
}
</style>
