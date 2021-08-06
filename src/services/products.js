import api from './api';

const productsApi = {
    
    read: () => api.get('/products'),
  }
  
  export default productsApi;