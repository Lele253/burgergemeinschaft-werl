import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aktuellesView from "@/views/AktuellesView";
import BGErfolgeView from "@/views/BG-ErfolgeView";
import BGPositionView from "@/views/BG-PositionView";
import KommentareView from "@/views/KommentareView";
import PressearchivView from "@/views/PressearchivView";
import TagesordnungView from "@/views/TagesordnungView";
import UnserTeamView from "@/views/UnserTeamView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aktuelles',
    name: 'aktuelles',
    component: aktuellesView
  },
  {
    path: '/erfolge',
    name: 'erfolge',
    component: BGErfolgeView
  },
  {
    path: '/postion',
    name: 'postion',
    component: BGPositionView
  },
  {
    path: '/kommentare',
    name: 'kommentare',
    component: KommentareView
  },
  {
    path: '/pressearchiv',
    name: 'pressearchiv',
    component: PressearchivView
  },
  {
    path: '/tagesordnung',
    name: 'tagesordnung',
    component: TagesordnungView
  },
  {
    path: '/team',
    name: 'team',
    component: UnserTeamView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
