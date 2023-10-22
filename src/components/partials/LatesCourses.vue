<script>
import Card from './Card.vue';
import { store } from '../../data/store'
 export default {
  name:'LatesCourses',
  components:{
    Card
  },
  props:{
    title:String,
    type:String
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <!-- corsi da fare card da buttare dentro -->
  <section id="artist-coaching">
      <div class="ac_md-container">
        <div class="title-section text-center ">
          <em>{{ title }}</em>
          <h4>Latest online courses</h4>
        </div>
        <div class="row h-100">
          <Card v-for="(card,index) in store[type]" :key="card.name + index" :cardObj="card"/>
        </div> 
        <div class="text-center"> 
          <button class="ac_btn transparent"><span>View all courses  <i class="fa-solid fa-arrow-right-long"></i></span></button>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
  @use '../../../scss/partials/general'as *;
</style>