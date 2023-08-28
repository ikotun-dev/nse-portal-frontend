<template>
    <TopHeader/>
    <BaseHeader/>
    <div class="flex flex-col items-center justify-center mt-4">
        <h2 class="text-green-900 text-xl font-montserrat font-bold">( NSE ) </h2>
        <h2 class="text-green-800 text-xl font-montserrat font-bold">Nigerian Society of Engineers</h2>
    </div>
    <div class="ml-4 flex mt-2 items-center">
    <router-link to="/find-employees" class="text-3xl mr-2 font-bold text-green-900">
      &leftarrow;
    </router-link>
    </div>
    
    <div class="h-48 w-90 border-2 border-green-800 mx-3 my-3 rounded-lg lg:hidden">
        <img class="h-48 rounded-lg" :src="require('../assets/images/slider4.jpg')"/>
    </div>

    <div class="h-48 w-90 border border-green-800 mx-3 my-3 rounded-lg lg:hidden">
        <img class="h-48 rounded-lg" :src="require('../assets/images/slider3.jpg')"/>
    </div>

    <div class="h-48 w-90 border border-green-800 mx-3 my-3 rounded-lg lg:hidden">
        <img class="h-48 rounded-lg" :src="require('../assets/images/slider1.jpg')"/>
    </div>

</template>
<script>
import BaseHeader from './BaseHeader.vue';
import TopHeader from './TopHeader.vue';
export default{
    components : {
        BaseHeader,
        TopHeader
    }
}
</script>