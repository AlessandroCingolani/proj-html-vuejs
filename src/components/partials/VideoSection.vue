<script>
 export default {
  name:'VideoSection',
}
</script>

<template>
  <!-- sezione video -->
  <section id="player-section">
      <div class="container-fluid">
        <div class="ac_sm-container">

          <div class="row mb-5">

            <div class="col-4 text-center">
              <img class="pb-3" src="/public/images/artist-quote-icon.png" alt="">
              <h4 class="title-artist">I coach and mentor visual artists, like you, to Create Like You Mean lt</h4>
              <em>Martin Garrix</em>
            </div>

            <div class="col p-5 text-artist">
              <p>As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be.l support artists in crafting and living a creative life as well as feeling good about themselves and their art.</p>
              <p class="pb-4">As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
              <button class="ac_btn transparent"><span>Get started today</span></button>
            </div>

          </div>
          <!-- mettere poi icona youtube e decorazioni in absolute -->
          <div class="video-block">
            <div class="collage">
              <img class="shape-12" src="/public/images/maxcoach-shape-12-150x150.png" alt="">
              <img class="shape-5" src="/public/images/maxcoach-shape-05.png" alt="">
            </div>
            <img class="video" src="/public/images/artist-video-poster.jpg" alt="">
            <img class="youtube" src="/public/images/icon-youtube-play.png" alt="">
          </div>
          <div class="background">

          </div>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
 @use '../../../scss/partials/general' as *;
 @use '../../../scss/partials/vars' as *;

  .title-artist {
    font-size: 2rem;
    font-weight: 600;
  }
 .text-artist {
  color: rgba(128, 128, 128, 0.799);

 }

 #player-section {
  
    position: relative;
    padding-bottom:120px ;
    
    .background {
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: -30px;
    left: 0;
    // background-image: url('/public/images/artist-shape-02.png');
    // background-position-y: bottom;
    // background-repeat: repeat-x;
    // transform: rotate(180deg);
    // background-image: url('/public/images/artist-shape-02.png');
    // background-repeat: repeat, repeat;
    // background-size: 200px, 500px;
    // background-position: 0px 0px, 0px 0px;
    // background-repeat-x: 0px, 1px;
  }
   .video-block {
    position: relative;
    margin: 0 auto;
    width: 80%;
    .collage {
      position: absolute;
      width: 100%;
      height: 100%;
      .shape-12 {
        position: absolute;
        width: 20%;
        bottom: -10px;
        right: -100px;
        z-index: 1;
      }
      .shape-5 {
        position: absolute;
        width: 20%;
        top: -20px;
        left: -30px;
        z-index: 1;
      }
    }
    .video {
      position: relative;
      width: 100%;
      z-index: 10;
    }
    .youtube {
      position: absolute;
      cursor: pointer;
      width: 10%;
      top: 50%;
      left: 50%;
      transform: translate(-50% , -50%);
      transition: .4s all;
      z-index: 11;
      &:hover {
        scale:1.2
      }
    }
  
 }
 }
</style>