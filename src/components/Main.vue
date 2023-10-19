<script>
import Jumbotron from './partials/Jumbotron.vue';
 export default {
  name:'Main',
  components:{
    Jumbotron
  }
}
</script>

<template>
  <main >
   
    <Jumbotron/>
    <!-- sezione 1 -->
    <section>
      <div class="container-fluid">
        <div class="ac_sm-container text-center ">
          <div class="title-section">
            <i>Artist coaching</i>
            <h4>I understand what it takes to create.I can help you with</h4>
          </div>
          <div class="row">
            <div class="col">
              <img src="/public/images/artist-box-image-01.png" alt="">
              <h6>Online Coures</h6>
              <p class="">Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
            </div>
            <div class="col">
              <img src="/public/images/artist-box-image-02.png" alt="">
              <h6>One to One</h6>
              <p class="">Getting the necessary clarity about the current state to help you improve your ability.</p>
            </div>
            <div class="col">
              <img src="/public/images/artist-box-image-03.png" alt="">
              <h6>Anywhere</h6>
              <p class="">Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
            </div>
            <div class="col">
              <img src="/public/images/artist-box-image-04.png" alt="">
              <h6>On Time</h6>
              <p class="">Punctuality is our top priority because it's an essential criteria to assess a program quality.</p>
            </div> 
          </div>
        </div>
      </div>
    </section>
    <!-- \sezione1 -->

    <!-- sezione video -->
    <section>
      <div class="container-fluid">
        <div class="ac_sm-container">

          <div class="row">

            <div class="col">
              <img src="/public/images/artist-quote-icon.png" alt="">
              <h4>I coach and mentor visual artists, like you, to Create Like You Mean lt</h4>
              <i>Martin Garrix</i>
            </div>

            <div class="col">
              <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be.l support artists in crafting and living a creative life as well as feeling good about themselves and their art.</p>
              <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
              <button class="ac_btn">Get started today</button>
            </div>

          </div>
          <!-- mettere poi icona youtube e decorazioni in absolute -->
          <div class="video-block">
            <img src="/public/images/artist-video-poster.jpg" alt="">
          </div>
        </div>
      </div>
    </section>


    <!-- slider da fare componente -->
    <section id="testimonials">
      <i>Testimonials</i>
      <h4>Why do people love me?</h4>
      <!-- slider -->
      <div class="row w-100 justify-content-center ">
        <div class="col-4">
          <div class="card">
            <h5>High level of eficiency and scientific teaching methods</h5>
            <p>I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.</p>
            <div class="profile d-flex">
              <div class="avatar">
                <img src="/public/images/artist-testimonial-avatar-04.jpg" alt="">
              </div>
              <div class="profile-data">
                <h6>Name</h6>
                <span>Role</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- corsi da fare card da buttare dentro -->
    <section id="artist-coaching">
      <div class="ac_md-container">
        <div class="title text-center ">
          <i>Artist coaching</i>
          <h5>Latest online courses</h5>
        </div>
        <div class="row">
          <div class="ac_col">
            <div class="card" style="width: 18rem;">
              <img src="/public/images/artist-course-08-480x480.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/general'as *;

  #testimonials {
    background-color: rgb(250, 248, 246);
      .card {
        padding: 30px;
        .profile {
          img {
            width: 50px;
            border-radius: 50%;
          }
        }
      }
    }


</style>