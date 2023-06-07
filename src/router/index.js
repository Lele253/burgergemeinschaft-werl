import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PressearchivView from "@/views/PressearchivView";
import TagesordnungView from "@/views/TagesordnungView";
import UnserTeamView from "@/views/UnserTeamView";
import AktuellesView from "@/views/AktuellesView";
import ErfolgeView from "@/views/ErfolgeView";
import PositionView from "@/views/PositionView";
import kommentareView from "@/views/KommentareView";
import MitgliedView from "@/views/MitgliedView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/aktuelles',
        name: 'aktuelles',
        component: AktuellesView
    },
    {
        path: '/erfolge',
        name: 'erfolge',
        component: ErfolgeView
    },
    {
        path: '/position',
        name: 'position',
        component: PositionView
    },
    {
        path: '/kommentare',
        name: 'kommentare',
        component: kommentareView
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
    {
        path: '/mitglied',
        name: 'Mitglied werden',
        component: MitgliedView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
