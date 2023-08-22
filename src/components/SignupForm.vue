<template>
 <div class="flex justify-center pt-3 lg:pt-12 pb-72 " >
        
        <div class="bg-white p-2">
          <div class="flex flex-col px-4 py-4 items-center w-86 lg:w-100 h-96 pt-14 border border-orange-900">
            <label class="font-serif text-2xl mb-2 text-green-800">NSE-Member Signup</label>
            <h3 class="text-green-800 font-pop" v-show="successSignup">Signup success</h3>
            <h3 class="text-green-800 font-pop" v-show="successSignup">an administrator would confirm your credentials</h3>
            <h3 class="text-green-800 font-pop" v-show="successSignup">Login access would be granted</h3>
            <h3 class="text-green-800 font-pop" v-show="failedSignup">Credentials already used</h3>
            <div
            class="h-8 lg:w-64 rounded-sm sm:w-56 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-950 ring-1 ring-green-800 mt-2"
            >
              <input
                class="px-2 py-2 h-8 lg:w-64 w-64 rounded-sm sm:w-56 focus:outline-none text-xs focus:ring-10 font-pop focus:ring-green-800 ring-1 ring-green-400 "
                type="email"
                placeholder="Email :"
                v-model="email"
                required
              />
            </div>
  

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
              @click="signUp"
            >
              Signup
            </button>
            
          <a class="mt-2 text-gray-600 text-xs" @click="showLoginForm">Have an account ? Login</a>
  
            
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
        password: "",
        showPasswordReq: false,
        email : "",
        showLogin : false,
        successSignup : false,
        failedSignup : false

      };
    },
    methods : {
        showLoginForm() { 
            this.$emit('showLoginForm')
        },
        togglePasswordVisibility() { 
          this.showPassword != !this.showPassword
        },
        async signUp(){
          const SignupData = {
            'username' : this.username,
            'email' : this.email,
            'password' : this.password,

          };
          try {
          const response = await axios.post('http://127.0.0.1:8000/api/signup', SignupData)
          if(response.status === 200) {
            this.successSignup = true
          }
          else { 
            this.failedSignup = true
          }
        }catch(error) { 
          console.log('error', error)
        }
          
        }
    }
}
</script>