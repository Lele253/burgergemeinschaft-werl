import axios from "axios";

axios.defaults.baseURL = 'https://leandro-graf.de:8088/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
