<template>
<header>
<nav>
   <div class="navbar">
     <div class="logo">
      <img src="../../assets/image/logo.png" alt="">
     </div>
     <ul class="menu">
        <li><a href="#" v-on:click="home" >Home</a></li>
        <li><a href="#" v-on:click="tasks">Tasks</a></li>
        <li><a href="#" v-on:click="category">Category</a></li>
        <li><a href="#" v-on:click="trash">Trash</a></li>
        <li><a href="#" v-on:click="logout" >Logout</a></li>
      </ul>
      <div class="search-box">
        <input type="text" placeholder="Search here...">
        <a href="#"><i class="fas fa-search"></i></a>
      </div>
   </div>
   </nav>
</header>
</template>


<style scoped>
header{
  height: 100vh;
  width: 150%;
  /* background: url("images/background.png") no-repeat; */
  background-position: center;
}
::selection{
  background: #a3f5ec;
}
header nav{
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 12;
}
.navbar{
  width: 90%;
  display: flex;
  margin: 20px auto 0 auto;
  align-items: center;
  justify-content: space-between;
}
  header nav .logo{
  height: 80px;
  width: 150px;
}
.logo img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
nav .menu{
  display: flex;
}
nav .menu li{
  list-style: none;
  margin: 0 10px;
}
nav .menu a{
  color: #2c3e50;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
nav .menu a:hover{
  color: #000;
}
nav .search-box{
  position: relative;
  height: 40px;
  width: 250px;
}
.search-box input[type="text"]{
  position: absolute;
  font-size: 18px;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  outline: none;
  color: #2c3350;
  border: 2px solid #2c3350;
  background: #f2f2f2;
  padding: 0 10px 0 40px;
}
.search-box a{
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: 20px;
  color: #2c3350;
  transform: translateY(-50%);
  border-right: 2px solid #2c3350;
  padding: 0 5px 0 0;
}
</style>

<script>

export default {
  name: "HeaderPage",
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({name:'Login'})
    },
    home(){
      this.$router.push({name:'Home'})
    },
    tasks(){
      this.$router.push({name:'Task'})
    },
    category(){
      this.$router.push({name:'Category'})
    },
    trash(){
      this.$router.push({name:'Trash'})
    }
  }
  }
</script>