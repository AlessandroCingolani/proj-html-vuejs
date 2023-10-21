<script>
 export default {
  name:'Countdown',
  data() {
    return {
      clock: '00:00:00',
    }
  },
  methods:{
    printClock(){

      // Aggiungi a new date la data della fine countdown e ne prendi il tempo
      let countDownDate = new Date("Oct 26, 2023 00:00:00").getTime(); 
      // imposto let timer per fare il clear interval al momento che diventa zero
      let timer = setInterval(() => {
        // prendo ora di data ora di adesso e faccio la differenza
      let now = new Date().getTime();
      let distance = countDownDate - now;
      
      // formule per estrapolare giorni more minuti e secondi convertendo a stringa e aggiongendo con pad uno zero 
      let days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
      this.clock = ` ${days} : ${hours} : ${minutes} : ${seconds}`
      // Countdown output
      // console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s"); 
      if (distance < 0) {
         clearInterval(timer);
         // Text at the end of the countdown
         console.log("Too late!") 
      }
      }, 1000)
    }
  },
  
  mounted(){
    this.printClock();
  }
}
   
</script>


<template>
  <div class="timer"><i class="fa-regular fa-clock"></i>{{ clock }}</div>
</template>
 
<style lang="scss" scoped>
 @use '../../../scss/partials/general' as *;
 @use '../../../scss/partials/vars' as *;

 
</style>