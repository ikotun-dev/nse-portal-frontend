<template>
    <nav class="bg-green-800 text-white h-300 md:w-48 lg:w-64" :class="{ 'hidden': !isMenuOpen, 'lg:block md:block': !isMenuOpen }">
      <div class="flex items-center justify-center h-16 ">

      </div>
      <ul class="">
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold">
          <router-link to="/find-employees">Find Employee</router-link>
        </li>
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold " @click="mentorNavigator">
          <h2 @click="mentorNavigator" class="cursor-pointer ">Mentorship</h2>
        </li>
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold">
          <router-link to="/profile">My Profile</router-link>
        </li>
        <!-- Add other links here -->
      </ul>
    </nav>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'SideBar',
    data() { 
      return {
        isMenuOpen : false
      }

    },
    methods :{
      async mentorNavigator(){
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('https://nse-backend-production.up.railway.app/api/check-status', { headers : { 'Authorization' : `Bearer ${token}` }})
          if(response.status === 200){
            console.log("if block")
            this.$router.push('/mentor-view')
          }
          else{
            console.log("else block")
            this.$router.push('/mentorship')
          }
        }catch(error){
          console.log(error)
        }
    },
    }
  };
  </script>
  
  <style scoped>
  /* Add sidebar-specific styling here */
  </style>
  