<template>
    <TopHeader>
    </TopHeader>
    <BaseHeader>
    </BaseHeader>
    <div class="flex">
      <div class="w-1/7 bg-gray-200 ">
        <!-- Sidebar content -->
        <SideBar/>
        <!-- You can place the sidebar content here -->
      </div>
      <div class="flex flex-col">
      <div class="flex items-center mt-4 ml-10">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search by username"
      class="px-2 py-1 border border-green-800 hover:border-2 rounded-md"
    />
    <button @click="searchEngineers" class="ml-2 px-4 py-1 bg-green-800 hover:bg-green-400 text-white rounded-md">
      Search
    </button>
  </div>
        <div
        class="lg:px-2 sm:px-2 lg:py-1 py-2 lg:h-96 sm:h-120 lg:w-120 sm:w-70 lg:rounded-lg sm:rounded-sm  lg:mt-4 mb-4 ml-2 shadow-5xl ">
        <div class="flex flex-wrap">
        <EngineerDisplay v-for="engineer in engineers" :key="engineer.id" :engr="engineer"/>
      </div>
      </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import TopHeader from './TopHeader.vue';
import BaseHeader from './BaseHeader.vue';
import SideBar from './SideBar.vue';
import EngineerDisplay from './EngineerDisplay.vue'

//import ProfileForm from './ProfileForm'
export default { 
    components :  {
        TopHeader,
        BaseHeader,
        SideBar,
        EngineerDisplay,
       // ProfileForm
    },
    data() { 
      return{
        engineers : []
      };
    },
    methods : { 
    
      async fetchEngineers() { 
        try{
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/all-engineers', {headers : { 'Authorization' : `Bearer ${token}`}})
        
        this.engineers =  response.data.data;
        // this.engineers = response.data;
        console.log('Engineers Data:', this.engineers);
        console.log(response.data.data)
      }
      catch(error) { 
        console.log('error', error)
      }
    }},
    mounted() { 
      this.fetchEngineers(); 
    },
}
</script> 

