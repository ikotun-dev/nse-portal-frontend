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
          
          <label class="block mb-2 font-semibold">Engineering Field</label> 
          <input v-model="engineeringField" class="w-full p-2 mb-4 border rounded-sm" required/>
  
  
          <label class="block mb-2 font-semibold">CV ( Resume )  <h6 class="font-pop-bold font-bold text-sm text-red-950">*required format is PDF or JPG</h6></label>
          <input type="file" ref="resumeInput" @change="handleuploadResume" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Executive Post</label><h6 class="font-pop-bold font-bold text-sm text-red-950">*if none, leave blank</h6>
          <input v-model="executivePost" class="w-full p-2 mb-4 border rounded-sm" />
  
          <label class="block mb-2 font-semibold">Profile Image <h6 class="font-pop-bold font-bold text-sm text-red-950">*required format is JPG</h6></label>
          <input type="file" ref="profileImageInput" @change="handleUploadProfileImage" class="w-full p-2 mb-4 border rounded-sm" />
          <div class="py-2 px-2 bg-green-200 border border-green-900 mt-3 mb-4 ml-4 rounded-lg" v-show="updateSucess">
            <h4 class="text-green-950 text-center text-md font-montserrat font-extrabold ">Profile updated succesfully</h4>
          </div>
          <div v-show="submitClick">
            <h4 class="text-green-600 mb-4 ml-4 font-bold">Loading...</h4>
          </div>
          <div class="py-2 px-2 bg-red-200 border border-red-900 mt-3 mb-4 ml-4 rounded-lg" v-show="updateFailure">
            <h4 class="text-red-950 text-center text-md font-montserrat font-extrabold">an error occured, please retry</h4>
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-sm" @click="completeProfile(); submitHandler()">Submit</button>
       
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
        engineeringField : '',
        resume : null,
        executivePost : '',
        profileImage: null,
        updateSucess : false,
        updateFailure : false,
        submitClick : false,
      }
    },
    methods : { 
        submitHandler() { 
          //this.submitClick = !this.submitClick
        },
        handleUploadProfileImage() { 
          this.profileImage = this.$refs.profileImageInput.files[0]
        },      
        handleuploadResume() {
        this.resume = this.$refs.resumeInput.files[0];
    },
       async completeProfile()  { 
        const formData = new FormData();
        formData.append('engineering_field', this.engineeringField);
        formData.append('resume', this.resume); // Append the resume file
        formData.append('executive_post', this.executivePost);
        formData.append('profile_image', this.profileImage); // Append the profile image file

        try  {
          const token = localStorage.getItem('token');
          this.submitClick = true
          const response = await axios.put('https://nse-backend-production.up.railway.app/api/update-profile', formData,  { headers : { 'Content-Type' : 'multipart/formData','Authorization' : `Bearer ${token}`}})
          if (response.status === 200){
            this.updateSucess = true,
            this.submitClick = false,
            console.log("testing")
            // set timer 3 seconds 
            // then
            setTimeout(() => {
            this.$router.push('/find-employees')}, 4000
            )
             
          }
          else{
             this.updateFailure = true
          }
        }catch(error) { 
          this.updateFailure = true
          this.submitClick = false
          console.log(error)
        }finally{
          this.submitClick = false
        }
       }
     }
}
</script> 