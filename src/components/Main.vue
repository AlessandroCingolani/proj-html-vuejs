<script>
import Jumbotron from './partials/Jumbotron.vue';
 export default {
  name:'Main',
  components:{
    Jumbotron
  }
}
</script>

<template>
  <main >
   
    <Jumbotron/>
    <section>
      <div class="container-fluid">
        <div class="ac_sm-container text-center ">
          <i>Artist coaching</i>
          <h4>I understand what it takes to create.I can help you with</h4>
        </div>
      </div>
    </section>
  </main>
</template>


<style lang="scss">
  @use '../../scss/partials/general'as *;
</style>