import axios from 'axios';

const AUTH_TOKEN = 'auth_token';

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem(AUTH_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.log("Unauthorized!");
        }
        return config;
    },
    error => Promise.reject(error)
);

export default instance;
