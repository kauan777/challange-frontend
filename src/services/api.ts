import axios from 'axios'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
//axios.defaults.headers.get['Access-Control-Allow-Headers'] = '*';

export const api = axios.create({
   // baseURL: 'https://6f6e-186-224-27-227.sa.ngrok.io/users'
    baseURL: 'https://6f6e-186-224-27-227.sa.ngrok.io/'
})