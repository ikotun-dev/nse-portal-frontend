<template>
    <nav class="bg-green-800 text-white h-screen lg:w-64 md:w-48 hidden lg:block md:block">
      <div class="flex items-center justify-center h-16 ">

      </div>
      <ul class="">
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-pop-bold font-bold">
          <router-link to="/find-employees">Find Employee</router-link>
        </li>
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-pop-bold font-bold ">
          <router-link to="/dashboard">Mentorship</router-link>
        </li>
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-pop-bold ">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li class="mb-2 py-2 hover:bg-green-700 text-center font-pop-bold ">
          <router-link to="/settings">Settings</router-link>
        </li>
        <!-- Add other links here -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'SideBar'
  };
  </script>
  
  <style scoped>
  /* Add sidebar-specific styling here */
  </style>
  