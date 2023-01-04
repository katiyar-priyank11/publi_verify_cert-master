<template>
  <div class="page">
  <NavBar/>
    <div class="adminlogin">
      <div class="signin">
        <input type="text" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <button v-on:click="login()">Log In</button>
        <span class="non"> Not registered yet?</span>
        <router-link to="/signup">   <span class="blue"> SignUp</span></router-link>
      </div>
  
      
    </div>
  </div>
  </template>
  
  <script>
  import NavBar from "./NavBar.vue"
  import axios from "axios";
  export default {
    name: "LoginPage",
    components:{
      NavBar
    },
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        let result = await axios.post(
          `http://localhost:4000/users/login`,{email:this.email,password:this.password}
        );
        if (result.status == 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name:'AddCert' });
        }
      },
    },
  };
  </script>
  
  <style>
  .adminlogin{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;
  }
  .signin{
    width: 20vw;
    margin:10%;
  }
  .blue{
    color: blue;
  }
  .non{
    pointer-events: none;
    cursor: default;
  }
  @media only screen and (max-width: 668px) {
    .signin{
      width: 60vw;
    }
  }
  </style>