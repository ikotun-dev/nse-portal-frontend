<template>
    <TopHeader/>
    <BaseHeader/>
    <div class="ml-4 flex mt-2 items-center">
    <router-link to="/find-employees" class="text-3xl mr-2 font-bold text-green-900">
      &leftarrow;
    </router-link>
    </div>
    <div class="h-48 w-90 border border-green-950 mx-2 my-2 rounded-lg lg:hidden">
        <img class="h-48 rounded-lg" :src="require('../assets/images/slider4.jpg')"/>
    </div>
    <div class="h-48 w-90 border border-green-950 mx-2 my-2 rounded-lg lg:hidden">
        <img class="h-48 rounded-lg" :src="require('../assets/images/slider3.jpg')"/>
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