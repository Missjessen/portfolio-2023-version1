<template>
  <main>
    <div class="top">


      <div class="top-container">
        
        <div class="tekst-top">
          <div class="l-boks">
            <h6>About me</h6>
          </div>
          
          <div class="info">
            <div class="venstre-tekst"> 
              <h1>Born</h1> 
              <h1>Leving</h1> 
              <h1>Cevilstand </h1>
              <h1>Children</h1>
            </div>
            <div class="højre-tekst" >
              <h1>29. April 1987.</h1> 
              <h1>Esbjerg</h1> 
              <h1>Single </h1>
              <h1>2</h1>

              </div>
          

          </div>
        </div>

        <div class="billede">
          <img src="@/assets/meee.jpg" alt="">
        </div>




      </div>
    </div>

    <div class="midt">
      <div class="midt-container">
        <div class="links">
          <a class="load" href=""><img src="@/assets/piltop2.png" alt="">View cv</a>
          <a class="video" href=""><img src="@/assets/piltop2.png" alt="">Watch video cv</a>
        </div>
        <div class="børn">
          <img src="@/assets/ew.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="midt-2">
      <div class="midt-2-container">
        stuff
      </div>
    </div>
    <div class="b-boks">
            <h6>A I love being creative in so many ways!</h6>
          </div>
    

<div class="grid grid-cols-3 gap-4">
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="300"
    src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="500"
    src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="300"
    src="https://tecdn.b-cdn.net/img/new/standard/city/045.webp"
    class="rounded" />
  <img
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation="[fade-in_1s_ease-in-out]"
    data-te-animation-delay="500"
    src="https://tecdn.b-cdn.net/img/new/standard/city/046.webp"
    class="rounded" />
</div>

   
  </main>

  
</template>



<style scoped>

main {
  background-color: #6a6a6a !important;
  margin-top:-110px; /* skub header op under menu */
  padding-top: 110px;
position: relative;
}

.top {

}
.container-top{
 width: 100vw;

}

.top-container {
  /* b  ackground-color: #6A6665; */
  width: 100%;
  display: flex;
  
  
}

.tekst-top{
 width: 50%;

 display: flex;
 flex-direction: column;
 align-content: center;
 flex-wrap: wrap;
}


.l-boks{
  height: 200px;
  width:80%;
  display: flex; 
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #f6f6f6;
  
 
}
.l-boks h6{
  font-family: hoefler;
font-size: 4rem;
}

.info {
  background-color: #847E7E;
  color: #FAD5DD;
  border-radius: 2rem;
  height: auto;
  padding:20px 30px;
  width: 60%;
  text-justify: distribute-all-lines;
  display: flex;
  justify-content: space-between;
  border: 1px solid #525050;
  font-family: hoefler;
  font-size: 1rem;

}

.b-boks{

  color: #f6f6f6;
font-size: 50px;
font-family: hoefler;
font-weight: 900;
display: flex;
text-align: center;
align-content: center;
}
.venstre-tekst{}

.højre-tekst{
  text-align: end;

}

.billede{
  height: 750px;
 /*  width: 40%; */

  padding:40px;
}

.billede img {
  border-radius: 2rem;
  height:700px;
  border-color: black;
  border: 1px solid ;
  position: relative;
  z-index: 22323;
}

.links{
  
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.links a{
  width:280px;
  display: flex;
/*   flex-direction: column; */
/*   justify-content: center; */
  padding: 10px 10px 10px 60px;
}

.links a img{
  height:80px;

}
.load{
  display: none;
}

.børn {
  width:25%;

}
.børn img{
  height: 110%;
  width: 190%;
  border-radius: 2rem;




}

.midt {
  padding: 40px 10px;
  margin-top:-200px;
  z-index: 233;
  position: relative;
  background-color: #222222 !important;
  display: flex;
  width: 100%;

}

.midt-container {

  display: flex;
  width: 60%;
  justify-content: space-around;
}


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


}





</style>