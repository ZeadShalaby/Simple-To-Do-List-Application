<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToRegist = () => {
  router.push('/regist');
};
</script>

<template>
  <body>
    <div style="margin-left: 500px;">
    <div class="wrapper">
      <div class="title"><span>Login Form</span></div>
        <div class="row">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Email or username" v-model="field" required />
        </div>
        <div class="row">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password"  v-model="password" required />
        </div>
        <div class="pass"><a href="#">Forgot password?</a></div>
        <div class="row button">
          <input type="submit" value="Login" v-on:click="signIn" />
        </div>
        <div class="signup-link">Not a member? <a href="#" @click="goToRegist">Signup now</a></div>
    </div>
  </div>
  </body>
</template>

<style >

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0c3131;
  overflow: hidden;
}
::selection {
  background: rgba(26, 188, 156, 0.3);
}
.wrapper {
  margin-top: -20px;
  margin-right: 820px;
  max-width: 500px;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}
.wrapper .title {
  height: 120px;
  background: #0168a0db;
  border-radius: 5px 5px 0 0;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper  {
  padding: 25px 35px;
}
.wrapper  .row {
  height: 60px;
  margin-top: 15px;
  position: relative;
}
.wrapper  .row input {
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 70px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  font-size: 18px;
  transition: all 0.3s ease;
}
 .row input:focus {
  border-color: #0168a0db;
}
 .row input::placeholder {
  color: #999;
}
.wrapper  .row i {
  position: absolute;
  width: 55px;
  height: 100%;
  color: #fff;
  font-size: 22px;
  background: #0168a0db;
  border: 1px solid #16a085;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper  .pass {
  margin-top: 12px;
}
.wrapper  .pass a {
  color: #16a085;
  font-size: 17px;
  text-decoration: none;
}
.wrapper  .pass a:hover {
  text-decoration: underline;
}
.wrapper  .button input {
  margin-top: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding-left: 0px;
  background: #0168a0db;
  border: 1px solid #16a085;
  cursor: pointer;
}
 .button input:hover {
  background: #12876f;
}
.wrapper form .signup-link {
  text-align: center;
  margin-top: 45px;
  font-size: 17px;
}
.wrapper  .signup-link a {
  color: #16a085;
  text-decoration: none;
}
 .signup-link a:hover {
  text-decoration: underline;
}


</style>

<script>

import axios from 'axios'
import { ref } from 'vue';

const users = ref([]);

export default {
   name: "SignIn",
data()
{
  return{
    field : "",
    password : "",
  }
},
methods:{
  async signIn()
  {
    let result =  await axios.post("http://localhost:8000/api/users/login",{
      field : this.field,
      password : this.password,
    });

    console.warn(result);
    try {
    if (result.status === 200 && result.data.status === true) {
      users.value = result.data.Users;
      // Save Users data to local storage
      localStorage.setItem('users', JSON.stringify(result.data.Users));
      this.$router.push('Home');
    }
  } catch (error) {
    alert(result.data.msg);
  }

  }
}
 };
</script>
