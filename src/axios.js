import axios from "axios";

axios.defaults.baseURL = 'http://212.227.51.43:8080/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
