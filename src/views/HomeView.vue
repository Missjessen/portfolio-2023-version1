<template>
  <div class="bigLogo"></div>
  <main>
    <div class="hero">
   
      <div class="hero-container">

    
        <div style="width:40%">

</div>
        
        <div class="heroo-container-rigth">
          <h2>
            Hi there!
          </h2>
          <p>
            I am creative designer for plateforms.
        </p>
          <p>
            I bring teams & ideas to life, in a new way.
          </p>
          <span class="hero-knap">
            
            
            <img src="@/assets/piltop2.png" alt=""> <!-- icon pil -->
            <span class="am1">ABOUT ME</span>
          </span>
          <span class="hero-knap">
            <img src="@/assets/piltop2.png" alt=""> <!-- icon pil -->
            <span class="am1">DOWNLOAD CV</span>
          </span>
        </div>
     
      </div>

    </div>
  
  <!--   <img id="frontpage-image" src="@/assets/cover99.jpg" alt="Circle image"> -->
   <section class="what-i-do">
    <div class="what-i-do-container">
      <div class="widc-left">
        <h3 id="wid-h3">WHAT I <span id="wid-h3-color2">DO</span></h3>
        <a id="wid-h3-a" href="/"><img src="@/assets/pil-44.png" alt=""> Artboard</a>
      </div>
      <div class="widc-right">
        <div class="widc-right-box">
          <img class="" src="@/assets/video25.png" alt="">
          <h3>Video</h3>
          <p>Shooting and editing videos</p>
          <p>and designing visual effects.</p>
          </div>
        
          <div class="widc-right-box">
            <img class="" src="@/assets/webd25.png" alt="">
            <h3>Web designs</h3>
            <p>Designs and creates web designs,</p> 
            <p>based on a client's preferences. </p>
            </div>

        <div class="widc-right-box">
          <img class="" src="@/assets/ux25.png" alt="">
          <h3>UX & UI</h3>
          <p>creative design for user </p>
          <p>experience and user interface.</p>
          </div>
        <div class="widc-right-box">

          <img class="" src="@/assets/branding27.png" alt="">
          <h3>Branding & Rebranding</h3>
          <p>Give new an old brand, new life</p>
          <p>creating a stong perception of your company.</p>
        </div>
      </div>
    </div>
   </section>

   <section class="work-with">
    <div class="work-with-container">
      <div class="work-left">
        <h1>TOOLS</h1>
        <h3 id="work-h3">Work with</h3>
        <p>Daily I design and read edit with the adobe package </p>
        <p>when doing video editing, effects, designing web pages</p> 
        <p> print, vector graphics and promotion design. Can code </p>
        <p>in visuel studio and use the various different JavaScript</p>
        <p>frameworks</p>
        
      </div>
      <div class="work-right">
        <div class="work-right-box1">
          <img class="" src="@/assets/id5.png" alt="">
          </div>
        
          <div class="work-right-box1">
            <img class="" src="@/assets/pr5.png" alt=""></div>

        <div class="work-right-box1">
          <img class="" src="@/assets/ps5.png" alt=""></div>

        <div class="work-right-box1">

          <img class="" src="@/assets/xd5.png" alt=""></div>
      
          <div class="work-right-box1">
          <img class="" src="@/assets/au5.png" alt="">
          </div>
        
          <div class="work-right-box1">
            <img class="" src="@/assets/ai5.png" alt=""></div>

        <div class="work-right-box1">
          <img class="" src="@/assets/github.png" alt=""></div>
        <div class="work-right-box1">

          <img class="" src="@/assets/visuel.png" alt=""></div>
        </div>
      
      
    </div>
   </section>
  </main>




<!-- <img alt="nj-logo" class="logo" src="@/assets/logo-web3.png" width="100" height="100" />
 --></template>


<style scoped>

.hero {
  background-image: url("@/assets/cover99.jpg"); 
  background-repeat: no-repeat;
  background-attachment: center;
  background-position: center top;
  background-size: cover;
  height: 500px;
  width: 100vw;
  margin-top:-110px; /* skub header op under menu */
  padding-top: 110px;
}
.hero img {
  height: 100%;
}


.hero-container {
 /*  margin-top:50px; */
  height:100%;
  display: flex;
  align-items: center;
  width:100%;
}

.heroo-container-rigth {
 width:60%;
 font-family: hoefler;
color: #ededed;
padding-left: 300px;
}

.heroo-container-rigth h2{

}
.heroo-container-rigth p{
  font-size: 25px;
}



.hero-knap  {
display: flex;
align-items: baseline;
}


.hero-knap img {
  height:40px;
}
.hero-knap2 img {
  height:40px;
}

.what-i-do-container {
  color:#ededed;
  display: flex;
  border: #ededed;
}
.work-with-container{
  display: flex;
  color: #ededed;
  background-color: #887A7D;
  padding: 20px;
}
.widc-left { /* Skub indholdet inde i boxen */
  width:40%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-left: 80px;
  
} 

.work-left{
  width:50%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  
  font-family: hoefler;
  font-size: 70px;
  margin-left: 20px;
  padding-left: 80px;

  
  

}
.work-left h1{
  font-size: 20px;
  color: #FAD5DD;
  
  
  
}

.work-left p{
  font-size: 17px;
}

.widc-left a img { /* størrelse på pilen 45 */
  height:40px;
  margin-top: 30px;
}

.work-left {

}

.what-i-do {
  height:auto; /** størrelse på området */
  background-color: #111;
  font-family: hoefler;
  font-size: 70px;
  
  
}

#widc-left a {
  color:#ededed;
  display: flex;
  font-family: hoefler;
font-size: 70px;
}
#wid-h3-color2 {
  color: #F899D7;
  


  
}

.widc-right {
  display: flex;
  flex-wrap: wrap;
  width:60%; /* skift for at gøre box brederererere*/
  font-size: 25px;
  font-display: flex-start;
  padding-right: 70px;


}

.work-right{
  display: flex;
  flex-wrap: wrap;
  width:50%; /* skift for at gøre box brederererere*/
  
  opacity: 80%;
  


}
#wid-h3-a{
  display: flex;
  font-size: 15px;
  align-items: center;
  
 
}

#wid-h3-a img {
  height: 80px;
  margin-right: 10px;
}

  
  

.widc-right-box {
  width:50%;
  box-sizing: border-box;
  height:150px;
  background-color:#111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}

.widc-right-box h3 {
  font-size: 17px;
}
.widc-right-box p{
  font-size: 15px;
}

.work-right-box1 {
  width:25%;
  box-sizing: border-box;
  height:100px;
  background-color:#111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 4px;
  margin: 4px;
  width: 160px;
  border-radius: 10%;
  
  

  

}

.widc-right-box img {
  height: 60px;
  padding: 10px;

font-size: small;
 

}

.work-right-box1 img
{
  height: 55%;
}


@media only screen and (max-width: 600px) {
  .heroo-container-rigth{
    padding-left: 0px;
  }
  .what-i-do{
    font-size: x-large;
    
   
  }






  
}
</style>
