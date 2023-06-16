import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AktuellesView from "@/views/AktuellesView";
import ErfolgeView from "@/views/ErfolgeView";
import PositionView from "@/views/PositionView";
import kommentareView from "@/views/KommentareView";
import MitgliedView from "@/views/MitgliedView";
import AdminView from "@/views/AdminView";
import ImpressumView from "@/views/ImpressumView";
import linksView from "@/views/LinksView";
import PressearchivView from "@/views/PressearchivView";
import UnserTeamViewNeu from "@/views/UnserTeamViewNeu";

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
        path: '/admin',
        name: 'Admin',
        component: AdminView
    },
    {
        path: '/pressearchiv',
        name: 'pressearchiv',
        component: PressearchivView
    },
    {
        path: '/team',
        name: 'team',
        component: UnserTeamViewNeu
    },
    {
        path: '/mitglied',
        name: 'Mitglied werden',
        component: MitgliedView
    },
    {
        path: '/impressum',
        name: 'Impressum',
        component: ImpressumView
    },
    {
        path: '/links',
        name: 'Links',
        component: linksView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
