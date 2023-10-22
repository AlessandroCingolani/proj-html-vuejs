<script>
 export default {
  name:'Footer'
}
</script>

<template>
  <footer>
    <div class="ac_md-container p-5">

      <div class="row">
        <div class="col-4">
          <h5>Address</h5>
          <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
          <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
          <p><a href="#">support@maxcoach.com</a></p>
          <div class="social">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div class="col-2">
          <h5>Explore</h5>
          <ul>
            <li><a href="#">Start here</a></li>    
            <li><a href="#">Success story</a></li>    
            <li><a href="#">Blog</a></li>    
            <li><a href="#">Courses</a></li>    
            <li><a href="#">Contact us</a></li>    
          </ul>
        </div>
        <div class="col-2">
          <h5>Information</h5>
          <ul>
            <li><a href="#">Membership</a></li>    
            <li><a href="#">Purchase guide</a></li>    
            <li><a href="#">Privacy policy</a></li>    
            <li><a href="#">Term of services</a></li>        
          </ul>
        </div>
        <div class="col-4">
          <h5>Instagram <span class="tag">@maxcoach</span></h5>
          <div class="img-block">
            <img src="/images/120084500_197897808368764_8114555493043279565_n.jpg" alt="">
            <img src="/images/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
            <img src="/images/120099363_364334431619755_7198812647386067017_n.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="footer-bottom text-center pt-5">
        <small>&#169; 2020 Maxcoach. All Rights Reserved</small>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
  @use '../../scss/partials/general'as * ;
  @use '../../scss/partials/vars'as * ;
  small {
    color: $social-gray;
  }
  a {
    color: rgb(104, 105, 105);
  }

  li {
    padding-bottom: 10px;
  }

  h5 {
    font-weight: 600;
    padding-bottom: 10px;
    .tag {
      color: $orange-palette;
      font-size: 1rem;
    }
  }
  .social {
    padding-top: 10px;
    color: $social-gray;
    i {
      font-size: 1.3rem;
      padding-right:25px ;
    }
  }
  .img-block {
    img {
      padding: 8px;
      width: calc(100% / 3);
    }
  }
</style>