import { createRouter, createWebHistory } from "vue-router";
import LoginForm from './components/LoginForm.vue'
import HomePage from './components/HomePage'
import CompleteProfile from './components/CompleteProfile'
import SideBar  from './components/SideBar'
import ProfileForm from './components/ProfileForm'
import EngineerDisplay from './components/EngineerDisplay'
import FindEmployees from './components/FindEmployees'

const routes = [ 
    {'path' : '/', component: HomePage},
    {'path' : '/login', component: LoginForm},
    {'path' : '/update-profile', component: CompleteProfile},
    {'path' : '/sidebar', component : SideBar},
    {'path' : '/formprofile', component : ProfileForm},
    {'path' : '/engdisplay', component : EngineerDisplay},
    {'path' : '/find-employees', component : FindEmployees}

]

const router = createRouter({
    history : createWebHistory(), routes
})

export default router
