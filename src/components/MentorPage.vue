<template>
    <TopHeader>
    </TopHeader>
    <BaseHeader>
    </BaseHeader>
    <div class="flex bg-white">
        <div class="fixed flex inset-0 bg-black bg-opacity-90 transition-opacity" :class="{ 'hidden': !isMenuOpen }"
            @click="openMenu">
            <nav class="bg-green-800 text-white h-screen w-64 lg:w-64 md:w-48"
                :class="{ 'hidden': !isMenuOpen, 'lg:block md:block': !isMenuOpen }">
                <div class="flex items-center justify-center h-16 ">

                </div>
                <ul class="">
                    <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold">
                        <router-link to="/find-employees">Find Employee</router-link>
                    </li>
                    <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold ">
                        <router-link to="/mentorship">Mentorship</router-link>
                    </li>
                    <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold ">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                    <router-link to="/profile">
                        <li class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold ">
                            My Profile
                        </li>
                    </router-link>
                    <!-- Add other links here -->
                </ul>
            </nav>
            <SideBar />
        </div>
        <div class="bg-gray-200 lg:block md:block" :class="{ 'hidden': !isMenuOpen }">
            <!-- Sidebar content -->
            <SideBar />
        </div>
        <div class="flex flex-col">
            <div class="flex items-center mt-4 ml-6">
                <button @click="openMenu">
                    <i class="fas fa-box mr-4 block md:hidden text-green-800 lg:hidden"></i>
                </button>
            </div>

            <div>
                <div class="bg-white h-screen">
                    <div v-if="isLoading" class="flex items-center justify-center mt-32 ml-36">
                        <div class="animate-spin rounded-full border-t-2 border-green-900 border-opacity-100 h-12 w-12">
                        </div>
                    </div>
                    <div v-else
                        class="lg:px-2 sm:px-2 lg:py-1 mt-6 py-1 lg:h-96 sm:h-120 lg:w-120 sm:w-70 lg:rounded-lg sm:rounded-sm  lg:mt-4 mb-1 ml-2 shadow-5xl ">
                        <div class="flex flex-wrap " :class="{ 'hidden': isMenuOpen }">
                            <router-link v-for="request in mentorshipRequests" :key="request.id"
                                :to="`/request/${request.id}`" class="cursor-pointer">
                                <MentorshipReq :mentorshipRequest="request" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TopHeader from './TopHeader.vue';
import BaseHeader from './BaseHeader.vue';
import SideBar from './SideBar.vue';
import MentorshipReq from './MentorshipReq.vue';
// import EngineerDisplay from './EngineerDisplay.vue';
// import ProfileForm from './ProfileForm'
export default {
    components: {

        TopHeader,
        BaseHeader,
        SideBar,
        MentorshipReq
        // ProfileForm
    },
    data() {
        return {
            mentorshipRequests: [],
            mentorship_type: null,
            preferred_location: null,
            role_type: null,
            role: null,
            isMenuOpen: false,
            isLoading: true,
        }

    },
    /*   created(){
           const MentReq = localStorage.getItem('mentorshipRequests')
           if(MentReq) { 
               const MenteRequests = JSON.parse(MentReq);
               console.log(MenteRequests)
   
           }else{
               this.getMentorshipRequests
           }
   
       }, */
    methods: {
        async getMentorshipRequests() {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get('https://nse-backend-production.up.railway.app/api/register-mentee', { headers: { 'Authorization': `Bearer ${token}` } })
                if (response.status === 200) {
                    this.mentorshipRequests = await response.data.data;
                    localStorage.setItem('mentorshsipRequests', JSON.stringify(response.data.data)); // Store in localStorage
                    // this.engineers = response.data;
                    console.log('Mentor Data:', this.mentorshipRequests);
                }
            } catch (error) {
                console.log(error)
            } finally {
                this.isLoading = false
            }
        },
        openMenu() {
            console.log("Toggle button clicked");
            this.isMenuOpen = !this.isMenuOpen; // Toggle the value
            console.log("isMenuOpen:", this.isMenuOpen);
        },
        submit_mentorship() {
            // mentorship_data = { 
            //     'mentorship_type' : this.mentorship_type,
            //     'preferred_location' : this.preferred_location,
            //     'role_type' : this.role_type,
            //     'role' : this.role,
            // }

        },
        mentor_switch() {
            this.$router.push('/mentor-view')
        }
    },
    mounted() {
        this.getMentorshipRequests()
    }
}
</script>