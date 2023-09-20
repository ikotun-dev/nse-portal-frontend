<template>

  <div class="flex justify-center pt-3 lg:pt-12 pb-72 ">

    <div class="bg-white p-2 rounded-md ">
      <div class="flex flex-col px-4 py-4 items-center w-86 lg:w-100 h-96 pt-14 border border-orange-900">
        <form>
          <label class="font-montserrat font-extrabold text-lg mb-2 text-green-800 text-center">Get Password</label>
          <h3 class="text-red-800 font-montserrat font-extrabold text-sm" v-show="failedSignup">Details Not Found</h3>
          <div v-show="successSignup">
            <h3 class="font-montserrat font-extrabold text-sm text-green-800 ">Check your email for password </h3>
          </div>

          <div
            class=" h-8 lg:w-64 sm:w-56 rounded-sm focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-950 ring-1 ring-green-800 mt-2"
            v-show="!successSignup">

            <input
              class="px-2 py-2 h-8 lg:w-64 w-64 rounded-sm focus:outline-none sm:outline-none text-xs focus:ring-10 font-pop focus:ring-green-800 "
              type="email" placeholder="EMAIL :" v-model="email" name="email" required />
          </div>


          <div
            class="h-8 lg:w-64 rounded-sm sm:w-56 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-950 ring-1 ring-green-800 mt-2"
            v-show="!successSignup">
            <input
              class="px-2 py-2 h-8 lg:w-64 w-64 rounded-sm focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-800"
              type="text" name="nse_no" placeholder="NSE-NO:" v-model="nse_no" required />
          </div>


          <button
            class="font-pop border py-2 px-16 text-sm rounded-sm bg-green-500 text-white mt-4 hover:bg-white hover:border hover:border-green-900 hover:text-green-600 rounded-e-full rounded-s-full"
            @click="signUp($event)" v-show="!successSignup">
            Generate Password
          </button>
        </form>

        <a class="mt-6 font-bold font-montserrat text-gray-600 text-xs cursor-pointer" @click="showLoginForm">
        Gotten Password ? Login</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';


export default {
  name: "App",
  data() {
    return {
      showPassword: "fas fa-eye",
      inputType: "password",
      username: "",
      nse_no: "",
      showPasswordReq: false,
      email: "",
      showLogin: false,
      successSignup: false,
      failedSignup: false

    };
  },
  methods: {
    showLoginForm() {
      this.$emit('showLoginForm')
    },
    togglePasswordVisibility() {
      this.showPassword != !this.showPassword
    },
    async signUp(event) {
      event.preventDefault();
      const SignupData = {
        'email': this.email,
        'nse_no': this.nse_no,
      };
      try {
        const response = await axios.post('https://nse-backend-production.up.railway.app/api/signup', SignupData)
        if (response.status === 200) {
          this.successSignup = true
        }
        else {
          this.failedSignup = true
        }
      } catch (error) {
        this.failedSignup = true
        console.log('error', error)
      }

    }
  }
}
</script>