<template>
    <div class="flex">
      <div class="w-1/4 bg-gray-200 p-4">
        <!-- Sidebar content -->
        <!-- You can place the sidebar content here -->
      </div>
      <div class="flex-1 p-4">
        <!-- Complete profile form -->
        <form @submit.prevent="submitForm">
          <label class="block mb-2 font-semibold">Full Name:</label>
          <input v-model="fullName" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Engineering Field:</label>
          <input v-model="engineeringField" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Years of Experience:</label>
          <input v-model="yearsOfExperience" type="number" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Resume:</label>
          <input type="file" @change="uploadResume" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Executive Post:</label>
          <input v-model="executivePost" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Profile Image:</label>
          <input type="file" @change="uploadProfileImage" class="w-full p-2 mb-4 border rounded-sm" />
  
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-sm">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: '',
        engineeringField: '',
        yearsOfExperience: null,
        executivePost: '',
        resumeFile: null,
        profileImageFile: null,
      };
    },
    methods: {
      uploadResume(event) {
        this.resumeFile = event.target.files[0];
      },
      uploadProfileImage(event) {
        this.profileImageFile = event.target.files[0];
      },
      submitForm() {
        // Perform form submission with this data
        // You can use Axios or any other HTTP library to send data to the server
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  