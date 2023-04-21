

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template >
  
  <header>
    
<!--     <img alt="nj-logo" class="logo" src="@/assets/logo-web3.png" width="100" height="100" />
 -->
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/portfolie">Portfolie</RouterLink>
        <div class="logo">
          <img alt="nj-logo" class="logo-img" src="@/assets/logo-web3.png" :class="{bigLogo: logoSize, smallLogo: !logoSize}" style="height: auto" />
        </div>
      
        <RouterLink to="/about">About me</RouterLink>
        <RouterLink to="/kontakt">Kontakt</RouterLink>
      </nav>
    </div>
  </header>

  <!-- must do this for fade out to work -->
  <RouterView  v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </RouterView>

<!-- <Transition mode="out-in" name="slide-fade"> -->  <!-- no name, slide-fade, bounce -->
<!--     <RouterView />
  </Transition>   -->

</template>


<style scoped>
.bigLogo{
  width: 100px;
}
.smallLogo{
  width: 50px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


/* v-transition end */


header {
  line-height: 2;
  height: 50px;
  max-width: 100%;
  display: contents;
  margin: 5px;
  padding-top: 10px;
  position: relative;
  z-index: 23039;
   /*  background-color:var(--vt-c-black-soft) */
}

.logo {
  display: block;
  margin: 0 auto; /* 2rem */
  height:40px;
  position: relative

}

.logo-img {
 
  height:100px
}

nav {
  width: 100%;
  font-size: 15px;
  
  text-align: end;
  /* margin-top: 2rem; */
  position: relative;
  z-index: 123900123;
  
}

nav a.router-link-exact-active {
  /* color: var(--color-text); */
  
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  height:35px;
  color:#FAD5DD;
 /*  border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    height:50px !important ; /* Added */
    place-items: center; 
    /* padding-right: calc(var(--section-gap) / 2); */ /* changed */
    width: 100%;
  }

  .logo {
   /*  margin: 0 50rem 0 0; */
   display: flex;
   align-items: center;
   place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;  /* changed */
    height:50px;
  }

  nav {
    display: flex;
    text-align: left;
    
    margin-left: -1rem;
    font-size: 1.5rem;
font-family: hoefler;

    padding: 0.25rem 0;
    margin-top: 1rem;
  }
}
</style>
