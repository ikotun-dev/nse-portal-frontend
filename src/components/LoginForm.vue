<template>
    <div class="flex-col" :src="require('../assets/images/slider4.jpg')">
        <div class="bg-image min-h-200 flex justify-center items-center">   
     
    <div class="flex justify-center pt-3 lg:pt-12 pb-72 " >
        
      <div class="bg-white p-2">
        <div class="flex flex-col px-4 py-4 items-center w-86 lg:w-100 h-96 pt-14 border border-orange-900">
          <label class="font-serif text-2xl mb-2 text-orange-700">Member Login</label>
          <div
          class="h-8 lg:w-64 rounded-sm sm:w-56 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-950 ring-1 ring-green-800 mt-2"
          >
            <input
              class="px-2 py-2 h-8 lg:w-64 w-64 rounded-sm sm:w-56 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-800 ring-1 ring-green-400 "
              type="text"
              placeholder="username :"
              v-model="username"
              required
            />
          </div>

          <div
            class="flex justify-between text-base mt-4 border rounded-sm focus:ring-green-800 ring-green-400 ring-1 lg:w-64 w-64 sm:w-56"
          >
            <input
              class="px-2 py-2 h-8 w-40 rounded-sm focus:outline-none text-xs focus:ring-10 font-pop border-0"
              :type="inputType"
              placeholder="password : "
              v-model="password"
              required
            
            />
            <i
              class="mt-2 mr-2 text-green-800"
              :class="showPassword"
              @click="togglePasswordVisibility"
            ></i>
          </div>
  
          <div v-show="showPasswordReq" class="text-xs bg-white border rounded-sm py-2 px-2 mt-1">
            <small class="form-text text-gray-500">Password requirements:</small>
            <ul class="list-disc pl-5 mt-2">
              <li :class="{ 'text-green-500': has_minimum_length }">At least 8 characters</li>
              <li :class="{ 'text-green-500': has_lowercase }">One lowercase letter</li>
              <li :class="{ 'text-green-500': has_uppercase }">One uppercase letter</li>
              <li :class="{ 'text-green-500': has_number }">One number</li>
              <li :class="{ 'text-green-500': has_special }">One special character</li>
            </ul>
          </div>
  
          <button
            class="font-pop border py-2 px-16 text-sm rounded-sm bg-green-500 text-white mt-4 hover:bg-white hover:border hover:border-green-900 hover:text-green-600 rounded-e-full rounded-s-full"
            @click="login"
          >
            Login
          </button>

          <a class="mt-2 text-gray-600 text-xs" href="#">Forgot password?</a>
          <a class="mt-2 text-gray-600 text-xs" @click="showSignUp">Don't have an account? Signup</a>
        </div>
      </div>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        showPassword: "fas fa-eye",
        inputType: "password",
        username: "",
        password: "",
        showPasswordReq: false
      };
    },
    computed: {
      has_minimum_length() {
        return this.password.length >= 8;
      },
      has_lowercase() {
        return /[a-z]/.test(this.password);
      },
      has_uppercase() {
        return /[A-Z]/.test(this.password);
      },
      has_number() {
        return /\d/.test(this.password);
      },
      has_special() {
        return /[\W_]/.test(this.password);
      }
    },
    methods: {
      togglePasswordVisibility() {
        this.inputType = this.inputType === "password" ? "text" : "password";
        this.showPassword =
          this.showPassword == "fas fa-eye" ? "fas fa-eye-slash" : "fas fa-eye";
      },
      showSignUp() {
        this.showSignup = !this.showSignup;
      },
      login() {
        if (this.username === "collins" && this.password === "Collins2005") {
          this.$router.push("/sidepane");
        }
      }
    }
  };
  </script>
  
  <style scoped>

.bg-image {
  background-image: url('~@/assets/images/slider4.jpg'); /* Adjust the path as needed */
  background-size: cover;
  background-position: center;
}
</style>
  