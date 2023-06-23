import {createRouter, createWebHistory} from 'vue-router'
import AktuellesView from "@/views/AktuellesView";
import PositionView from "@/views/PositionView";
import kommentareView from "@/views/KommentareView";
import MitgliedView from "@/views/MitgliedView";
import VerwaltungView from "@/views/VerwaltungView";
import ImpressumView from "@/views/ImpressumView";
import linksView from "@/views/LinksView";
import PressearchivView from "@/views/PressearchivView";
import VorstandView from "@/views/VorstandView";
import RatView from "@/views/RatView";
import HomeViewNeu from "@/views/HomeViewNeu";
import ErfolgeNeuView from "@/views/ErfolgeNeuView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeViewNeu
    },
    {
        path: '/aktuelles',
        name: 'aktuelles',
        component: AktuellesView
    },
    {
        path: '/erfolge',
        name: 'erfolge',
        component: ErfolgeNeuView
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
        path: '/verwaltung',
        name: 'verwaltung',
        component: VerwaltungView
    },
    {
        path: '/pressearchiv',
        name: 'pressearchiv',
        component: PressearchivView
    },
    {
        path: '/rat',
        name: 'rat',
        component: RatView
    },
    {
        path: '/vorstand',
        name: 'vorstand',
        component: VorstandView
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
