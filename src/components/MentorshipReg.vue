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
            <div class="bg-white mx-4 flex justify-center">
                <label class="mt-8 ml-4 font-montserrat font-bold">Mentorship Type</label>
                <select id="years" size="5"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>

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