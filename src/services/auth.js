import api from './api';

const authApi = {
    login: (data) => api.post('/session', data)
}
  
export default authApi;