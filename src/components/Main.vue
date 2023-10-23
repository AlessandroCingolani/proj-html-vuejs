<script>
import {store} from '../data/store'
import VideoSection from './partials/VideoSection.vue';
import ArtistCoaching from './partials/ArtistCoaching.vue';
import Jumbotron from './partials/Jumbotron.vue';
import Testimonial from './partials/Testimonial.vue';
import LatesCourses from './partials/LatesCourses.vue';
import LatestBlog from './partials/LatestBlog.vue';
import WorkTogether from './partials/WorkTogether.vue';
import Newsletter from './partials/Newsletter.vue';
 export default {
  name:'Main',
  components:{
    Jumbotron,
    ArtistCoaching,
    VideoSection,
    Testimonial,
    LatesCourses,
    LatestBlog,
    WorkTogether,
    Newsletter
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
    <Jumbotron title="Hello, I'm Martin"/>
    <ArtistCoaching title="Artist Coaching"/>
    <VideoSection/>
    <Testimonial title="Testimonials"/>
    <LatesCourses title="Artist coaching" type="courses"/>
    <LatestBlog title="Articles and Tips" type="latestBlog"/>
    <WorkTogether title="Upcoming Events"/>
    <Newsletter title="Newsletter to get in touch"/>
  </main>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/general'as *;
  @use '../../scss/partials/vars'as *;

</style>