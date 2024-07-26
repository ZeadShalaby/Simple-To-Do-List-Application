
<br/>
<p align="center">
  <a href="https://github.com/ZeadShalaby/Simple-To-Do-List-Application">
          <img src="https://imgur.com/sbogsFZ.png?w=1600" alt="Logo" width="470" height="370">
    
  </a>

<h3 align="center"> Simple-To-Do-List-Application </h3>
<h3 align="center"> it's a project can restore tasks and filter it , Login with username || Gmail  </h3>

  <p align="center">
     Project Simple-To-Do-List-Application
    <br/>
    <br/>
  </p>
  
![Forks](https://img.shields.io/github/forks/ZeadShalaby/Simple-To-Do-List-Application?style=social) ![Issues](https://img.shields.io/github/issues/ZeadShalaby/Simple-To-Do-List-Application) ![License](https://img.shields.io/github/license/ZeadShalaby/Simple-To-Do-List-Application)


## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Usage](#usage)
    * [Locally](#running-locally)
    * [Via Container](#running-via-container)
* [Contributing](#contributing)
* [Authors](#authors)
* [Screenshots](#Screenshots)



📌Welcome Page :

<img src="https://imgur.com/eL5KoXK.png" alt="project(Coise-User)" width="1350" height="450">



📌Home Page :

<img src="https://imgur.com/apLNOax.png" alt="project(Coise-User)" width="1200" height="450">



📌Category Page :


<img src="https://imgur.com/vvJkRsd.png" alt="project(Coise-User)" width="1200" height="450">


📌Task Page :


<img src="https://imgur.com/bpyJb8Y.png" alt="project(Coise-User)" width="1200" height="450">



📌Restore Page : 



<img src="https://imgur.com/FDv5CfQ.png" alt="project(Coise-User)" width="1200" height="470">



📌Login  : 



<img src="https://imgur.com/o2w3KNi.png" alt="project(Coise-User)" width="1200" height="450">



📌Register  : 



<img src="https://imgur.com/SeXcwM7.png" alt="project(Coise-User)" width="1200" height="450">


<br>


</p>

## About The Project
it's a projects coded in Backend Laravel .
Frontend Vue.Js.
Describe of the Project:
A Task list makes it easy to bring all those simple tasks, as well as complex ones, to a single place so you don't have to waste time thinking
about what you should do next. Even better, use a simple tasks list template, also known as a to-do list template, to stay on track and deadline.


## Built With

**Client:** VueJs, Bootstrap

**Server:** Apache, Laravel

**Containerization Service:** Docker

**Miscellaneous:** Github
Actions, [Build and push Docker images](https://github.com/marketplace/actions/build-and-push-docker-images), [Docker Login](https://github.com/marketplace/actions/docker-login)


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm

```sh
npm install npm@latest -g
```

* laravel

```sh
composer global require laravel/installer
```

Make sure that either **MySQL** or **MariaDB** are installed either manually or via **phpMyAdmin**

### Installation

Clone the project

```bash

https://github.com/ZeadShalaby/Simple-To-Do-List-Application

```

Go to the project directory

```bash
  cd Simple-To-Do-List-Application
```

Install dependencies

```bash
  composer install
```

```bash
  npm install
```

## Usage

### Running Locally

📌 Backend

Make the migrations to update the database

```bash
    php artisan migrate
```

Seed the Database

```bash
    php artisan db:seed
```

Start the server and run watch

```bash
    php artisan serve
```

```bash
    npx run watch
````

or alternatively run the .bat

```bash
    /autorun.bat
```

go to the following route

```
    http://127.0.0.1:8000/
```

📌 Frontend

```bash
    npm run serve
```

go to the following route

```
http://localhost:8080/

```

<!---
### Running via container

pull the image 

```
docker pull zeadshalaby/tdl
``` 

 run the container

 ```
 docker run --name lms -p 8000:8000 -d zeadshalaby/tdl
 ```
 
 connect to Container Terminal
 
 ```
 docker exec -it lms /bin/sh
 ```
 
 make the migrations to update the database

```bash
    php artisan migrate
```

 go to the following page
 ```
 <container-ip>:8000
 ``` --->

## Contributing

Any contributions you make are **greatly appreciated**.

* If you have suggestions for adding or removing projects, feel free
  to [open an issue](https://github.com/ZeadShalaby/Simple-To-Do-List-Application/issues/new) to discuss it, or directly
  create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Make sure to add a meaningful description

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/GoalFeature`)
3. Commit your Changes (`git commit -m 'Add some GoalFeature'`)
4. Push to the Branch (`git push origin feature/GoalFeature`)
5. Open a Pull Request



## Authors
* **Ziad Shalaby** - *Computer Science Student* - [Ziad Shalaby](https://github.com/ZeadShalaby)

