<script setup>
import HeaderPage from '../Header-Footer/HeaderPage.vue';
</script>

<template>

  <head>
    <meta charset="UTF-8">
    <title> New Task </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <HeaderPage />
  <div class="login" style="margin-top: -470px;">
    <div class="login__content">
      <div class="login__img">
        <img src="../../assets/image/img-login.svg" alt="" />
      </div>
      <div class="login__forms">
        <form @submit.prevent="NewTask" class="login__registre" id="form">
          <h1 class="login__title">New Task</h1>
          <div class="login__box">
            <i class="bx bx-user login__icon"></i>
            <input type="text" placeholder="Title" v-model="title" class="login__input" />
          </div>
          <div class="login__box">
            <i class="bx bx-user login__icon"></i>
            <input type="text" placeholder="Description" v-model="description" class="login__input" />
          </div>
          <div class="login__box">
            <i class="bx bx-user login__icon"></i>
            <input type="date" placeholder="Due Dates" v-model="due_dates" class="login__input" />
          </div>
          <div class="gender-details">
            <input type="radio" name="status" v-model="status" id="dot-1" value="pending" />
            <input type="radio" name="status" v-model="status" id="dot-2" value="completed" />
            <span class="gender-title">Status</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">pending</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">completed</span>
              </label>
            </div>
          </div>
          <button class="login__button" type="submit" style="width: 100%">Save</button>
        </form>
      </div>
    </div>
  </div>
  <div class="media-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
    <a href="#"><i class="fab fa-pinterest"></i></a>
  </div>
</template>


<style scoped>
.gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;

}

.category {
  margin-left: 40px;
}

/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

/*===== VARIABLES CSS =====*/
:root {
  /*===== Colores =====*/
  --first-color: #9D4BFF;
  --first-color-dark: #23004D;
  --first-color-light: #A49EAC;
  --first-color-lighten: #F2F2F2;

  /*===== Font and typography =====*/
  --body-font: 'Open Sans', sans-serif;
  --h1-font-size: 1.5rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
}

@media screen and (min-width: 768px) {
  :root {
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
  }
}

/*===== BASE =====*/
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: var(--first-color-dark);
}

h1 {
  margin: 0;
}

a {
  text-decoration: none;
}

img {
  max-width: 120%;
  height: auto;
  display: block;
}

/*===== LOGIN =====*/
.login {
  display: grid;
  grid-template-columns: 100%;
  height: 100vh;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.login__content {
  display: grid;
}

.login__img {
  justify-self: center;
}

.login__img img {
  width: 310px;
  margin-top: 1.5rem;
}

.login__forms {
  position: relative;
  height: 368px;
}

.login__registre,
.login__create {
  position: absolute;
  bottom: 1rem;
  width: 100%;
  background-color: var(--first-color-lighten);
  padding: 2rem 1rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(35, 0, 77, .2);
  animation-duration: .4s;
  animation-name: animate-login;
}

@keyframes animate-login {
  0% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.1, 1.1);
  }

  100% {
    transform: scale(1, 1);
  }
}

.login__title {
  font-size: var(--h1-font-size);
  margin-bottom: 2rem;
}

.login__box {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: .5rem;
  padding: 1.125rem 1rem;
  background-color: #FFF;
  margin-top: 1rem;
  border-radius: .5rem;
  height: 50px;
}

.login__icon {
  font-size: 1.5rem;
  color: var(--first-color);
}

.login__input {
  border: none;
  outline: none;
  font-size: var(--normal-font-size);
  font-weight: 700;
  color: var(--first-color-dark);
}

.login__input::placeholder {
  font-size: var(--normal-font-size);
  font-family: var(--body-font);
  color: var(--first-color-light);
}

.login__forgot {
  display: block;
  width: max-content;
  margin-left: auto;
  margin-top: .5rem;
  font-size: var(--small-font-size);
  font-weight: 600;
  color: var(--first-color-light);
}

.login__button {
  cursor: pointer;
  display: block;
  padding: 1rem;
  margin: 2rem 0;
  background-color: var(--first-color);
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-radius: .5rem;
  transition: .3s;
}

.login__button:hover {
  background-color: var(--first-color-dark);
}

.login__account,
.login__signin,
.login__signup {
  font-weight: 600;
  font-size: var(--small-font-size);
}

.login__account {
  color: var(--first-color-dark);
}

.login__signin,
.login__signup {
  color: var(--first-color);
  cursor: pointer;
}

.login__social {
  margin-top: 2rem;
}

.login__social-icon {
  font-size: 1.5rem;
  color: var(--first-color-dark);
  margin: 0 1.5rem;
}

/*Show login*/
.block {
  display: block;
}

/*Hidden login*/
.none {
  display: none;
}

/* ===== MEDIA QUERIES =====*/
@media screen and (min-width: 576px) {
  .login__forms {
    width: 348px;
    justify-self: center;
  }
}

@media screen and (min-width: 1024px) {
  .login {
    height: 100vh;
    overflow: hidden;
  }

  .login__content {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    align-items: center;
    margin-left: 10rem;
  }

  .login__img {
    display: flex;
    width: 600px;
    height: 588px;
    background-color: var(--first-color-lighten);
    border-radius: 1rem;
    padding-left: 1rem;
  }

  .login__img img {
    width: 390px;
    margin-top: 0;
  }

  .login__registre,
  .login__create {
    left: -11rem;
  }

  .login__registre {
    bottom: -2rem;
  }

  .login__create {
    bottom: -5.5rem;
  }
}



.form-control input:focus {
  outline: 0;
  border-color: #777;
}

.form-control.success input {
  border-color: var(--success-color);
}

.form-control.error input {
  border-color: var(--error-color);
}

.form-control small {
  color: var(--error-color);
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}

.form-control.error small {
  visibility: visible;
}




header .media-icons {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 40px;
  bottom: 40px;
}

.media-icons a {
  margin-top: 8px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  opacity: 0.7;
  color: #2c3350;
  transition: all 0.3s ease;
}

.media-icons a:hover {
  opacity: 1;
}
</style>



<script>
import axios from 'axios';

export default {
  name: 'NewTask',
  components: {
    HeaderPage,
  },
  data() {
    return {
      title: '',
      description: '',
      status: '',
      due_dates: '',
    };
  },
  methods: {
    async NewTask() {
      try {
        let user = JSON.parse(localStorage.getItem('users'));
        let cat = JSON.parse(localStorage.getItem('cat'));

        let result = await axios.post('http://localhost:8000/api/task/new/task', {
          auth_token: user.token,
          cat_id: cat,
          title: this.title,
          description: this.description,
          status: this.status,
          due_dates: this.due_dates,
        });

        console.warn(result);
        if (result.data.status === true) {
          this.$router.push({ name: 'Task' });
        } else {
          alert(result.data.msg);
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred while creating the task.');
      }
    },
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem('users'));
    if (!user) {
      this.$router.push({ name: 'Login' });
    }
  },
};
</script>
