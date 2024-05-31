import { createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import MainLayout from '../components/MainLayout.vue'
//@ts-ignore
import HomeView from '../views/HomeView.vue'
//@ts-ignore
import StudentView from '../views/StudentView.vue'
//@ts-ignore
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/students',
          name: 'stutents',
          component: StudentView
        }
      ]
    },
    {
      path: '/',
      name: "login",
      component: LoginView
    }
    
  ]
})

export default router
