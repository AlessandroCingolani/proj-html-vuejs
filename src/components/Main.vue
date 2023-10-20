<script>
import VideoSection from './partials/VideoSection.vue';
import ArtistCoaching from './partials/ArtistCoaching.vue';
import Jumbotron from './partials/Jumbotron.vue';
import Testimonial from './partials/Testimonial.vue';
import LatesCourses from './partials/LatesCourses.vue';
import LatestBlog from './partials/LatestBlog.vue';
 export default {
  name:'Main',
  components:{
    Jumbotron,
    ArtistCoaching,
    VideoSection,
    Testimonial,
    LatesCourses,
    LatestBlog
  }
}
</script>

<template>
  <main >
    <Jumbotron/>
    <ArtistCoaching/>
    <VideoSection/>
    <Testimonial/>
    <LatesCourses title="Artist coaching" type="courses"/>
    <LatestBlog title="Articles and Tips" type="latestBlog"/>

    

    <!-- lavoriamo insieme -->
    <section id="work-together">
      <div class="rotate-text">
        <h1 class="rotate">Events</h1>
      </div>
      <div class="ac_sm-container">
        <div class="title-section text-center">
          <em>Upcoming Events</em>
          <h4>Let's Work Together</h4>
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
        bottom: 100px;
        left: 0;
        transform: rotate(90deg);
      }
    }


</style>