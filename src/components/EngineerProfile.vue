<template>
    <TopHeader></TopHeader>
    <BaseHeader></BaseHeader>
    <div class="flex flex-col items-center mt-4 ">
        <div>
            <i class="fas fa-circle-user mb-4 text-9xl text-green-800"></i>
        </div>
        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-between"> 
        
            <h2 class="font-pop-bold font-bold mr-10 text-green-800">
            Name 
            </h2><b></b>
         <h2 class="font-pop-bold font-bold text-green-950 ml-9">
            {{profileData.fullname}}
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-between"> 
        
            <h2 class="font-pop-bold font-bold mr-10 text-green-800">
            Executive Post  
            </h2><b></b>
         <h2  class="font-pop-bold font-bold text-green-950 ml-9">
            {{profileData.executive_post}}
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-between"> 
        
            <h2 class="font-pop-bold font-bold text-green-800 mr-16">
            Field
            </h2><b></b>
         <h2 class="font-pop-bold font-bold text-green-950 ml-9">
            {{profileData.engineering_field}}
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-between"> 
        
            <h2 class="font-pop-bold mr-36 font-bold text-green-800">
            CV
            </h2><b></b>
            <div class="bg-green-400 ml-2 px-2 rounded-md" href="{{ profileData.resume }}">
                <h2 class="font-pop-bold mt-1 font-bold text-xs text-green-950 hover:text-green-200">
            view
            </h2><b></b>
            </div>
        
        </div>
        </div>

        
    </div>
</template>
<script>
import TopHeader from './TopHeader.vue';
import BaseHeader from './BaseHeader.vue';
import axios from 'axios';

export default{
    props : ['id'],
    components : {
        TopHeader,
        BaseHeader
    },
    data() { 
        return { 
            profileData : [],
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
            }
        }
    }
}
</script>

