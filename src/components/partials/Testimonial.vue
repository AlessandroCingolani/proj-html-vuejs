<script>
import TestimonialCard from './TestimonialCard.vue';
 export default {
  name:'Testimonial',
  components:{
    TestimonialCard
  }
}
</script>

<template>
      <!-- slider da fare componente -->
      <section id="testimonials">
        <div class="title-section text-center ">
          <em>Testimonials</em>
          <h4>Why do people love me?</h4>
        </div>
      <!-- slider -->
      <div class="row w-100 h-100 justify-content-center ">
        <TestimonialCard/>
      </div>
    </section>
</template>


<style lang="scss" scoped>
  #testimonials {
    background-color: rgb(250, 248, 246);
      
    }
</style>