import api from './api';

const addressApi = {
    cadastro: (id, data) => api.post(`/address/${id}`, data)
}
  
export default addressApi;