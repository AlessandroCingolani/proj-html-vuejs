<script>
import VideoSection from './partials/VideoSection.vue';
import ArtistCoaching from './partials/ArtistCoaching.vue';
import Jumbotron from './partials/Jumbotron.vue';
import Testimonial from './partials/Testimonial.vue';
import LatesCourses from './partials/LatesCourses.vue';
 export default {
  name:'Main',
  components:{
    Jumbotron,
    ArtistCoaching,
    VideoSection,
    Testimonial,
    LatesCourses
  }
}
</script>

<template>
  <main >
    <Jumbotron/>
    <ArtistCoaching/>
    <VideoSection/>
    <Testimonial/>
    <LatesCourses/>

    <!-- ultime dal blog  -->
    <section>
      <div class="ac_sm-container">
        <div class="title text-center">
          <i>Articles and Tips</i>
          <h6>Latest From The Blog</h6>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="card" style="width: 18rem;">
              <img src="/public/images/artist-course-08-480x480.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <span>Title</span>
                <h6>Name</h6>
                <div class="info">
                  <span>Data</span>
                  <span>views</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card" style="width: 18rem;">
              <img src="/public/images/artist-course-08-480x480.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <span>Title</span>
                <h6>Name</h6>
                <div class="info">
                  <span>Data</span>
                  <span>views</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card" style="width: 18rem;">
              <img src="/public/images/artist-course-08-480x480.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <span>Title</span>
                <h6>Name</h6>
                <div class="info">
                  <span>Data</span>
                  <span>views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="post-link text-center ">
          <span>Get into details now? <a href="#">View all posts  freccia</a></span>
        </div>
      </div>
    </section>

    <!-- lavoriamo insieme -->
    <section id="work-together">
      <div class="rotate-text">
        <h1>Events</h1>
      </div>
      <div class="ac_sm-container">
        <div class="title text-center">
          <i>Upcoming Events</i>
          <h6>Let's Work Together</h6>
        </div>
        <div class="row">
          <div class="col">
            <div class="together-card d-flex h-100">
              <img src="/public/images/artist-event-04-250x300.jpg" alt="">
              <div class="info h-100 d-flex flex-column justify-content-center">
                <span>Date</span>
                <h6>Name</h6>
                <span>Location</span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="together-card d-flex h-100">
              <img src="/public/images/artist-event-04-250x300.jpg" alt="">
              <div class="info h-100 d-flex flex-column justify-content-center">
                <span>Date</span>
                <h6>Name</h6>
                <span>Location</span>
              </div>
            </div>
          </div>
        </div>

        <!-- reverse row -->
        <div class="row ">
          <div class="col">
            <div class="together-card d-flex h-100 justify-content-end ">
              <div class="info h-100 d-flex flex-column justify-content-center">
                <span>Date</span>
                <h6>Name</h6>
                <span>Location</span>
              </div>
              <img src="/public/images/artist-event-04-250x300.jpg" alt="">
            </div>
          </div>
          <div class="col">
            <div class="together-card d-flex h-100 justify-content-end ">
              <div class="info h-100 d-flex flex-column justify-content-center">
                <span>Date</span>
                <h6>Name</h6>
                <span>Location</span>
              </div>
              <img src="/public/images/artist-event-04-250x300.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <!-- Newsletter -->
    <section id="newsletter"> 
      <div class="ac_sm-container d-flex justify-content-between ">
        <div class="title">
          <h2>Newsletter to get in touch</h2>
        </div>
        <div class="mail-box">
          <input type="text" placeholder="Your e-mail">
        </div>
      </div>

    </section>


  </main>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/general'as *;

    // lavoriamo insieme
    #work-together {
      position: relative;
      .rotate-text {
        position: absolute;
        bottom: 40px;
        transform: rotate(90deg);
      }
    }


</style>