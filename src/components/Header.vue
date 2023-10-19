<script>
 export default {
  name:'Header'

}
</script>

<template>
  <header>
    <div class="timing-ticket d-flex justify-content-center align-items-center">timing ticket
      <button class="ac_btn">Get ticket</button>
    </div>

    <div class="container-fluid debug-box">
      <div class="ac_md-container">
        <nav class="d-flex justify-content-between h-100 align-items-center">

          <div>logo</div>

          <!-- Fixare inline block  -->
          <ul class="d-flex h-100 align-items-center ">
            <li>Home</li>
            <li>Pages</li>
            <li>Courses</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Shop</li>
          </ul>

          <div>
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
  .timing-ticket {
    height: 50px;
    background-color: $background-white-palette;
  }

  .ac_md-container {
    height: 80px;
  }

</style>