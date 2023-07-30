import axios from "axios";

axios.defaults.baseURL = 'https://bg-werl.site:8080/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
