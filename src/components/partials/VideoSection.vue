<script>
 export default {
  name:'VideoSection'
}
</script>

<template>
  <!-- sezione video -->
  <section>
      <div class="container-fluid">
        <div class="ac_sm-container">

          <div class="row">

            <div class="col-4 text-center">
              <img src="/public/images/artist-quote-icon.png" alt="">
              <h4>I coach and mentor visual artists, like you, to Create Like You Mean lt</h4>
              <em>Martin Garrix</em>
            </div>

            <div class="col p-4">
              <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be.l support artists in crafting and living a creative life as well as feeling good about themselves and their art.</p>
              <p>As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
              <button class="ac_btn"><span>Get started today</span></button>
            </div>

          </div>
          <!-- mettere poi icona youtube e decorazioni in absolute -->
          <div class="video-block">
            <img class="video" src="/public/images/artist-video-poster.jpg" alt="">
            <img class="youtube" src="/public/images/icon-youtube-play.png" alt="">
          </div>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
 @use '../../../scss/partials/general' as *;
 @use '../../../scss/partials/vars' as *;

 .video-block {
  position: relative;
  margin: 0 auto;
  width: 80%;
  .video {
    width: 100%;
  }
  .youtube {
    position: absolute;
    cursor: pointer;
    width: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    transition: .4s all;
    &:hover {
      scale:1.2
    }
  }
 }
</style>