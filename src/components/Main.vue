<script>
import {store} from '../data/store'
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
  },
  data(){
    return{
      store
    }
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
        <div class="row w-100">
          <div 
          v-for="(card,index) in store.workTogheter" :key="card + index"
          class="col-6">
          <div class="card mb-3" >
            <div :class="{'flex-row-reverse': index >= store.workTogheter.length - 2}" class="row g-0">
              <div class="col-md-4">
                <img :src="`/images/${card.imgCourse}`" class="img-fluid" alt="...">
              </div>
              <div class="col-md-8">
                <div :class="{'text-end': index >= store.workTogheter.length - 2}" class="card-body ">
                  <span class="date">{{ card.date }}</span>
                  <h6>{{ card.name }}</h6>
                  <span class="location"><i class="fa-solid fa-location-dot"></i>{{ card.location }}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    

    <!-- Newsletter -->
    <section id="newsletter"> 
      <div class="background-left"></div>
      <div class="background-rigth"></div>
      <div class="ac_sm-container h-100">
        <div class="row h-100">
          <div class="col-4 h-100 d-flex align-items-center">
            <h4>Newsletter to get in touch</h4>
          </div>
          <div class="col-8 h-100 d-flex align-items-center">
            <div class="mail-box">
              <span>Your email<input type="text" placeholder="Your e-mail"></span>
            </div>
          </div>
        </div>
      </div>

    </section>


  </main>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/general'as *;
  @use '../../scss/partials/vars'as *;

    // lavoriamo insieme
    #work-together {
      position: relative;
      .rotate-text {
        position: absolute;
        bottom: 100px;
        left: 0;
        transform: rotate(90deg);
      }
      .card {
        border: none;
        .card-body{
          padding: 30px 30px;
          .date {
            font-size: .8rem;
            color: rgba(128, 128, 128, 0.644);
          }
          h6 {
            font-weight: 600;
          }
          .location{
            font-size: .7rem;
            color: rgba(128, 128, 128, 0.487);
            i {
              padding: 0 5px;
            }
          }

        }
      }
    }

    #newsletter {
      height: 100px;
      background-color: rgb(36, 65, 134);
      color: white;
      position: relative;
      .background-left {
        width: 20%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        background-image: url('/images/artist-shape-color-paint-top-left.png');
        background-position: center;
        background-size: cover;
      }
      .background-rigth {
        width: 20%;
        height: 100%;
        position: absolute;
        top:0;
        right: 0;
        background-image: url('/images/artist-shape-color-paint-bottom-right.png');
        background-position: center;
        background-size: cover;
      }
      .mail-box {
        width: 100%;
      }
    }


</style>