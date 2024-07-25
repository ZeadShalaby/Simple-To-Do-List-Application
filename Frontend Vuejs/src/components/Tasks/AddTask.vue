<script setup>
import HeaderPage from '../Header-Footer/HeaderPage.vue';
</script>

<template>

<!DOCTYPE html>
<!-- Created By CodingLab - www.codinglabweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title> Add Task </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
 <header>
 <HeaderPage/>
   <div class="content">
     <div class="text-content">
       <div class="text">Add </div>
       <div class="name">task</div>
       <div class="job">
         <div class="job">
           <span>And its ,</span>
            <div class="typing-text">
              <span class="one">Tasks,</span>
              <span class="two">To-Do-List.</span>
            </div>
          </div>
       </div>
    <div class="buttons">
   <button>About Us</button>
   <button>Follow Us</button>
 </div>
     </div>
     <div class="girl">
       <img src="../../assets/image/image (2).png" alt="">
     </div>
   </div>
   <div class="media-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
    <a href="#"><i class="fab fa-pinterest"></i></a>
  </div>
 </header>
</body>
</html>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
}
header{
  height: 100vh;
  width: 100%;
  /* background: url("images/background.png") no-repeat; */
  background-position: center;
}
::selection{
  background: #a3f5ec;
}


.text-content{
  position: absolute;
  top: 33%;
  left: 7%;
  z-index: 12;
}
header .text-content .text{
  font-size: 27px;
  color: #2c3350;
}
header .text-content .name{
color: #2c3350;
 font-size: 75px;
 font-weight: 600;
 margin: -20px 0 0 -3px;
}
header .text-content .job{
 color: #2c3350;
 font-size: 40px;
 margin: 5px 0;
 margin-top: -4px;
 display: flex;
}
.text-content .typing-text{
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid #1de2d1;
  animation: typing 5s steps(15) infinite;
}
@keyframes typing{
  0%{
    width: 0ch;
  }
  50%{
    width: 15ch;
  }
  100%{
    width: 0ch;
  }
}
.text-content .job .one{
  color: #1de2d1;
}
.text-content .job .two{
  color: #1de2d1;
}
.buttons{
  margin: 20px 0 0 50px;
}
.text-content .buttons button{
  outline: none;
  margin: 0 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-image: linear-gradient( 135deg, #2AFADF     10%, #C346C2 100%);
}
.buttons button:hover{
  transform: scale(0.97);
}
.content .girl img{
  position: absolute;
  height: 90%;
  bottom: 0;
  right: 50px;
  position: absolute;
}
header .media-icons{
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 40px;
  bottom: 40px;
}
.media-icons a{
 margin-top: 8px;
 font-size: 20px;
 font-weight: 500;
 text-decoration: none;
 opacity: 0.7;
 color: #2c3350;
 transition: all 0.3s ease;
}
.media-icons a:hover{
 opacity: 1;
}
</style>



<script>
export default {
  name: "AddTask",
  mounted(){
    let user = localStorage.getItem('users');
    console.log(user);
    if(!user){
      this.$router.push({name:'Login'})
    }
  }
};
</script>


