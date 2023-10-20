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
        :class="{'active': index === this.carouselIndex}"
        @click="carouselIndex = index"
        class="col-4 h-100">
          <div class="card h-100">
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
</template>


<style lang="scss" scoped>
  #testimonials {
    background-color: rgb(250, 248, 246);
    .active {
      .card{
        background-color: red;
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
    }
</style>