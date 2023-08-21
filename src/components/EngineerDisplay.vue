<template>
    <div class="mx-0 lg:mx-2 mt-2  w-96 lg:w-70 h-24 py-4 sm:border-b-2 rounded-none lg:border-2 flex lg:rounded-lg lg:border-orange-950 hover:bg-gray-100">
       <i class="fas fa-circle-user ml-8 mr-4 lg:mr-4 mb-4 text-6xl text-green-800"></i>
        <div>
            <h3  class="mt-1  font-bold ">{{ engr.username }}</h3>
            <h4 class="mt-1  text-sm text-green-950">{{ engr.username }}</h4> 
        </div>
    </div>
</template>
<script>
export default{
    props : ['engr']
}
</script>



