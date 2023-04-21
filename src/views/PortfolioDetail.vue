<template>
  <div>
     <button @click="goBack()">Go Back</button>
    <div>
      <div class="portfolio-item" v-if="portfolioDetails" >
        <h4 class="top">{{ portfolioDetails.title }}</h4>
        <h6 class="top1">{{ portfolioDetails.subtitle }}</h6>

        <div class="portdetail-top">
          <p class="des">
          {{ portfolioDetails.description }}
        </p>
        <img :src="portfolioDetails.image" alt="image" width="150" height="100">
        
          
        </div>
        <p class="category" :class="portfolioDetails.category">
          {{ portfolioDetails.category }}
        </p>
        <br>
      </div>

      

      <div v-else>Loading...</div>
      
     
     
    </div>
  </div>

  
</template>


<script setup>
import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb';

//part 4 - router to go back
import { useRouter } from 'vue-router'
const router = useRouter()

  // part 1 - get state from portfoliodb
  const { state  } = portfoliodb()

  // part 2 - get id from route
  const props = defineProps({
    id: String
  })
  const { id } = toRefs(props)

  // part 3 - filter state on id -> must be computed to work with v-for
  const portfolioDetails = computed(() => { 
    return state.value.find(item => item.id == id.value)
  })

  const goBack = () => {
    router.go(-1)
  } 
</script>

<style scoped>

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
 
   background-color: #000000;
    max-width: 100vw;
    font-family: hoefler;
    
  }
  .portdetail-top {
    display: flex;
    width:80%;
    margin:0 auto;

  }

  .portdetail-top p {
    width:50%;
    padding: 0 20px;
  }

  .portdetail-top img {
    width:50%;
    padding: 0 20px;
  }

  h4 {
    font-size:40px;
    color:#f6f6f6;
  }

  h6 {
    margin:0 0 30px 0;

  }

  .top{
    font-size: 50px;
    font-weight: bold;
    font-family: hoefler;
  }

  .des{
    font-family: hoefler;
    font-size: 30px;
    font-weight: lighter;
    color: #f6f6f6;



  }

  .top1{
    font-family: hoefler;
    font-size: 50px;
    color: #EDCED3;

  }

  .category {
    display: inline-block;
    padding: 0.25rem 0.5rem;
   
    font-size: 12px;
    font-weight: 700;


    text-transform: uppercase;
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


</style>