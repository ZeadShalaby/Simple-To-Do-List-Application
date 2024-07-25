import WelcomeItem from "./components/Welcome-Page/WelcomeItem.vue";
import Home from "./components/Home.vue";
import login from "./components/Login-Regist/login.vue";
import regist from "./components/Login-Regist/regist.vue";
import CategoryList from "./components/Categorys/category.vue";
import TasksLists from "./components/Tasks/Tasks.vue";
import UpdateTask from "./components/Tasks/UpdateTask.vue";
import AddTask from "./components/Tasks/AddTask.vue";
import trash from "./components/Tasks/Trash.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Welcome",
    component: WelcomeItem,
    path: "/",
  },
  {
    name: "Home",
    component: Home,
    path: "/home",
  },
  {
    name: "Login",
    component: login,
    path: "/login",
  },
  {
    name: "Regist",
    component: regist,
    path: "/regist",
  },
  {
    name: "Category",
    component: CategoryList,
    path: "/category",
  },
  {
    name: "Task",
    component: TasksLists,
    path: "/task",
  },
  {
    name: "AddTask",
    component: AddTask,
    path: "/new",
  },
  {
    name: "UpdateTask",
    component: UpdateTask,
    path: "/update",
  },
  {
    name: "Trash",
    component: trash,
    path: "/trash",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
