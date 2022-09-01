import axios from 'axios';

const api = axios.create({
    baseURL: `https://simple-transport-backend.herokuapp.com`
})

export default api;