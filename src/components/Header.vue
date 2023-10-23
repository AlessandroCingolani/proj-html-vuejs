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
  <header id="Header">
    <div class="timing-ticket d-flex justify-content-center align-items-center">
      <span class="start-date-text">Starts TOMORROW! Our biggest event of the year...</span>
      <Countdown/>
      <button class="ac_btn"><span>Get ticket</span></button>
    </div>

    <div class="container-fluid nav-bar">
      <div class="ac_md-container">
        <nav class="d-flex justify-content-between h-100 align-items-center">

          <div><img src="/public/images/dark-logo.png" alt=""></div>

          <!-- Fixare inline block  -->
          <ul class="d-flex h-100 align-items-center ">
            <div class="dropdown">
              <li
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Home<i class="fa-solid fa-chevron-down"></i>
              </li>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <li
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Pages<i class="fa-solid fa-chevron-down"></i>
              </li>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <li
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Courses<i class="fa-solid fa-chevron-down"></i>
              </li>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <li
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              Features<i class="fa-solid fa-chevron-down"></i>
              </li>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <li
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              Blog<i class="fa-solid fa-chevron-down"></i>
              </li>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <li
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              Shop<i class="fa-solid fa-chevron-down"></i>
              </li>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </ul>

          <div class="social">
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </div>

        </nav>

      </div>

    </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../../scss/partials/general'as *;
@use '../../scss/partials/vars' as * ;

.dropdown {
  margin-right: 40px;
}

.dropdown:hover>.dropdown-menu {
  display: block;
}

.dropdown>.dropdown-toggle:active {
    pointer-events: none;
}

.nav-bar {
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 999;
}

nav {
  img {
    width: 160px;
  }
  li {
    
      i {
      margin-left: 5px;
      font-size: .7rem;
    }
  }
  .social {
    a {
      margin-right:25px ;
      color: $social-gray;
      i {
        &:hover {
          scale: 1.1;
          color: $dark-palette;
        }
        
        font-size: 1.2rem;
      }
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