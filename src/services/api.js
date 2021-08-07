import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3333',
});
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export default api;