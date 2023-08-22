<template>
    <TopHeader>
    </TopHeader>
    <BaseHeader>
    </BaseHeader>
    <div class="flex">
      <div class="w-1/7 bg-gray-200 ">
        <!-- Sidebar content -->
        <div class="lg:block">        <SideBar/></div>
        
        <!-- You can place the sidebar content here -->
      </div>
      <div class="flex-1 p-4 mr-4 relative">
        <!-- Complete profile form -->
        <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="font-extrabold text-xl">Update Profile Details</label>
          </div>
          <label class="block mb-2 font-semibold">Full Name:</label>
          <input v-model="fullName" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Engineering Field:</label>
          <input v-model="engineeringField" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Years of Experience:</label>
          <input v-model="yearsOfExperience" type="number" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Resume:</label>
          <input type="file" @change="uploadResume" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Executive Post:</label>
          <input v-model="executivePost" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Profile Image:</label>
          <input type="file" @change="uploadProfileImage" class="w-full p-2 mb-4 border rounded-sm" />
  
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-sm" @click="completeProfile">Submit</button>
        </form>
      </div>
    </div>
</template>
<script>
import TopHeader from './TopHeader.vue';
import BaseHeader from './BaseHeader.vue';
import SideBar from './SideBar.vue';
import axios from 'axios';
//import ProfileForm from './ProfileForm'
export default { 
    components :  {
        TopHeader,
        BaseHeader,
        SideBar,
       // ProfileForm
    },
    data() { 
      return { 
        fullName : '',
        engineeringField : '',
        yearsOfExperience : '',
        uploadResume : '',
        executivePost : '',
        uploadProfileImage: '',
      }
    },
    methods : { 
       async completeProfile()  { 
        const formData = new FormData();
        formData.append('fullname', this.fullName);
        formData.append('engineering_field', this.engineeringField);
        formData.append('experience_years', this.yearsOfExperience);
        formData.append('resume', this.uploadResume); // Append the resume file
        formData.append('executive_post', this.executivePost);
        formData.append('profile_image', this.uploadResume); // Append the profile image file

        try  {
          const token = localStorage.getItem('token');
          const response = await axios.put('http://127.0.0.1:8000/api/update-profile', formData,  { headers : { 'Content-Type' : 'multipart/formData','Authorization' : `Bearer ${token}`}})
          if (response.status === 200){
            console.log("testing")
          }
        }catch(error) { 
          console.log(error)
        }
       }
     }
}
</script> 