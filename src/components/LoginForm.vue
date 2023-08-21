<template>
    <div class="flex-col" :src="require('../assets/images/slider4.jpg')">
        <div class="bg-image min-h-200 flex justify-center items-center">   
    <SignupForm v-show="showSignup" @showLoginForm="showSignUp" ></SignupForm>
    <div class="flex justify-center pt-3 lg:pt-12 pb-72 " v-show="showLogin">
        
      <div class="bg-white p-2">
        <div class="flex flex-col px-4 py-4 items-center w-86 lg:w-100 h-96 pt-14 border border-orange-900">
          <label class="font-serif text-2xl mb-2 text-green-800">NSE-Member Login</label>
          <h3 class="text-red-800 font-pop" v-show="wrongCrendentials">Wrong Credentials!</h3>
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
  import SignupForm from './SignupForm.vue';
  import axios from 'axios'
  export default {
    name: "App",
    components : {
      SignupForm
    },

    data() {
      return {
        showPassword: "fas fa-eye",
        inputType: "password",
        username: "",
        password: "",
        showPasswordReq: false,
        showSignup: false,
        showLogin: true,
        wrongCrendentials: false,
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
        this.showLogin = !this.showLogin
      },
      async login() {
        const login_data = { 
            username : this.username,
            password : this.password,
        };
        console.log(login_data)
        try  {
            const response =  await axios.post('http://127.0.0.1:8000/api/login', login_data, {
  headers: {
    'Content-Type': 'application/json' // Adjust if needed
  }
})
            if (response.status === 200){ 
                this.$router.push('/update-profile')
            } else {
                alert("An error occurred")
            }
        }
        catch(error) {
            if (error.response && error.response.status === 422) {
    // Handle validation errors
    console.log('Validation Errors:', error.response.data);
    // For example, display the error messages to the user
    this.validationErrors = error.response.data.errors;
  } else {
    // Handle other errors
    console.error('Error:', error);
  }
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
  