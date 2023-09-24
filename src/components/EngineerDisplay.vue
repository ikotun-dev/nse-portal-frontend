<template>
    <div class="mx-0 lg:mx-2 mt-2 pt-3 lg:pt-3 w-full  lg:w-70 h-24 py-1 sm:border-b-2 rounded-none lg:border-2 flex lg:rounded-sm lg:border-orange-950">
     
            <div class="relative ">
      <img v-if="engr.profile_image" :src="engr.profile_image" alt="Profile Image" class=" ml-8 mr-4 lg:mr-4 w-16 h-16 rounded-full border border-orange-950">
      <div v-else><i class="fas fa-circle-user ml-8 mr-4 lg:mr-4 mb-4 text-6xl text-green-950"></i></div>
 
    </div>
        <div>
            <div class="flex items-center ">
                <h3  class="mt-1 text-xs font-montserrat font-extrabold mr-1">{{ engr.fullname }}</h3>
            <i class="mt-1 fas fa-certificate  text-green-900"></i>

            </div>
            
            <h4  class=" font-montserrat text-sm font-light ">{{ engr.engineering_field}}</h4>
            <h6  class="font-montserrat font-bold  text-sm">{{ engr.executive_post}}</h6>
            
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



