<script>
 export default {
  name:'Footer'
}
</script>

<template>
  <footer>
    <div class="ac_md-container">

      <div class="row">
        <div class="col-4">
          <h4>Address</h4>
          <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
          <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
          <p><a href="#">support@maxcoach.com</a></p>
          <div>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div class="col-2">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Start here</a></li>    
            <li><a href="#">Success story</a></li>    
            <li><a href="#">Blog</a></li>    
            <li><a href="#">Courses</a></li>    
            <li><a href="#">Contact us</a></li>    
          </ul>
        </div>
        <div class="col-2">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Membership</a></li>    
            <li><a href="#">Purchase guide</a></li>    
            <li><a href="#">Privacy policy</a></li>    
            <li><a href="#">Term of services</a></li>        
          </ul>
        </div>
        <div class="col-4">
          <h4>Instagram <span>@maxcoach</span></h4>
          <div class="img-block">
            <img src="/public/images/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
            <img src="/public/images/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
            <img src="/public/images/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/general'as * ;

  .img-block {
    img {
      padding: 8px;
      width: calc(100% / 3);
    }
  }
</style>