<script>
import { store } from '../../data/store';
 export default {
  name:'Card',
  props:{
    cardObj:Object,
    cardProp: {
      type: Boolean,
      default: false,
    },
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
    
    <div 
      :class="{'card-blog': !cardProp, 'card': cardProp }"
      class="h-100"
      >
      <img :src="`/images/${cardObj.imgCourse}`" class="card-img-top" alt="">
      <div class="card-body">
        <div class="hover-box">

          <span class="title-card">{{ cardObj.price || cardObj.title }}</span>
          <h6>{{ cardObj.name }}</h6>
          <div class="info">
              <span><i :class="{'fa-solid fa-file-lines':cardObj.numberLessons, 'fa-regular fa-calendar': cardObj.date}"></i>{{ cardObj.numberLessons || cardObj.date}}</span>
  
              <span><i :class="{'fa-solid fa-user-large':cardObj.students, 'fa-regular fa-eye': cardObj.views}"></i>{{ cardObj.students  || cardObj.views}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>


<style lang="scss" scoped>
  @use '../../../scss/partials/general'as *;
  @use '../../../scss/partials/vars'as *;
  
  h6 {
    margin: 8px 0;
  }
  .info {
    color: $social-gray;
    font-size: .8rem;
    i {
      margin: 0 5px;
      
    }
    
  }
// card for courses
@keyframes cardanimation{
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-40px);
  }
  100%{
    transform: translateY(0);
  }
}

  
.card-blog {
    .card-body{
      cursor: pointer;
      .hover-box {
        width: 90%;
        padding: 20px;
        &:hover {
          animation: cardanimation 1s linear ;
          animation-timing-function: ease-in;
          background-color: white;
          border: 1px solid $orange-palette;
        }
      }
      .title-card {
          font-weight: 600;
          color: $orange-palette;
        }
    }
  }

  // card for latest blog
  .card{
    .card-body {
      .title-card {
        color: gray;
      }
      
      width: 100%;
      background-color: white;
      &:hover {
        cursor: pointer;
      }
  }
  }
</style>