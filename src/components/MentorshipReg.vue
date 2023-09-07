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

            <div v-show="noResults" class="text-center">
                <h4 class="mt-4 font-montserrat font-thin">No results found<br /> click search icon again</h4>

            </div>
            <div class="bg-white mx-4 ">
                <h2 class="mt-4 text-sm lg:text-2xl font-montserrat font-extrabold">Mentee Registration (Insearch of Mentorship)</h2>
                <div class="mt-8">
                <label class=" ml-4 text-sm lg:text-sm font-montserrat font-bold">Mentorship Type</label>
                <select id="mentorship_types"
                    class="ml-8 font-montserrat font-bold text-xs p-2  text-green-900 outline-green-900 ">
                    <option selected>None</option>
                    <option value="employment">Employment</option>
                    <option value="guidance">Guidance</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="recommendation">Recommendation</option>
                </select>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
//import axios from 'axios'
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
            isMenuOpen: false

        }
    },
    methods: {
        openMenu() {
            console.log("Toggle button clicked");
            this.isMenuOpen = !this.isMenuOpen; // Toggle the value
            console.log("isMenuOpen:", this.isMenuOpen);
        }
    }
}
</script>