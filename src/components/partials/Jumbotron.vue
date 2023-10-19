<script>
 export default {
  name:'Jumbotron'
}
</script>

<template>
  <section id="Jumbo" class="d-flex justify-content-center align-items-center">
    <div class="collage-left h-100">
      <img class="background" src="/public/images/artist-shape-02.png" alt="artist-shape-02">
      <img class="artist" src="/public/images/artist-hero-image-03.png" alt="artist-hero-image-03">
      <img class="background-spheres" src="/public/images/artist-shape-03-201x300.png" alt="artist-shape-03">
      <img class="paint-art" src="/public/images/artist-hero-image-02.jpg" alt="artist-hero-image-02">
      <img class="artist-hero" src="/public/images/artist-hero-image-01.jpg" alt="artist-hero-image-01">
    </div>

    <div class="artist-jumbo w-25 text-center">
      <i>Hello,Im martin</i>
      <h4>Artist Coaching And Mentoring Might Be for You.</h4>
      <button class="ac_btn">Get started today</button>
    </div>
    <div class="collage-right h-100">
      <img class="background" src="/public/images/artist-shape-01-600x577.png" alt="artist-shape-01">
      <img class="artist" src="/public/images/artist-hero-image-04.jpg" alt="artist-hero-image-04">
      <img src="/public/images/artist-shape-04.png" alt="artist-shape-04.png">
      <img src="/public/images/artist-shape-05.png" alt="artist-shape-05.png">
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @use '../../../scss/partials/general' as *;
  @use '../../../scss/partials/vars' as *;

  #Jumbo {
    background-color:rgb(251, 249, 246);
    width: 100%;
    height: 740px;
    .collage-left {
      position: relative;
      width: 37%;
      height: 100%;
      
      .background {
        position: absolute;
        top: 0;
        left: 0;
      }
      .artist {
        position: absolute;
        bottom: 20px;
        left: 300px;
      }
      .background-spheres {
        position: absolute;
        top: 100px;
        left: 0;
        z-index: 1;
      }
      .paint-art {
        position: absolute;
        top: 50px;
        left: 200px;
      }
      .artist-hero {
        position: absolute;
        bottom: 50px;
        left: 210px;
      }
    }

    .artist-jumbo {
      z-index: 998;
    }

    .collage-right {
      position: relative;
      width: 37%;
      height: 100%;
      .background {
        position: absolute;
        top:0;
        right: 100px;
      }
      .artist {
        position: absolute;
        bottom:0;
        right: 0;
      }
    }
  }
</style>