<template>
    <TopHeader></TopHeader>
    <!-- <BaseHeader></BaseHeader> -->
    <div class="bg-gray-100">
    <div class="ml-4 flex mt-2 items-center">
    <router-link to="/find-employees" class="text-3xl mr-2 font-bold text-green-900">
      &leftarrow;
    </router-link>
  </div>
    <div class="flex flex-col items-center mt-4 h-screen">

        <div v-if="isLoading" class="flex items-center justify-center mt-4">
      <div class="animate-spin rounded-full border-t-2 border-green-900 border-opacity-100 h-16 w-16"></div>
     
    </div>

  <div  v-else>
    <div class="flex flex-col items-center mt-4  ">
        <img v-if="profileData.profile_image" :src="profileData.profile_image" alt="Profile Image" class=" w-48 h-48 rounded-full  border border-orange-950">
        <div v-else>
            <i class="fas fa-circle-user mb-4 text-9xl text-green-800"></i>
        </div>
       

        <div class="pt-4 flex justify-center">
         <div class="flex items-center"> 
         <h2 class="font-montserrat font-extrabold text-green-950 ">
            {{profileData.fullname}}
            </h2><b></b>
        </div>
        </div>


        <div class="
         py-1 flex justify-center ">
         <div class="flex justify-center border py-2 px-2 bg-orange-700 rounded-lg shadow-2xl"> 
         <h2  class="font-montserrat font-bold text-white ">
            {{profileData.nse_number}}
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-1 flex justify-center ">
         <div class="flex justify-center"> 
         <h2  class="font-montserrat font-bold text-green-950">
            {{profileData.executive_post}}
            </h2><b></b>
        </div>
        </div>

    

       

        <div class="
         py-1 flex justify-center ">
         <div class="flex justify-center"> 
        
         <h2 class="font-montserrat font-bold  text-green-950">
            {{profileData.engineering_field}}
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-1 flex justify-center bg-white border border-gray-500 px-2 rounded-lg shadow-inner ">
         <div class="flex justify-center items-center"> 
         <h2  class="font-montserrat font-bold text-green-950">
            {{profileData.phone_number}}
           </h2>
        </div>
        </div>
        <div class="
          mt-2 mb-2 py-1 flex justify-center  bg-white border border-gray-500 px-2 rounded-lg ">
         <div class="flex justify-center items-center"> 
         <h2  class="font-montserrat font-bold text-green-950">
            {{profileData.email}}
           </h2>
        </div>
        </div>
        <div class="
         py-1 flex justify-center ">
         <div class="flex justify-center items-center"> 
         <h2  class="font-montserrat font-bold text-green-950">
            Annual-dues
            </h2><div class="ml-2 w-20 bg-green-700 py-1 px-1 border rounded-lg shadow-2xl"><h2 class="text-center font-montserrat font-extrabold text-white text-xs">settled</h2></div>
        </div>
        </div>
        <div class="
         py-1 flex justify-center ">
         <div class="flex justify-center items-center"> 
         <h2  class="font-montserrat font-bold text-green-950">
            verified
            </h2><div class="ml-10 w-20 bg-green-700 py-1 px-1 border rounded-lg"><h2 class="text-center font-montserrat font-extrabold text-white text-xs">yes</h2></div>
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
  //      BaseHeader
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
      return `https://nse-backend-production.up.railway.app/api/profile`;
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
                    console.log(response.data.data)
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

