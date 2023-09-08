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
          <li @click="mentorNavigator" class="mb-2 py-2 hover:bg-green-700 text-center font-montserrat font-bold ">
            <h2 @click="mentorNavigator">Mentorship</h2>
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
          <i class="fas fa-box mr-4 block md:hidden text-green-950 lg:hidden"></i>
        </button>
        <input v-model="searchQuery" type="text" placeholder="search by name, field"
          class="font-extralight text-sm px-2 py-2 w-60 bg-gray-100 border outline-none rounded-sm border-green-950 hover:border-b-2 " />
        <button @click="searchEngineers" class="ml-2 px-4 py-1 text-white rounded-md font-montserrat font-extrabold">
          <i class="text-xl text-green-950 font-extrabold mx-3 fas fa-search"></i>
        </button>
      </div>

      <div v-show="noResults" class="text-center">
        <h4 class="mt-4 font-montserrat font-thin">No results found<br /> click search icon again</h4>

      </div>
      <div class="bg-white h-screen">
        <div v-if="isLoading" class="flex items-center justify-center mt-32">
          <div class="animate-spin rounded-full border-t-2 border-green-900 border-opacity-100 h-12 w-12"></div>
        </div>
        <div v-else
          class="lg:px-2 sm:px-2 lg:py-1 mt-6 py-1 lg:h-96 sm:h-120 lg:w-120 sm:w-70 lg:rounded-lg sm:rounded-sm  lg:mt-4 mb-1 ml-2 shadow-5xl ">
          <div class="flex flex-wrap " :class="{ 'hidden': isMenuOpen }">
            <router-link v-for="engineer in engineers" :key="engineer.id" :to="`/engineer/${engineer.id}`"
              class="cursor-pointer">
              <EngineerDisplay :engr="engineer" />
            </router-link>
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
import EngineerDisplay from './EngineerDisplay.vue'

//import ProfileForm from './ProfileForm'
export default {
  components: {
    TopHeader,
    BaseHeader,
    SideBar,
    EngineerDisplay,
    // ProfileForm
  },
  data() {
    return {
      engineers: [],
      searchQuery: '',
      isMenuOpen: false,
      isLoading: true,
      noResults: false,
    };
  },
  created() {
    const engineersDataString = localStorage.getItem('engineersData');
    if (engineersDataString) {
      const engineersData = JSON.parse(engineersDataString);
      console.log(engineersData)
      // Now "engineersData" is an object containing your data
    } else {
      console.log(engineersDataString)
      // Handle case when data is not in local storage
    }
    this.searchEngineers();
  },
  methods: {
    async mentorNavigator() {
      try{
        const token = localStorage.getItem('token');
        const response = await axios.get('https://nse-backend-production.up.railway.app/api/check-status', { headers: { 'Authorization': `Bearer ${token}` } })
        if (response.status === 200) {
          console.log("if block")
          this.$router.push('/mentor-view');
        }else if (response.status === 202) {
          this.$router.push('/mentorship');
          console.log("else block for 400 Bad Request");
          // Handle the 400 error as needed
        }else{
        //  this.$router.push('/mentorship');
          console.log("else block for other status codes", response.status);
          // Handle other status codes here
        }}
        catch(error){
          console.log('wow')
        }
      
    },
    loading() {

    },
    openMenu() {
      console.log("Toggle button clicked");
      this.isMenuOpen = !this.isMenuOpen; // Toggle the value
      console.log("isMenuOpen:", this.isMenuOpen);
    },
    async fetchEngineers() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://nse-backend-production.up.railway.app/api/all-engineers', { headers: { 'Authorization': `Bearer ${token}` } })

        this.engineers = await response.data.data;
        localStorage.setItem('engineersData', JSON.stringify(response.data.data)); // Store in localStorage
        // this.engineers = response.data;
        console.log('Engineers Data:', this.engineers);
        console.log(response.data.data);
      } catch (error) {
        console.log('error', error)
      } finally {
        this.isLoading = false;
      }
    },
    async searchEngineers() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://nse-backend-production.up.railway.app/api/all-engineers`, {
          headers: { 'Authorization': `Bearer ${token}` },
          params: { search: this.searchQuery }
        });
        if (this.searchQuery != '') {
          if (Array.isArray(response.data.data) && response.data.data.length === 0) {
            this.noResults = true;
            this.searchQuery = '';
            this.engineers = null
          } else {
            this.noResults = false;
            this.engineers = response.data.data;

          }
        }
        else {
          this.noResults = false
          this.fetchEngineers()
        }

        console.log(this.engineers)
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

}
</script> 
