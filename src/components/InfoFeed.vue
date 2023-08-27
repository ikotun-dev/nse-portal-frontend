<template>
    <TopHeader/>
    <BaseHeader/>
    <div class="h-64 w-90 border border-green-950 mx-2 my-2 rounded-lg ">
            
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