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
          <h4 class="mb-4">Latest From The Blog</h4>
        </div>
        <div class="row h-100 ">
          <Card v-for="(card,index) in store[type]" :key="card.name + index" :cardObj="card" :cardProp="true"/>
          <div class="post-link text-center ">
            <span>Get into details now? <a href="#">View all posts <i class="fa-solid fa-arrow-right-long"></i></a></span>
          </div>
        </div>
      </div>
    </section>
  
</template>


<style lang="scss" scoped>
  @use '../../../scss/partials/general'as *;
  @use '../../../scss/partials/vars'as *;
  section {
    padding-top: 50px;
    background-color: rgb(245, 247, 250);
    background-image: url('/public/images/maxcoach-shape-03.png');
    background-position-y: center;
    background-repeat: no-repeat;
    background-size:contain;
   
    .post-link {
      padding: 80px 0 40px 0;
      span {
        a {
          font-weight: bold;
          color: $orange-palette;
        }
      }
    }
  }
</style>