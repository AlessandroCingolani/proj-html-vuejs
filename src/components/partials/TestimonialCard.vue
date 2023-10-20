<script>
import { store } from '../../data/store';
 export default {
  name:'TestimonialCard',
  data(){
    return{
      store,
      carouselIndex:0
    }
  },
}
</script>

<template>
    <!-- slider -->
      <div v-for="(card,index) in store.testimonials" 
        :key="card.name + index" 
        :class="{'active': index === this.carouselIndex,'inactive':index != this.carouselIndex}"
        @click="carouselIndex = index"
        class="carousel">
        
          <div
           :class="index < 3 ? '' : 'hidden'"
           class="card h-100">
            <h5>{{ card.title }}</h5>
            <p>{{ card.description }}</p>
            <div class="profile d-flex">
              <div class="avatar">
                <img :src="`/images/${card.imgProfile}`" alt="">
              </div>
              <div class="profile-data">
                <h6>{{ card.name }}</h6>
                <span>{{ card.role }}</span>
              </div>
            </div>
          </div>
      </div>
      <div class="box-circle text-center p-3">
       <i 
       v-for="(circle,index) in store.testimonials.length" 
       :key="circle+index"
       :class="{'active': index === this.carouselIndex,'inactive':index != this.carouselIndex}"
       @click="carouselIndex = index"
       class="fa-solid fa-circle pe-2"></i>
      </div>
</template>


<style lang="scss" scoped>
.carousel {
  width: calc(100% / 3);
}
.hidden {
  display: none;
}
.inactive {
  opacity: 0.4;
}
.active {
  .card{
    opacity: 1;
  }
}
  .card {
    &:hover {
      cursor: pointer;
    }
    padding: 30px;
    .profile {
      img {
        width: 50px;
        border-radius: 50%;
      }
    }
  }
  .box-circle {
    i {
      font-size: .6rem;
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>