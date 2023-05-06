<template>

  <!-- After effekt klip-->
  <div class="hero-film">
    <div class="hero"> 
      <video src="../assets/portfolie_2.mp4" autoplay height="500"></video>
    </div> 
 
  <!--2 sektion-->
   <br>
   <div class="tekst-container">
    <h2 class="tekst"> PROJEKTER </h2>
  </div>

  <!--portfolio S-->
    <div class="portfolio-container">
      <div class="portfolio-item"  v-for="item in state" :key="item">
       <img :src="item.image" alt="image" width="100" height="100">
        <div class="info">
          <p class="category" :class="item.category">
            {{ item.category }}
          </p>
          <h4>{{ item.title }} </h4>
          <p class="des2">
            {{ item.description }}
          </p>
    </div>
      
    <!--videre pil-->
      <div class="pil">
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

/* top hero */ 
.hero-film {
   min-height: 100%;
   }
.hero {
  position: relative;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  height: 390px;
  width: 100vw;
  overflow: hidden;
  margin-top:-110px; /* skub header op under menu */
 }
.hero video {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   width: 100%    !important;
   height: auto   !important;
}

/*sektion 2 */
.tekst{
    font-size: 70px;
    font-family: hoefler;
    color: #f6f6f6;
    font-weight: lighter;
    opacity: 90%;
    text-align: center;
  }

/*link pil*/
.pil{
   width: 100px;
   min-height: 100%;
   display: block;
   display: flex-end;
   /* align-items: flex-end;
   justify-items: flex-end; */
  }
#pil-bot{
   display: flex-end;
   justify-items: end;
   height:40px;
   display: flex;
}
#pilpil{
    max-width:50px;
  }

/*java container*/
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
    border: 1px solid #7c7474ba;
    color: #6d6d6d;
    margin-left: 20px;
   
    width: 25%;
    /* Mere style for at ændre udseende af indholdet */
    background-color: #e9e6e6;
    /* display: flex; */
    justify-content: space-between;
    height: 500px;
  }


   .portfolio-item:nth-child(odd) {
   background: #e9e6e6;
}

/*javascript teskt indhold*/
  .category {
    display: inline-block;
    padding: 0.25rem 0.5rem 0 1.3rem;
    font-size: 17px;
    font-weight: bolder;
    text-transform: uppercase;
  }

  h4 {
    padding: 0.25rem 0.5rem 0.5rem 1.3rem;
    font-style: italic;
  }

  .des2 {
   font-family: hoefler;
   font-size: 1rem;
   max-width: 500px;
   margin: 0 20px 0 20px;

  }


</style>
