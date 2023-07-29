import {createStore} from 'vuex'

export default createStore({
    state: {
        user: null,
        routername: 'BG Werl',
        mobile: false,
        tablet: false,
        beiträge: [],
        erfolge: [],
        kommentare: [],
        rat: [],
        vorstand: [],
        pressearchiv: [],
        bewerbungen: [],


    },

    getters: {
        user: (state) => {
            return state.user
        },
        beiträge: (state) => {
            return state.beiträge
        },
        erfolge: (state) => {
            return state.erfolge
        },
        kommentare: (state) => {
            return state.kommentare
        }
    },
    mutations: {
        user(state, user) {
            state.user = user
        },
        beiträge: (state, beiträge) => {
            state.beiträge = beiträge
        },
        erfolge: (state, erfolge) => {
            state.erfolge = erfolge
        },
        kommentare: (state, kommentare) => {
            state.kommentare = kommentare
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user)
        },
        beiträge: (context, beiträge) => {
            context.commit('beiträge', beiträge)
        },
        erfolge: (context, erfolge) => {
            context.erfolge('erfolge', erfolge)
        },
        kommentare: (context, kommentare) => {
            context.commit('kommentare', kommentare)
        }
    },
    modules: {}
})
