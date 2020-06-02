import axios from 'axios';
// const url = 'http://localhost:3000/api/';
const url = '/api/';
export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
  },
  products(){
    return axios.get(url + 'products').then(response => response.data);
  },
  productsId(id){
    return axios.get(url + `products/${id}`).then(response => response.data);
  },
}