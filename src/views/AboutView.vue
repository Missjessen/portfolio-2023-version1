<template>
  <main>
    <!--top-container start-->
      <div class="top">
       <div class="top-container">
          
    <!--tekst top container start-->
     <div class="venstre-boks">
       <div class="tekst-top">
            <h6>OM MIG</h6>
        </div>
          
          <div class="info">
            <div class="venstre-tekst"> 
              <h1>Født</h1> 
              <h1>Bosiddende</h1> 
              <h1>Civilstand </h1>
              <h1>Børn</h1>
            </div>
            <div class="højre-tekst" >
              <h1>29. April 1987.</h1> 
              <h1>Esbjerg</h1> 
              <h1>Single </h1>
              <h1>2</h1>

            </div>
          </div>
        </div>
    
 
    <!--billede mig venstre-->
        <div class="billede">
          <img src="@/assets/mee7.jpg" alt="">
        </div>




      </div>
    </div>
    <!--top container slut-->

    <!--2 sektion start-->
     <div class="link-container">

      <!--link pil start-->
      <div class="pil-container">
        <div class="links">
            <a class="load-cv" href="https://indd.adobe.com/view/036b8602-76ff-40de-b0ce-dc8868fa4855"  target="_blank"><img src="@/assets/piltop2.png" alt="">
            <span class="link-text">
              Se CV
            </span>
          </a>

          <a class="video-cv" href="https://youtu.be/bgMTI5HhPV8" target="_blank"><img src="@/assets/piltop2.png" alt="">
            <span class="link-text">
             Se video cv
            </span>
          </a>
        </div>
      

      <!--børn image start-->
        <div class="børn">
          <img src="@/assets/ew.jpg" alt="">
        </div>
      </div>

    </div>
<!--2 sektion slut-->

<!--3. sektion start -->
    <!-- <div class="midt-2">
      <div class="midt-2-container">
        stuff
      </div>
    </div>  -->
    <div class="tekst">
    <div class="overskrift-krea">
            <h6 class="love">Jeg elsker at være kreativ på så mange måder!</h6>
          </div></div>
    
<!--4. sektion start --><!--skal udskiftes -->
<!-- <div class="grid-krea">
  <img
     src="@/assets/dåb.jpeg"
       class="rounded" />
  <img
     src="@/assets/kokken.jpeg"
       class="rounded" />
  <img
     src="@/assets/kage2.jpeg"
       class="rounded" />
  <img
     src="@/assets/lys.jpeg"
       class="rounded" />
  <img
      src="@/assets/sne.jpeg"
       class="rounded" />
</div> -->


<div class="sm:container sm:100px">
  <div class="about-carousel">
  <carousel :items-to-show="1.0" :wrap-around="true">
    <slide v-for="slide in images" :key="slide">
      <img :src="slide" alt="">
     <!--  <div class="carousel__item">{{ slide }}</div> -->
     <!--  <img :src="slide" alt=""> -->
   <!--    {{ slide }} -->
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</div>
</div>
<!--4. sektion slut -->

</main>

  
</template>


<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    let images = ref([
      '../../src/assets/sne.jpeg',
      '../../src/assets/dåb.jpeg',
      '../../src/assets/kage2.jpeg',
      '../../src/assets/kokken.jpeg',
      '../../src/assets/kage2.jpeg'
      
      ])

    return {
      images
    }
  }
  
}
</script>



<style scoped>

.about-carousel {
  height: 100px;
  /* width: 100vw; */
}


/* style back*/
main {
  background-color: #201f1f !important;
  margin-top:-110px; /* skub header op under menu */
  padding-top: 110px;
  position: relative;
}

/* top container start */
.top-container {
  width: 100%;
  display: flex;
  margin-left: 60px;
  
}
.tekst-top{
  height: 200px;
  width:80%;
  display: flex; 
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #f6f6f6;
  margin: 20px;
}
/* info tekst top */

.info {
  background-color: #847E7E;
  color: #FAD5DD;
  border-radius: 2rem;
  height: auto;
  padding:20px 30px;
  width: 80%;
  text-justify: distribute-all-lines;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f6f6f6;
  font-family: hoefler;
  font-size: 2rem;


}

.venstre-boks{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
}

.tekst-top h6{
  font-family: hoefler;
  font-size: 7rem;
}

.højre-tekst{
  text-align: end;
}
 
/* billede top */
.billede{
  height: 750px;
  padding:40px;
  margin: 0 0 0 100px;
}

.billede img {
  height:600px;
  border-color: black;
  border: 1px solid #f6f6f6 ;
  position: relative;
  z-index: 22323;
}
/* top container slut */

/* sektion 2 */

.pil-container {
  display: flex;
  width: 60%;
  justify-content: space-around;
}
.link-container {
  padding: 40px 10px;
  margin-top:-200px;
  z-index: 233;
  position: relative;
  background-color: #222222 !important;
  display: flex;
  width: 100%;
}

.links{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.link-text {
  display: flex;
  padding-left:10px;
  align-items: center;
}

.links a{
  width:280px;
  display: flex;
  padding: 10px 10px 10px 60px;
}

.links a img{
  height:80px;
}
/* billede børn*/
.børn img{
  height: 95%;
  margin: 0 0 40px 50px;
 }

.børn {
  width:30%;
}
/* sektion 2 slut*/


/* sektion 3 start beskrivelse
.midt-2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  
}
.midt-2-container {
  width:90%;
  background-color: #f6f6f6;
  height:200px;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  align-content: center;
  
  
} */
/*tekst bund*/
/* .love{
  display: flex;
  justify-content: center;
} */

.tekst{
  max-height: 20px;
}
.overskrift-krea h6{
  
  color: #f6f6f6;
  font-size: 70px;
  font-family: hoefler;
  font-weight: 20;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  
  
  
}
/* sektion 3 slut*/


/* sektion 4 start billeder krea*/

/* .grid-krea {
  display: flex;
  height: 390px;
  background-color: #222222;
  justify-items: space-between;
  padding: 20px;
  align-content: center;
  opacity: 80%;

 }
 .rounded{
  justify-content: space-between;
} */

/* sektion 4 slut*/


</style>