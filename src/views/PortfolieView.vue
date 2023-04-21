<template>
  <div class="about">

  <div class="hero"> <!-- kopi til ny side for top top-->
    <video src="../assets/artboard99.mp4" autoplay height="500"></video>
  </div> <!-- kopi til ny side for top top-->
 
   <br>
    <h2 class="top1"> Projects </h2>
   <div class="portfolio-container">
   <div class="portfolio-item"  v-for="item in state" :key="item">
    <img :src="item.image" alt="image" width="200" height="200">
    <div class="info">
      <p class="category" :class="item.category">
        {{ item.category }}
      </p>
      <h4>{{ item.title }} </h4>
      <p class="des2">
        {{ item.description }}
      </p>
    </div>
      
    <div class="pil">
      <!-- part 3 -->
      <RouterLink :to="{ name:'portfoliodetail', params: { id: item.id }}" id="pil-bot"><img id="pilpil" src="@/assets/pil-45.png" alt=""></RouterLink> 
    </div>
     
    </div>
  </div>


  </div>
</template>

<script setup>
// part 0 - showcase class binding with isActive
import { ref } from 'vue'
// part 1 - get state from portfoliodb
import portfoliodb from '../modules/portfoliodb';

const isActive = ref(true)

// part 1 - get state from portfoliodb
const { state  } = portfoliodb()

</script>

<style scoped>
/* copy til ny side for at have top top start */ 
.hero {
  position: relative;
  background-repeat: no-repeat;
 /*  background-attachment: center; */
  background-position: center top;
  background-size: cover;
  height: 390px;
  width: 100vw;
  overflow: hidden;
  margin-top:-110px; /* skub header op under menu */
  /* padding-top: 110px; */
  opacity: 75%;
}

.pil{
  width: 100px;
  min-height: 100%;
    align-items: end;
  justify-items: end;
 

   display: block;
   display: flex;
  
}

#pil-bot{
  display: flex-end;
  justify-items: end;
  height:40px;
   display: flex;
}

.hero video {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%    !important;
  height: auto   !important;
}
/* copy til ny side for at have top top slut */ 

  .about {
    min-height: 100%;
   }

  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center; 
  }
  .portfolio-item {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    color: #f6f6f6;
    margin-left: 20px;
   
    width: 50%;
    /* Mere style for at ændre udseende af indholdet */
    background-color: #6A6665;
    display: flex;
    justify-content: space-between;
  }


  .portfolio-item:nth-child(odd) {
  background: #000000;
}


  .category {
    display: inline-block;
    padding: 0.25rem 0.5rem;
   
    font-size: 17px;
    font-weight: bolder;


    text-transform: uppercase;
  }

  h4 {
    padding: 0.25rem 0.5rem;
  }

  #pilpil{
    max-width:50px;
  }

  .Web {
    color: #cd5c0b;
    border-left: 2px solid #cd5c0b;
  }

  .Video {
    color: #23b062;
    border-left: 2px solid #23b062;
  }

  .Photoshop {
    color: #2f4ccb;
    border-left: 2px solid #2f4ccb;
  }

  .incomplete {
    color: #bc0c0c;
  }

  .complete {
    color: #14b314;
  }

  .des2 {
    font-family: hoefler;
    font-size: 1rem;
   max-width: 500px;

   margin: 0 20px 0 20px;

  }

  .top1{
    font-size: 90px;
    font-family: hoefler;
    color: #f6f6f6;
    font-weight: lighter;
    opacity: 60%;
    text-align: center;
  }


</style>
