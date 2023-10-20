<script>
import Card from './Card.vue';
import { store } from '../../data/store'
 export default {
  name:'LatesBlog',
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
  <!-- ultime dal blog  -->
  <section>
      <div class="ac_sm-container">
        <div class="title-section text-center">
          <em>{{ title }}</em>
          <h4>Latest From The Blog</h4>
        </div>
        <div class="row">
          <Card v-for="(card,index) in store[type]" :key="card.name + index" :cardObj="card"/>
          <div class="post-link text-center ">
            <span>Get into details now? <a href="#">View all posts <i class="fa-solid fa-arrow-right-long"></i></a></span>
          </div>
        </div>
      </div>
    </section>
  
</template>


<style lang="scss" scoped>
  @use '../../../scss/partials/general'as *;
</style>