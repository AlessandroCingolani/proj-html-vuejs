<script>
import { store } from '../../data/store';
 export default {
  name:'Newsletter',
  data(){
    return {
      store,
      mailNews:''
    }
  },
  props:{
    title:String
  },
  methods:{
    getMail(){
      store.newsletter.push( this.mailNews)
      this.mailNews = ''
      console.log(store.newsletter);
    }
  }
}
</script>

<template>
  <!-- Newsletter -->
  <section id="newsletter"> 
      <div class="background-left"></div>
      <div class="background-rigth"></div>
      <div class="ac_sm-container h-100">
        <div class="row h-100">
          <div class="col-4 h-100 d-flex align-items-center">
            <h4>{{ title }}</h4>
          </div>
          <div class="col-8 h-100 d-flex align-items-center">
            <div class="mail-box">
                <input @keyup.enter="getMail" v-model.trim="mailNews" type="email" id="email" name="email" placeholder="Your e-mail" style="color:white">
                <i @click="getMail" class="fa-solid fa-arrow-right-long text-end"></i>
            </div>
          </div>
        </div>
      </div>

    </section>
</template>


<style lang="scss" scoped>
 @use '../../../scss/partials/general' as *;
 @use '../../../scss/partials/vars' as *;
  // newsletter
  #newsletter {
      height: 150px;
      background-color: rgb(36, 65, 134);
      color: white;
      position: relative;
      .background-left {
        width: 20%;
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        background-image: url('/images/artist-shape-color-paint-top-left.png');
        background-position: center;
        background-size: cover;
      }
      .background-rigth {
        width: 20%;
        height: 100%;
        position: absolute;
        top:0;
        right: 0;
        background-image: url('/images/artist-shape-color-paint-bottom-right.png');
        background-position: center;
        background-size: cover;
      }
      .mail-box {
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.387);
        span {
          width: 10%;
        }
        input {
          width: 85%;
          border:none;
          background-color:  rgb(36, 65, 134);
          padding: 5px;
          border-radius: 0;
          text-shadow: none;
          box-shadow: none;
          outline: none;
          &::placeholder{
            color: white;
          }
        }
        i{
          cursor: pointer;
          width: 15%;
          font-size: 1.3rem;
        }
        
      }
    }
</style>