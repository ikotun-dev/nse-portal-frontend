<template>
  <div class="flex-col" :src="require('../assets/images/slider4.jpg')">
    <div class="bg-image min-h-200 flex justify-center items-center">
      <SignupForm v-show="showSignup" @showLoginForm="showSignUp"></SignupForm>
      <div class="flex justify-center pt-3 lg:pt-12 pb-72 " v-show="showLogin">

        <div class="bg-white p-2 border rounded-md">
          <div class="flex flex-col px-4 py-4 items-center w-86 lg:w-100 h-64 pt-14 border border-orange-900 rounded-md">
            <label class="font-serif text-lg lg:text-2xl mb-2 text-green-800"><b>NSE-Oluyole</b> Member Login</label>
            <h3 class="text-red-800 font-pop text-sm" v-show="wrongCredentials">Engineer Match Not Found</h3>
            <div
              class="h-8 lg:w-64 rounded-sm sm:w-56 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-950 ring-1 ring-green-800 mt-2">
              <input
                class="px-2 py-2 h-8 lg:w-64 w-64 rounded-sm sm:w-56 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-800 ring-1 ring-green-600 "
                type="text" placeholder="NSE-NO :" v-model="username" required />
            </div>

            <button
              class="font-pop border py-2 px-16 text-sm rounded-sm bg-green-500 text-white mt-4 hover:bg-white hover:border hover:border-green-900 hover:text-green-600 rounded-e-full rounded-s-full"
              @click="login">
              Login
            </button>
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
  components: {
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
      wrongCredentials: false,
    };
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
    nse_number: this.username,
  };

  try {
    const response = await axios.post('https://nse-backend-production.up.railway.app/api/login', login_data, {
      headers: {
        'Content-Type': 'application/json' // Adjust if needed
      }
    });

    if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem('token', token)
        if(response.data.data.profile_image === '' || response.data.data.profile_image == null){
          console.log("if block")
          this.$router.push('/update-profile')
        }
        else { 
          
          console.log('else block')
          this.$router.push('/find-employees')
        }
      // // Check the response data before accessing it
      // if (response.status === 200) {
        
      //   const token = response.data.token;
      //   localStorage.setItem('token', token);
      //   console.log(response.data.data.fullname)
      //   if (response.data.data.fullname != '') { 
      //     console.log('fullname', response.data.data.fullname)
      //     this.$router.push('/find-employees')
      //   }
      //   else{
      //   this.$router.push('/update-profile');
      //   }
      // } else {
      //   this.wrongCredentials = true;
      //   alert("Invalid credentials");
      // }
    }
    else {
      console.log('Response with unexpected status:', response);
      this.SignupForm = true;
      alert("An error in else block occurred");
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      // Handle validation errors
      this.wrongCredentials = true 
      console.log('Validation Errors:', error.response.data);
      this.validationErrors = error.response.data.errors;
    } else {
      // Handle other errors
      this.wrongCredentials = true
      console.error('Error:', error);
    // alert("An error occurred");
    }
  }
}

  }
};
</script>
  
<style scoped>
.bg-image {
  background-image: url('~@/assets/images/slider4.jpg');
  /* Adjust the path as needed */
  background-size: cover;
  background-position: center;
}
</style>
  