<script setup>
import HeaderPage from '../Header-Footer/HeaderPage.vue';
</script>

<template>

<!DOCTYPE html>
<!-- Created By CodingLab - www.codinglabweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title> Category </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
 <header>
 <HeaderPage/>


<div class="containers">
    <div class="box" v-for="item in category" :key="item.id">
  <div class="card" >
    <div class="imgBx">
      <img :src="`http://localhost:8000${item.photo}`" alt="User Avatar" />
    </div>
    <div class="contentBx">
      <h2>{{ item.name }}</h2>
      <br>
      <a href="#" @click="TaskCat(item.id)">Show Now</a>
    </div>
  </div>
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

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


*{
  font-family: 'Poppins', sans-serif;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}


.box{
width: 350px;
padding: 20px;

float: left;
margin: 20px;
}
.containers{
  margin-top: -550px;
  width: 1200px;
}

.containers .card{
  position: relative;
  width: 320px;
  height: 450px;
  background: #3e92ce;
  border-radius: 20px;
  overflow: hidden;
}

.containers .card:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #862baf;
  clip-path: circle(150px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.containers .card:hover:before{
  clip-path: circle(300px at 80% -20%);
}

.containers .card:after{
  content: 'Nike';
  position: absolute;
  top: 30%;
  left: -20%;
  font-size: 12em;
  font-weight: 800;
  font-style: italic;
  color: rgba(255,255,25,0.05)
}

.containers .card .imgBx{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.containers .card:hover .imgBx{
  top: 0%;
  transform: translateY(0%);
    
}

.containers .card .imgBx img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ;
  width: 200px;
  border-radius: 30px;
  height: 150px;
}

.containers .card .contentBx{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.containers .card:hover .contentBx{
  height: 210px;
}

.containers .card .contentBx h2{
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
}

.containers .card .contentBx .size, .container .card .contentBx .color {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;
}

.containers .card:hover .contentBx .size{
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.containers .card:hover .contentBx .color{
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.containers .card .contentBx .size h3, .container .card .contentBx .color h3{
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.containers .card .contentBx .size span{
  width: 26px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  display: inline-block;
  color: #111;
  background: #fff;
  margin: 0 5px;
  transition: 0.5s;
  color: #111;
  border-radius: 4px;
  cursor: pointer;
}

.containers .card .contentBx .size span:hover{
  background: #9bdc28;
}

.containers .card .contentBx .color span{
  width: 20px;
  height: 20px;
  background: #ff0;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.containers .card .contentBx .color span:nth-child(2){
  background: #9bdc28;
}

.containers .card .contentBx .color span:nth-child(3){
  background: #03a9f4;
}

.containers .card .contentBx .color span:nth-child(4){
  background: #e91e63;
}

.containers .card .contentBx a{
  display: inline-block;
  padding: 10px 20px;
  background: #740b9e;
  border-radius: 20px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #ffffff;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  margin-top: 0;
}

.containers .card:hover .contentBx a{
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
  
}

/*************************************/
/*************************************/
/*************************************/
/*************************************/
/*************************************/


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
import axios from 'axios';

export default {
  name: "CategoryList",
  data() {
    return {
      category: [],
      cat:"",

    };
  },
  methods:{
    TaskCat(id) {
      localStorage.setItem('cat', JSON.stringify(id));
      this.$router.push({ name: 'Task' });
    }
  },
  
  async mounted() {
    let user = JSON.parse(localStorage.getItem('users'));
    if (!user) {
      this.$router.push({ name: 'Login' });
      return;
    }

    try {
      const result = await axios.get("http://localhost:8000/api/cat/retrieve/categories", {
        params: {
              auth_token:user.token,
            }
      });
      this.category = result.data.categories;
      console.log(result.data);
    } catch (error) {
      console.error("There was an error retrieving the tasks:", error);
    }
  },
};
</script>

