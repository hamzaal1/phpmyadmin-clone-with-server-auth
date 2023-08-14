import axios from "axios";

const axios_instance = axios.create({
    baseURL: 'https://phpmyadmin-clone-backend.vercel.app'
});

export default axios_instance;