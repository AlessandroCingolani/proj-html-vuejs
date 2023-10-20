<script>
import { store } from '../../data/store';
 export default {
  name:'Card',
  props:{
    cardObj:Object
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="ac_col">
    <div class="card h-100">
      <img :src="`/images/${cardObj.imgCourse}`" class="card-img-top" alt="">
      <div class="card-body">
        <span class="price">{{ cardObj.price || cardObj.title }}</span>
        <h6>{{ cardObj.name }}</h6>
        <div class="info">
            <span><i :class="{'fa-solid fa-file-lines':cardObj.numberLessons, 'fa-regular fa-calendar': cardObj.date}"></i>{{ cardObj.numberLessons || cardObj.date}}</span>
            <span><i :class="{'fa-solid fa-user-large':cardObj.students, 'fa-regular fa-eye': cardObj.views}"></i>{{ cardObj.students || cardObj.views}}</span>
        </div>
      </div>
    </div>
  </div>  
</template>


<style lang="scss" scoped>
  @use '../../../scss/partials/general'as *;
  @use '../../../scss/partials/vars'as *;
  .price {
    color: $orange-palette;
  }
  .info {
    color: $social-gray;
  }
  .card{
    position: relative;
    .card-body {
      &:hover {
        cursor: pointer;
        transition: 1s all;
        border: 1px solid $orange-palette;
      }
  }
  }
</style>