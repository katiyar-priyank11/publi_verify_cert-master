<template>
    <div class="page">
    <NavBar/>
      <div class="admin">
        <div class="login">
          <input type="text" placeholder="Enter Name" v-model="name" />
          <input type="text" placeholder="Enter Email" v-model="email" />
          <input type="password" placeholder="Enter Password" v-model="password" />
          <button v-on:click="signup()">Sign Up</button>
          <span class="none">Already Registered ? </span>
          <router-link to="/admin">  <span class="blue">Login</span></router-link>
        </div>
    
        
      </div>
    </div>
    </template>
    
    <script>
    import NavBar from "./NavBar.vue"
    import axios from "axios";
    export default {
      name: "SignupPage",
      components:{
        NavBar
      },
      data() {
        return {
          name: "",
          email: "",
          password: "",
        };
      },
      methods: {
        async signup() {
            console.log("priyank")
          let result = await axios.post(
            `http://localhost:4000/users/`,{name:this.name,email:this.email,password:this.password}
          );
          if (result.status == 201) {
            alert("User created Successfully")
            this.$router.push({ name:'Admin' });
          }
          else{
            alert("user already exist")
          }
        },
      },
    };
    </script>
    
    <style>
    .admin{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 90vh;
    }
    .login{
      width: 20vw;
      margin:10%;
    }
    @media only screen and (max-width: 668px) {
      .login{
        width: 60vw;
      }
    }
    .blue{
        color: blue;

    }
    .none{
        cursor: default;
    }
    </style>