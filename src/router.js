import { createRouter, createWebHashHistory } from "vue-router";
import LoginForm from './components/LoginForm.vue'
import HomePage from './components/HomePage'
import CompleteProfile from './components/CompleteProfile'
import SideBar  from './components/SideBar'
import ProfileForm from './components/ProfileForm'
import EngineerDisplay from './components/EngineerDisplay'
import FindEmployees from './components/FindEmployees'
import EngineerProfile from './components/EngineerProfile'
import MyProfile from './components/MyProfile'
import InfoFeed from './components/InfoFeed'
import MentorshipReg from './components/MentorshipReg'
import MentorPage from './components/MentorPage'

//import { createStore } from "vuex";
const routes = [ 
    {'path' : '/', component: HomePage},
    {'path' : '/login', component: LoginForm},
    {'path' : '/update-profile', component: CompleteProfile},
    {'path' : '/sidebar', component : SideBar},
    {'path' : '/formprofile', component : ProfileForm},
    {'path' : '/engdisplay', component : EngineerDisplay},
    {'path' : '/find-employees', component : FindEmployees},
    {'path' : '/engineer/:id', component  : EngineerProfile, props : true},
    {'path' : '/profile', component : MyProfile, props : true},
    {'path' : '/dashboard', component : InfoFeed},
    {'path' : '/mentorship', component: MentorshipReg},
    {'path' : '/mentor-view', component: MentorPage},
    { path: '/:pathMatch(.*)*', redirect: '/' },

]


/*
const store = createStore({
    state(){

    }
})*/
const router = createRouter({
    history : createWebHashHistory('nse-portal-frontend'), routes
})

export default router
