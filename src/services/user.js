import api from './api';

const userApi = {
    cadastro: (data) => api.post('/user', data)
}
  
export default userApi;