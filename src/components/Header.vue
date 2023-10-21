<script>
import Countdown from './partials/Countdown.vue'
 export default {
  name:'Header',
  components:{
    Countdown
  }

}
</script>

<template>
  <header>
    <div class="timing-ticket d-flex justify-content-center align-items-center">
      <span class="start-date-text">Starts TOMORROW! Our biggest event of the year...</span>
      <Countdown/>
      <button class="ac_btn"><span>Get ticket</span></button>
    </div>

    <div class="container-fluid debug-box">
      <div class="ac_md-container">
        <nav class="d-flex justify-content-between h-100 align-items-center">

          <div><img src="/public/images/dark-logo.png" alt=""></div>

          <!-- Fixare inline block  -->
          <ul class="d-flex h-100 align-items-center ">
            <li>Home<i class="fa-solid fa-chevron-down"></i></li>
            <li>Pages<i class="fa-solid fa-chevron-down"></i></li>
            <li>Courses<i class="fa-solid fa-chevron-down"></i></li>
            <li>Features<i class="fa-solid fa-chevron-down"></i></li>
            <li>Blog<i class="fa-solid fa-chevron-down"></i></li>
            <li>Shop<i class="fa-solid fa-chevron-down"></i></li>
          </ul>

          <div class="social">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>

        </nav>

      </div>

    </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/general'as *;
@use '../../scss/partials/vars' as * ;

nav {
  img {
    width: 160px;
  }
  li {
    margin-right: 40px;
      i {
      margin-left: 5px;
      font-size: .5rem;
    }
  }
  .social {
    color: $social-gray;
    i {
      padding-right:25px ;
    }
  }
}
  .timing-ticket {
    height: 50px;
    background-color: $background-white-palette;
    .start-date-text {
      font-size: .9rem;
      color: rgba(128, 128, 128, 0.702);
    }
    .timer {
      margin: 0 20px;
      i {
        margin-right: 10px;
      }
    }
  }

  .ac_md-container {
    height: 80px;
  }

</style>