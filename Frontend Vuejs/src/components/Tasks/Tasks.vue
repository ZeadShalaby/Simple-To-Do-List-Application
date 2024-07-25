<script setup>
import HeaderPage from '../Header-Footer/HeaderPage.vue';
// import { BPagination } from 'bootstrap-vue'

</script>

<template>

<!DOCTYPE html>
<!-- Created By CodingLab - www.codinglabweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title> Tasks List </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
 <header>
 <HeaderPage/>
   


<table class="containeres">

  <thead>
    <div>
      <img src="../../assets/image/add1.png" alt="NEW Tak" style="width: 30px; cursor: pointer;" @click="NewTask()"/>
      <img src="../../assets/image/checklist.png" alt="NEW Tak" style="width: 30px; cursor: pointer;" @click="FilterDone()"/>
      <img src="../../assets/image/hourglass.png" alt="NEW Tak" style="width: 30px; cursor: pointer;" @click="FilterTime()"/>

    </div>
    
      <tr>

      <th><h1>Num    `</h1></th>
      <th><h1>Title  `</h1></th>
      <th><h1>Description</h1></th>
      <th><h1>Status    `</h1></th>
      <th><h1>Due Dates</h1></th>
      <th><h1>Button    `</h1></th>

    </tr>
  </thead>
  <tbody>
     <tr v-for="item in tasks" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.description }}</td>
      <td>{{ item.status }}</td>
      <td>{{ item.due_dates }}</td>
      <td><img src="../../assets/image/edit.png" alt="edit" style="width: 20px; cursor: pointer;" @click="UpdateTask(item.id) "/> <img src="../../assets/image/delete.png" alt="delete" style="width: 20px; cursor: pointer;" @click="DeleteTask(item.id) "/></td>

    </tr> 
 
    
  </tbody>

</table>


<!-- pagination 
<b-containeres>
  <b-pagination
  v-model = "currentPage"
  :total-rows = "rows"
  :per-page = "perPage">
</b-pagination>
</b-containeres> -->

    <!-- <button v-on:click="NewTask">Add Task</button>
   <button v-on:click="UpdateTask">Update Task </button> -->

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
 color: linear-gradient(135deg, #9a15ce , #218ed6);
 transition: all 0.3s ease;
}
.media-icons a:hover{
 opacity: 1;
}

/*****/

@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);



h1 {
  font-size:3em; 
  font-weight: 300;
  line-height:1em;
  text-align: center;
  color: #4DC3FA;
}

h2 {
  font-size:1em; 
  font-weight: 300;
  text-align: center;
  display: block;
  line-height:1em;
  padding-bottom: 2em;
  color: #FB667A;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #FB667A;
  text-decoration: none;
}

.blue { color: #185875; }
.yellow { color: #42e3ff; }

.containeres th h1 {
    font-weight: bold;
    font-size: 1em;
  text-align: left;
  color: #139cdb;
}

.containeres td {
    font-weight: normal;
    font-size: 0.5em;
  -webkit-box-shadow: 0 2px 2px -2px #0E1119;
     -moz-box-shadow: 0 2px 2px -2px #0E1119;
          box-shadow: 0 2px 2px -2px #0E1119;
}

.containeres {
    text-align: left;
    width: 890px;
    margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    margin-top: -400px;

}

.containeres td, .containeres th {
    padding-bottom: 2%;
    padding-top: 2%;
  padding-left:2%;  
}

/* Background-color of the odd rows */
.containeres tr:nth-child(odd) {
    background-color: #323C50;
}

/* Background-color of the even rows */
.containeres tr:nth-child(even) {
    background-color: #2c3e46;
}

.containeres th {
    background-color: #1F2739;
}

.containeres td:first-child { color: #FB667A; }

.containeres tr:hover {
   background-color: #464A52;
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
}
.containeres td{
  color: #dcdcdc;
  font-weight: bold;
  font-size: 0.5em;
}
.containeres td:hover {
  background-color: #42fcff;
  color: #000000;
  font-weight: bold;
  box-shadow: #207176 -1px 1px, #207176 -2px 2px, #207176 -3px 3px, #207176 -4px 4px, #207176 -5px 5px, #207176 -6px 6px;
  transform: translate3d(6px, -6px, 0);
  
  transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
  transition-timing-function: line;
}

@media (max-width: 800px) {
.containeres td:nth-child(4),
.containeres th:nth-child(4) { display: none; }
}
</style>
<script>
import axios from 'axios';

export default {
  name: "TasksLists",
  data() {
    return {
      tasks: [],
      currentPage: 1,
      auth_token: "",
      rows: 2,
      perPage: 10,
    };
  },

  methods: {

    NewTask() {
      this.$router.push({ name: 'AddTask' });
    },

    UpdateTask() {
      this.$router.push({ name: 'UpdateTask' });
    },

    // delete task of list (soft delete) 
    async DeleteTask(id) {
      let user = JSON.parse(localStorage.getItem('users'));
      try {
        let result = await axios.delete("http://localhost:8000/api/task/soft-deleted/task", {

          data: {
            auth_token:user.token,
            taskId: id
          }

        });
        if (result.status === 200) {
          this.fetchTasks();
        }
        console.log(result.data);
      } catch (error) {
        console.error("There was an error deleting the task:", error);
      }
    },

    // fetch data of list completed 
    FilterDone() {
      let filters = JSON.parse(localStorage.getItem('filter'));
      if (filters === "completed") {
        localStorage.removeItem("filter");
      } else {
        localStorage.setItem('filter', JSON.stringify("completed")); // task done
      }
      this.fetchTasks();
    },

    // fetch data of list pending 
    FilterTime() {
      let filters = JSON.parse(localStorage.getItem('filter'));
      if (filters === "pending") {
        localStorage.removeItem("filter");
      } else {
        localStorage.setItem('filter', JSON.stringify("pending")); // task not done yet
      }
      this.fetchTasks();
    },

    // fetch data of list 
    async fetchTasks() {
      let user = JSON.parse(localStorage.getItem('users'));
      let cat = JSON.parse(localStorage.getItem('cat'));
      let filter = JSON.parse(localStorage.getItem('filter'));

      if (!user) {
        this.$router.push({ name: 'Login' });
        return;
      }

      try {
        let result;
        if (!filter) {
          result = await axios.get("http://localhost:8000/api/task/retrieve/tasks", {

            params: {
              auth_token:user.token,
              catId: cat
            }
          });
          console.log("not found");
        } else {
          result = await axios.get("http://localhost:8000/api/task/filtering/tasks", {
            params: {
              auth_token:user.token,
              filter: filter,
              catId: cat
            }
          });
          console.log("found");
        }
        this.tasks = result.data.tasks;
        this.currentPage = 1;          // Reset to first page on fetch
        console.log(result.data);
      } catch (error) {
        console.error("There was an error retrieving the tasks:", error);
      }
    }
  },
  
  async mounted() {
    await this.fetchTasks();
  }
};
</script>

