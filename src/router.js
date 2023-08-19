import { createRouter, createWebHistory } from "vue-router";
import LoginForm from './components/LoginForm.vue'
import HomePage from './components/HomePage'
import CompleteProfile from './components/CompleteProfile'
import SideBar  from './components/SideBar'
import ProfileForm from './components/ProfileForm'

const routes = [ 
    {'path' : '/', component: HomePage},
    {'path' : '/login', component: LoginForm},
    {'path' : '/update-profile', component: CompleteProfile},
    {'path' : '/sidebar', component : SideBar},
    {'path' : '/formprofile', component : ProfileForm}
]

const router = createRouter({
    history : createWebHistory(), routes
})

export default router
