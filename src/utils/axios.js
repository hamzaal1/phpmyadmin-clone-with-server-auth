import axios from "axios";

const axios_instance = axios.create({
    baseURL: 'http://localhost:4000'
});

export default axios_instance;