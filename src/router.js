import { createRouter, createWebHistory } from "vue-router";
import LoginForm from './components/LoginForm.vue'
import HomePage from './components/HomePage'
import CompleteProfile from './components/CompleteProfile'

const routes = [ 
    {'path' : '/', component: HomePage},
    {'path' : '/login', component: LoginForm},
    {'path' : '/update-profile', component: CompleteProfile}
]

const router = createRouter({
    history : createWebHistory(), routes
})

export default router
