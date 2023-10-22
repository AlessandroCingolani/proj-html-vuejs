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
  <div :class="{'ac_col': !cardProp, 'col-4': cardProp }">
    
    <div 
      :class="{'card-course': !cardProp, 'card': cardProp }"
      class="h-100"
      >
      <img :src="`/images/${cardObj.imgCourse}`" class="card-img-top" alt="">
      <div class="card-body">
        <div class="hover-box">

          <span class="title-card">{{ cardObj.price || cardObj.title }}</span>
          <h6>{{ cardObj.name }}</h6>
          <div class="info">

            <span>
              <i :class="{'fa-solid fa-file-lines':cardObj.numberLessons, 'fa-regular fa-calendar': cardObj.date}"></i>
              {{ cardObj.numberLessons || cardObj.date}} 
              <span v-if="cardObj.numberLessons">Lessons</span>
            </span>
  
            <span>
              <i :class="{'fa-solid fa-user-large':cardObj.students, 'fa-regular fa-eye': cardObj.views}"></i>
              {{ cardObj.students || cardObj.views}} 
              <span v-if="cardObj.students">Students</span>
              <span v-else>Views</span>
            </span>
              
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
    padding-top: 15px;
    color: rgba(128, 128, 128, 0.626);
    font-size: .8rem;
    i {
      margin: 0 5px;
      
    }
    
  }


  
.card-course {
  height: 100%;
  position: relative;
  cursor: pointer;
  &:hover {
    .hover-box {
        position: relative;
        bottom: 40px;
        background-color: white;
        border: 1px solid $orange-palette;
      }
  }
  h6 {
    font-size: 1.2rem;
    font-weight: 600;
  }
    .card-body{
      .hover-box {
        width: 90%;
        height: 100%;
        padding: 30px;
      }
      .title-card {
          font-weight: 600;
          color: $orange-palette;
        }
    }
  }

  // card for latest blog
  .card{
    box-shadow: 5px 10px 18px #88888852;
    width: 60%;
    height: 30%;
      .card-body {
        width: 100%;
        .title-card{
          color: gray;
        }
        h6 {
          font-weight: bolder;
        }
      }
  }


  .col-4 {
    display: flex;
    justify-content: center;
    height: 100%;
    &:first-child {
      align-self: center;
    }
    &:nth-child(2){
      .card {
        width: 100%;
        height: 100%;
        position: relative;
        box-shadow: none;
        .card-body {
          position: absolute;
          color: white;
          width: 100%;
          bottom: 10px;
          .title-card {
            color: white;
          }
          h6{
            font-size: 1.8rem;
            font-weight: 600;
          }
          .info {
            color: white;
          }
        }
      }
    }
    &:nth-child(3){
      margin-top: 3%;
    }
    
  }
</style>