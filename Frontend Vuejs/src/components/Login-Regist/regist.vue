<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <!DOCTYPE html>
  <!-- Created By CodingLab - www.codinglabweb.com -->
  <html lang="en" dir="ltr">

  <head>
    <meta charset="UTF-8">
    <title> Responsive Registration Form | CodingLab </title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body>
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" name="name" placeholder="Enter your name" v-model="name" required>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" name="username" placeholder="Enter your username" v-model="username" required>
          </div>
          <div class="input-box">
            <span class="details">Gmail</span>
            <input type="email" name="gmail" placeholder="Enter your gmail" v-model="gmail" required>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="numper" name="phone" placeholder="Enter your number" v-model="phone" required>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="pass" name="password" placeholder="Enter your password" v-model="password" required>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="date" name="birthday" placeholder="birthday" v-model="birthday" required>
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" v-model="gender" id="dot-1" value="male">
          <input type="radio" name="gender" v-model="gender" id="dot-2" value="female">
          <input type="radio" name="gender" v-model="gender" id="dot-3">
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span class="gender">Male</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span class="gender">Female</span>
            </label>
            <label for="dot-3">
              <span class="dot three"></span>
              <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register" v-on:click="signUp">
        </div>
        <div class="signin-link">Already Have Account ? <a href="#" @click="goToLogin">signin now</a></div>

      </div>
    </div>

  </body>

  </html>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

body {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container {
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.content .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

.user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}

.input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}

.gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}

.category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}

.category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked~.category label .one,
#dot-2:checked~.category label .two,
#dot-3:checked~.category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}

input[type="radio"] {
  display: none;
}

.button {
  height: 45px;
  margin: 35px 0
}

.button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

@media(max-width: 584px) {
  .container {
    max-width: 100%;
  }

  .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }

  .category {
    width: 100%;
  }

  .content .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }

  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}

@media(max-width: 459px) {
  .container .content .category {
    flex-direction: column;
  }
}

.signin-link {
  text-align: center;
  margin-top: 45px;
  font-size: 17px;
}

.signin-link a {
  color: #16a085;
  text-decoration: none;
}

.signin-link a:hover {
  text-decoration: underline;
}
</style>

<script>

import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      username: "",
      gmail: "",
      phone: "",
      password: "",
      birthday: "",
      gender: "",
    }
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:8000/api/users/regist", {
        name: this.name,
        username: this.username,
        gmail: this.gmail,
        phone: this.phone,
        password: this.password,
        birthday: "2000-11-07",
        // birthday : this.birthday,
        gender: this.gender
      });

      console.warn(result);
      if (result.data.status == true) {
        // localStorage.setItem("user-info",JSON.stringify(result.data));
        this.$router.push({ name: "Login" });
      } else {
        alert(result.data.msg);
      }

    }
  }
};
</script>
