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
            Engr. Collins
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-between"> 
        
            <h2 class="font-pop-bold font-bold mr-10 text-green-800">
            Executive Post  
            </h2><b></b>
         <h2 class="font-pop-bold font-bold text-green-950 ml-9">
            Dev
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
            Mechanical
            </h2><b></b>
        </div>
        </div>

        <div class="
         py-4 flex justify-center ">
         <div class="flex justify-between"> 
        
            <h2 class="font-pop-bold mr-36 font-bold text-green-800">
            CV
            </h2><b></b>
            <div class="bg-green-400 ml-2 px-2 rounded-md">
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

export default{
    components : {
        TopHeader,
        BaseHeader
    }
}
</script>