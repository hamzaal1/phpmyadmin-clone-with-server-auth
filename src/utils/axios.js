import axios from "axios";

const axios_instance = axios.create({
    baseURL: 'https://phpmyadmin-clone-with-server-auth.vercel.app'
});

export default axios_instance;