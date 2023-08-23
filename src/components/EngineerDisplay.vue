<template>
    <div class="mx-0 lg:mx-2 mt-2  w-96 lg:w-70 h-24 py-4 sm:border-b-2 rounded-none lg:border-2 flex lg:rounded-lg lg:border-orange-950 hover:bg-gray-100">
     
            <div class="relative ">
      <img v-if="engr.profile_image" :src="engr.profile_image" alt="Profile Image" class=" ml-8 mr-4 lg:mr-4 w-16 h-16 rounded-full border border-orange-950">
      <div v-else><i class="fas fa-circle-user ml-8 mr-4 lg:mr-4 mb-4 text-6xl text-green-800"></i></div>
 
    </div>
        <div>
            <h3  class="mt-1  font-bold "> Engr. {{ engr.fullname }}</h3>
            <h4  class="  text-sm ">{{ engr.engineering_field}}</h4>
            <h6  class="  text-sm">{{ engr.executive_post}}</h6>
            
        </div>
    </div>
</template>
<script>
export default{
    props : { 
        'engr' : Object
    },
}
</script>



