<template>
    <TopHeader></TopHeader>
    <!-- <BaseHeader></BaseHeader> -->
    <div class="bg-gray-100">
    <div class="ml-4 flex mt-2 items-center">
    <router-link to="/find-employees" class="text-4xl mr-2 font-bold text-green-900">
      &leftarrow;
    </router-link>
  </div>
    <div class="flex flex-col items-center mt-4 h-screen">

        <div v-if="isLoading" class="flex items-center justify-center mt-4">
      <div class="animate-spin rounded-full border-t-2 border-green-900 border-opacity-100 h-16 w-16"></div>
     
    </div>

  <div  v-else>
    <div class="flex flex-col items-center mt-12  ">
        <img v-if="profileData.profile_image" :src="profileData.profile_image" alt="Profile Image" class=" w-48 h-48 rounded-full  border border-orange-950">
        <div v-else>
            <i class="fas fa-circle-user mb-4 text-9xl text-green-800"></i>
        </div>


        <div class="py-4 flex justify-center">
         <div class="flex items-center"> 
         <h2 class="font-montserrat font-extrabold text-green-950 ">
            {{profileData.fullname}}
            </h2><b></b>
        </div>
        </div>

        <div class="py-1 flex justify-center border border-black px-2 rounded-lg">
         <div class="flex items-center"> 
         <h2 class="font-montserrat font-extrabold text-green-950 ">
           {{profileData.phone_number}}
            </h2><b></b>
        </div>
        </div>
        <div class="mt-3 py-1 flex justify-center border border-black px-2 rounded-lg">
         <div class="flex items-center"> 
         <h2 class="font-montserrat font-extrabold text-green-950 ">
           {{profileData.email}}
            </h2><b></b>
        </div>
        </div>

       
        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-center"> 
        
    
         <h2 class="font-montserrat font-extrabold  text-green-800">
            {{profileData.engineering_field}}
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-center"> 
        
            <div class="bg-green-400 ml-2 px-4 py-1 rounded-lg border border-orange-950" href="{{ profileData.resume }}">
                <a :href="profileData.resume" target="_blank" class="bg-green-400 ml-2 px-2 rounded-md inline-block">
        <h2 class="font-pop-bold mt-1 font-bold text-xs text-green-950 hover:text-green-200 inline-block mb-1">view CV</h2>
      </a>
            </div>
        </div>
        
        </div>
        <div class="flex justify-center"> 
        
        <div class="bg-orange-600 ml-2 px-4 py-1 rounded-lg border border-orange-950" :href="'mailto:' + profileData.email">
            <a :href="'mailto:' + profileData.email" target="_blank" class="bg-orange-600 ml-2 px-2 rounded-md inline-block">
    <h2 class="font-pop-bold mt-1 font-bold text-xs text-orange-950 hover:text-orange-200 inline-block mb-1">send email</h2>
  </a>
        </div>
    </div>
</div>
    </div>
    </div>
    </div>
</template>
<script>
import TopHeader from './TopHeader.vue';
//import BaseHeader from './BaseHeader.vue';
import axios from 'axios';
//import store from '@/store';
export default{
    props : ['id'],
    components : {
        TopHeader,
       //BaseHeader
    },
    data() { 
        return { 
            profileData : [],
            isLoading : true,
        }
    },
    
    computed : {
    profileApiUrl() {
      console.log(this.id)
      return `https://nse-backend-production.up.railway.app/api/engineer/${this.id}`;
    },
        },
    created() { 
        this.getEngineers();
    },
    methods : {
        goBack() {
            window.history.back();// Go back one step in the router history
    },
        async getEngineers() { 
            console.log('Received ID:', this.profileApiUrl);
           
            try { 
                const token = localStorage.getItem('token')
                const response = await axios.get(this.profileApiUrl, {headers : {'Authorization' : `Bearer ${token}`}})
                if (response.status === 200) { 
                    this.profileData = response.data.data;
                }

            }catch(error) { 
                console.log(error)
            }finally{
                this.isLoading = false;
            }
        }
    }
}
</script>

