<template>
    <main>
        <section class="top">
            <div class="midt-2">
        <div class="midt-2-container">
            <h5>Contact</h5>
            
            <p class="mail"> <img src="@/assets/mail5.png" alt="">
                Mail : Nsj@pc.dk</p>

            <p class="mobil"><img src="@/assets/mobil5.png" alt="">Phone : 31125132</p>
            <a href="https://www.linkedin.com/in/nanna-jessen-7a033048/"  target="_blank">
            <p class="linkedin"><img  src="@/assets/in5.png" alt="">linkedin </p></a>
            <a href="https://www.instagram.com/missjessen/"  target="_blank">
            <p class="ig"><img src="@/assets/ig5.png" alt="">Instagram  </p></a>
        
        
            </div>
            </div>
        </section>
    </main>

</template>

<script></script>

<style scoped>
.top {
   background-color:  #887A7D50;
}
.midt-2 {
    display: flex;
    justify-content: center;
    background-color: #887A7D50;
    margin-top: -70px;
    padding-top: 70px;

}
.midt-2-container{
    background-color: #f6f6f6;
    min-height: 80vh;
    width:60%;
    height: 400px;
    border-radius: 10px;
    padding:20px;
    font-family: hoefler;
    flex-direction: row;
    border: solid #FAD5ED;

margin: 30px;
  

}

.midt-2-container h5 {
    font-size: 70px;
    display: flex;
    justify-content: center;
    font-weight: 900;

}

.midt-2-container p{
    font-size: 30px;
    margin: 0 0 0 5rem;
   
    color: #FAD5ED;
    
}

.midt-2-container img{
  width: 30px;
}

.mobil{
    align-content: baseline;
}
.mobil img{
    width: 40px;
    opacity: 90%;
}
.mail img{
    width: 70px;
    opacity: 90%;

}

.linkedin img{
    width: 70px;
    opacity: 90%;
}
.ig img{
    width: 70px;
    opacity: 90%;
}
</style>