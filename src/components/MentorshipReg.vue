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


            <form>
                <div class="bg-white mx-4 ">
                    <h2 class="mt-4 text-sm lg:text-2xl font-montserrat font-extrabold">Mentee Registration (Insearch of
                        Mentorship)</h2>
                    <div class="mt-8 mb-8">
                        <label class=" ml-4 text-sm lg:text-sm font-montserrat font-bold">Mentorship Type</label>
                        <select id="mentorship_types" v-model="mentorship_type"
                            class="ml-8 font-montserrat font-bold text-xs p-2  text-green-900 outline-green-900 ">
                            <option selected>None</option>
                            <option value="employment">Employment</option>
                            <option value="guidance">Guidance</option>
                            <option value="sponsorship">Sponsorship</option>
                            <option value="recommendation">Recommendation</option>
                        </select>
                    </div>
                    <label class="mt-24 ml-4 text-sm lg:text-sm font-montserrat font-bold">Preferred Location</label>
                    <input v-model="preferred_location"
                        class="lg:ml-25 w-80 p-2 mb-4 mt-4 ml-4 border border-green-900 rounded-lg font-montserrat text-sm outline-none focus:ring-green-600 focus:border-2" />
                    <br />
                    <label class="mt-24 ml-4 text-sm lg:text-sm font-montserrat font-bold">Role Type (Remote, Hybrid,
                        Onsite)</label>
                    <input v-model="role_type"
                        class="w-80 p-2 mb-4 mt-4 ml-4 border border-green-900 rounded-lg font-montserrat text-sm outline-none focus:ring-green-600 focus:border-2" />
                    <div class="mt-4 flex">
                        <label class="ml-4 text-sm lg:text-sm font-montserrat font-bold">Role(Internship, FullTime)</label>
                        <h6 class="text-red-600 text-xs mt-1 ml-2 font-extrabold">*if employment</h6>
                    </div>

                    <input v-model="role"
                        class="w-80 p-2 mb-4 mt-4 ml-4 border border-green-900 rounded-lg font-montserrat text-sm outline-none focus:ring-green-600 focus:border-2" />

                    <br />

                    <div v-show="registerSuccess" class=" mx-3 px-4 py-3 border bg-green-300 rounded-md border-green-800 ">
                        <h2 class="text-center font-montserrat text-green-900 font-extrabold">Mentee Registration
                            successfull</h2>
                    </div>

                    <div v-show="error" class=" mx-3 px-4 py-3 border bg-red-400 rounded-md border-red-800 ">
                        <h2 class="text-center font-montserrat text-red-900 font-extrabold">An Error occured</h2>
                    </div>

                    <h3 v-show="isLoading" class="ml-5 text-green-800 font-extrabold">Loading....</h3>
                    <br /><button type="submit"
                        class="ml-4 bg-green-600 text-sm font-montserrat font-extrabold text-white px-4 py-2 rounded-md"
                        @click="submit_mentorship(); submit_handler()">Submit</button>
                    <br><button type="submit"
                        class="ml-4 mt-4 text-sm  bg-orange-600 font-montserrat font-extrabold text-white px-4 py-2 rounded-md"
                        @click="mentor_switch()">I'm a Mentor</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TopHeader from './TopHeader.vue';
import BaseHeader from './BaseHeader.vue';
import SideBar from './SideBar.vue';
//import EngineerDisplay from './EngineerDisplay.vue'

//import ProfileForm from './ProfileForm'
export default {
    components: {
        TopHeader,
        BaseHeader,
        SideBar,
        //EngineerDisplay,
        // ProfileForm
    },
    data() {
        return {
            mentorship_type: null,
            preferred_location: null,
            role_type: null,
            role: null,
            isMenuOpen: false,
            isLoading: false,
            registerSuccess: false,
            error: false
        }

    },
    methods: {
        openMenu() {
            console.log("Toggle button clicked");
            this.isMenuOpen = !this.isMenuOpen; // Toggle the value
            console.log("isMenuOpen:", this.isMenuOpen);
        },
        submit_handler() {
            this.isLoading = false
        },
        async submit_mentorship() {

            const mentorship_data = {
                'mentorship_type': this.mentorship_type,
                'preffered_location': this.preferred_location,
                'role_type': this.role_type,
                'role': this.role,
            }
            console.log(mentorship_data)
          //  alert(mentorship_data.preffered_location)
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('https://nse-backend-production.up.railway.app/api/register-mentee', mentorship_data, { headers: { 'Authorization': `Bearer ${token}` } })
                if (response.status === 200) {
                    this.registerSuccess = true
                    console.log(response.data)
                    setTimeout(() => {
                        this.$router.push('/find-employees')
                    }, 3000
                    )
                }else if(response.status === 400 ){
                    this.error = true

                }
                else{
                    this.error = true
                    console.log(response.data)
                }
            }
            catch(error) {
                this.error = true
                console.log(error)
            
        }
    },
    mentor_switch() {
        this.$router.push('/mentor-view')
    }
}
    }
</script>