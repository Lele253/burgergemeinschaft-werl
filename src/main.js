import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import './axios'


loadFonts()
createApp(App)
    .use(QuillEditor)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')
