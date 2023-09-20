<template>
    <div class="mx-0 lg:mx-2 mt-2 lg:pt-1 w-99 lg:w-70 h-24 py-1 sm:border-b-2 rounded-none lg:border-2 flex lg:rounded-sm lg:border-orange-950 hover:bg-gray-100">
     
            <div class="relative ">
      <div><i class="fas fa-screwdriver-wrench ml-8 mr-4 lg:mr-4 mb-2 mt-4 text-4xl text-green-950"></i></div>
 
    </div>
        <div>
            <div class="flex items-center ">
                <h3  class="mt-1 text-xs font-montserrat font-extrabold mr-1">Request :  {{mentorshipRequest.mentorship_type}}</h3>
            <i class="mt-1 fas fa-laptop  text-green-900"></i>

            </div>
            <h4  class=" font-montserrat text-sm font-light ">{{mentorshipRequest.preffered_location}}</h4>
            <h6  class="font-montserrat font-bold  text-sm">{{mentorshipRequest.role}}</h6>
            <h6  class="font-thin text-xs ">{{mentorshipRequest.engineer_name}}</h6>

            
        </div>
    </div>
</template>
<script>
export default{
    props : { 
        'mentorshipRequest' : Object
    },
}
</script>



