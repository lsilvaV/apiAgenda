import axios from 'axios';

const Api = axios.create({
    baseURL:"https://10.133.52.40:3000",
});

export default Api;