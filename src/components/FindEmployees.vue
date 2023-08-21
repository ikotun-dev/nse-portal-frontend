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
      <div class="flex-1 p-4 mr-4 relative">
        <EngineerDisplay/><EngineerDisplay/><EngineerDisplay/>
      
      </div>
    </div>
  
    
</template>
<script>
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
    }
}
</script> 