<script>
import { store } from '../../data/store';
 export default {
  name:'WorkTogether',
  data(){
    return {
      store
    }
  },
  props:{
    title:String
  }
}
</script>

<template>
  <!-- lavoriamo insieme -->
  <section id="work-together">
      <div class="rotate-text">
        <span class="rotate">Events</span>
      </div>
      <div class="ac_sm-container">
        <div class="title-section text-center">
          <em>{{ title }}</em>
          <h4>Let's Work Together</h4>
        </div>
        <div class="row w-100">
          <div 
          v-for="(card,index) in store.workTogheter" :key="card + index"
          class="col-6">
          <div class="card mb-3" >
            <div :class="{'flex-row-reverse': index >= store.workTogheter.length - 2}" class="row g-0">
              <div class="col-md-4">
                <img :src="`/images/${card.imgCourse}`" class="img-fluid" alt="...">
              </div>
              <div class="col-md-8">
                <div :class="{'text-end': index >= store.workTogheter.length - 2}" class="card-body h-100 d-flex flex-column justify-content-center">
                  <span class="date">{{ card.date }}</span>
                  <h6>{{ card.name }}</h6>
                  <span class="location"><i class="fa-solid fa-location-dot"></i>{{ card.location }}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
 @use '../../../scss/partials/general' as *;
 @use '../../../scss/partials/vars' as *;
   // lavoriamo insieme
   #work-together {
      position: relative;
      .rotate-text {
        position: absolute;
        bottom: 20%;
        left: -100px;
        transform: translate(-50% , -50%);
        transform: rotate(90deg);
        }
      .card {
        border: none;
        .card-body{
          padding: 0 30px;
          .date {
            font-size: .8rem;
            color: rgba(128, 128, 128, 0.644);
          }
          h6 {
            font-weight: 600;
          }
          .location{
            font-size: .7rem;
            color: rgba(128, 128, 128, 0.487);
            i {
              padding: 0 5px;
            }
          }

        }
      }
    }
</style>