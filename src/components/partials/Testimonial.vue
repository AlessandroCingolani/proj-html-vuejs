<script>
import Carousel from './Carousel.vue';
 export default {
  name:'Testimonial',
 components:{
    Carousel,
  },
  props:{
    title:String,
  },
}
</script>

<template>
      <!-- slider da fare componente -->
      <section id="testimonials">
        <div class="title-section text-center ">
          <em>{{ title }}</em>
          <h4>Why do people love me?</h4>
        </div>
      <!-- slider -->
      <div class="row w-100 justify-content-center">
        <Carousel/>
      </div>
    </section>
</template>


<style lang="scss" scoped>
  #testimonials {
    background-color: rgb(250, 248, 246);
      
    }
</style>