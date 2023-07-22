import {createRouter, createWebHistory} from 'vue-router'
import AktuellesView from "@/views/AktuellesView";
import kommentareView from "@/views/KommentareView";
import MitgliedView from "@/views/MitgliedView";
import VerwaltungView from "@/views/VerwaltungView";
import ImpressumView from "@/views/ImpressumView";
import PressearchivView from "@/views/PressearchivView";
import VorstandView from "@/views/VorstandView";
import RatView from "@/views/RatView";
import ErfolgeNeuView from "@/views/ErfolgeNeuView";
import DatenschutzView from "@/views/DatenschutzView";
import HomeNeuView from "@/views/HomeNeuView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeNeuView
    },
    {
        path: '/datenschutz',
        name: 'datenschutz',
        component: DatenschutzView
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

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
