<script>
import { store } from '../../data/store';
 export default {
  name:'Carousel',
  data(){
    return{
      store,
      carouselIndex:0
    }
  },
  methods: {
    clickCarousel(index){
      this.carouselIndex = index
      store.testimonials.forEach((vis,index)=> {
       store.testimonials[index].visible = false
      })
      if (this.carouselIndex === 0) {
        store.testimonials[this.carouselIndex].visible = true
        store.testimonials[this.carouselIndex +1].visible = true
        store.testimonials[this.carouselIndex +2].visible = true

      }else if (this.carouselIndex === store.testimonials.length -1){
        store.testimonials[this.carouselIndex -1].visible = true
        store.testimonials[this.carouselIndex].visible = true
        store.testimonials[this.carouselIndex -2].visible = true
      }else{
        store.testimonials[this.carouselIndex +1].visible = true
        store.testimonials[this.carouselIndex].visible = true
        store.testimonials[this.carouselIndex -1].visible = true
      }
       
    }
  }
}
</script>

<template>
    <!-- slider -->
      <div v-for="(card,index) in store.testimonials" 
        :position="index"
        :key="card.name + index" 
        @click="clickCarousel(index)"
        :class="card.visible  ? '' : 'hidden'"
        class="carousel">
        
          <div
           :class="index === this.carouselIndex  ? 'active' : 'inactive'"
           class="card h-100 p-5">
            <h5>{{ card.title }}</h5>
            <p>{{ card.description }}</p>
            <div class="profile d-flex">
              <div class="avatar h-100">
                <img :src="`/images/${card.imgProfile}`" alt="">
              </div>
              <div class="profile-data h-100 d-flex flex-column justify-content-center">
                <span class="name">{{ card.name }}</span>
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
       @click="clickCarousel(index)"
       class="fa-solid fa-circle pe-2"></i>
      </div>
</template>


<style lang="scss" scoped>
.carousel {
  width: 30%;
  h5 {
    font-weight: 600;
  }
  p {
    color: rgb(112, 112, 112);
  }
  .profile-data{
    width: 100%;
    padding-left: 10px;
    .name {
      font-weight: 600;
      color: black;
    }
    span {
      color: gray;
      font-size: .9rem;
    }

  }
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