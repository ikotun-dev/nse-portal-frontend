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
      <div class="flex flex-wrap items-center  ">
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
      
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
    created() { 
      this.fetchEngineers(); 
    },
    methods : { 
      async fetchEngineers() { 
        try{
        const response = axios.get('http://127.0.0.1:8000/api/all-engineers')
        this.engineers = (await response).data;
      }
      catch(error) { 
        console.log('error', error)
      }
    }}

}
</script> 