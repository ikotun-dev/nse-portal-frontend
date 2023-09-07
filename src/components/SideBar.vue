<template>
    <nav class="bg-green-800 text-white h-300 md:w-48 lg:w-64" :class="{ 'hidden': !isMenuOpen, 'lg:block md:block': !isMenuOpen }">
      <div class="flex items-center justify-center h-16 ">

      </div>
      <ul class="">
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold">
          <router-link to="/find-employees">Find Employee</router-link>
        </li>
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold ">
          <router-link to="/mentorship">Mentorship</router-link>
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
  export default {
    name: 'SideBar',
    data() { 
      return {
        isMenuOpen : false
      }

    }
  };
  </script>
  
  <style scoped>
  /* Add sidebar-specific styling here */
  </style>
  