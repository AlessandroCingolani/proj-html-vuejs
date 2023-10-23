<script>
 export default {
  name:'Jumbotron',
  props:{
    title:String,
  },
}
</script>

<template>
  <section id="Jumbo" class="d-flex justify-content-center align-items-center">
    <div class="toolbar">
      <ul>
        <li><a href="#"><i class="fa-solid fa-ruler-combined"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-life-ring"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-book"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li> 
      </ul>
    </div>
    <div class="collage-left h-100">
      <img class="background" src="/images/artist-shape-02.png" alt="artist-shape-02">
      <img class="artist" src="/images/artist-hero-image-03.png" alt="artist-hero-image-03">
      <img class="background-spheres" src="/images/artist-shape-03-201x300.png" alt="artist-shape-03">
      <img class="paint-art" src="/images/artist-hero-image-02.jpg" alt="artist-hero-image-02">
      <img class="artist-hero" src="/images/artist-hero-image-01.jpg" alt="artist-hero-image-01">
    </div>

    <div class="artist-jumbo text-center">
      <em>{{ title }}</em>
      <h4>Artist Coaching And Mentoring Might Be for You.</h4>
      <button class="ac_btn"><span>Get started today</span></button>
    </div>
    <div class="collage-right h-100">
      <img class="background" src="/images/artist-shape-01-600x577.png" alt="artist-shape-01">
      <img class="artist" src="/images/artist-hero-image-04.jpg" alt="artist-hero-image-04">
      <img class="feather" src="/images/artist-shape-04.png" alt="artist-shape-04.png">
      <img class="paint" src="/images/artist-shape-05.png" alt="artist-shape-05.png">
      <img class="max-coach" src="/images/maxcoach-shape-12-150x150.png" alt="artist-shape-05.png">
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @use '../../../scss/partials/general' as *;
  @use '../../../scss/partials/vars' as *;

  .toolbar {
    background-color: white;
    width: 40px;
    position: fixed;
    top: 200px;
    right: 0;
    z-index: 999;
    box-shadow: 1px 4px 18px #888888a3;
    ul {
      width: 100%;
      li {
        padding: 10px;
        width: 100%;
        a {
          width: 100%;
          display: flex;
          justify-content: center;
          color:rgba(0, 0, 0, 0.691);
          i {
            &:hover {
              scale:1.2;
              color: black;
            }
          }
        }
      }
    }
  }

  #Jumbo {
    position: relative;
    background-color:rgb(251, 249, 246);
    width: 100%;
    height: 740px;
    h4 {
      font-weight:bolder;
      font-size: 2.1rem;
      padding-bottom: 20px;
    }
    .collage-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      
      .background {
        position: absolute;
        width: 100%;
        height: 70%;
        top: 0;
        left: 0;
      }
      .artist {
        position: absolute;
        bottom: 60px;
        left: 300px;
      }
      .background-spheres {
        position: absolute;
        top: 120px;
        left: 0;
        z-index: 1;
      }
      .paint-art {
        position: absolute;
        top: 67px;
        left: 180px;
        z-index: 2;
      }
      .artist-hero {
        position: absolute;
        bottom: 100px;
        left: 0;
        z-index: 3;
      }
    }

    .artist-jumbo {
      width: 30%;
      z-index: 998;
    }

    .collage-right {
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      right: 0;
      .background {
        position: absolute;
        width: 70%;
        height: 70%;
        top:0;
        right: 100px;
      }
      .artist {
        position: absolute;
        bottom:30px;
        right: 50px;
        z-index: 2;
      }
      .feather {
        position: absolute;
        top: 80px;
        right: 0;
        z-index: 1;
      }
      .paint {
        position: absolute;
        bottom: -10px;
        right: 0;
      }
      .max-coach {
        position: absolute;
        bottom: 18px;
        right: 200px;
      }
    } 
  }
</style>