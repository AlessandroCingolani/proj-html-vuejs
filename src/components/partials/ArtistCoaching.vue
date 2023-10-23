<script>
 export default {
  name:'ArtistCoaching',
  props:{
    title:String,
  },
}
</script>

<template>
  <!-- sezione 1 -->
  <section id="artist-coaching">
      <div class="container-fluid">
        <div class="ac_sm-container">
          <div class="title-section text-center">
            <em>{{ title }}</em>
            <h4>I understand what it takes to create.I can help you with</h4>
          </div>
          <div class="row">
            <div class="col">
              <img src="/images/artist-box-image-01.png" alt="">
              <h6>Online Courses</h6>
              <p>Online art coaching now offers you a very powerful way to redesign your artist mind.</p>
            </div>
            <div class="col">
              <img src="/images/artist-box-image-02.png" alt="">
              <h6 class="pt-3">One to One</h6>
              <p>Getting the necessary clarity about the current state to help you improve your ability.</p>
            </div>
            <div class="col">
              <img src="/images/artist-box-image-03.png" alt="">
              <h6>Anywhere</h6>
              <p>Access to valuable and portable program which allow you to setup and live anywhere you want.</p>
            </div>
            <div class="col">
              <img src="/images/artist-box-image-04.png" alt="">
              <h6>On Time</h6>
              <p>Punctuality is our top priority because it's an essential criteria to assess a program quality.</p>
            </div> 
          </div>
        </div>
      </div>
    </section>
    <!-- \sezione1 -->
</template>


<style lang="scss" scoped>
 @use '../../../scss/partials/general' as *;
 @use '../../../scss/partials/vars' as *;

  #artist-coaching {
    background-image: url('/images/maxcoach-shape-14-1536x343.png');
    background-position: center;
    background-size: cover;
    h6 {
      font-size: 1.1rem;
      font-weight: 600;
      padding-top: 10px;
    }
    p {
      font-size: .9rem;
      color: gray;
    }
  }
</style>