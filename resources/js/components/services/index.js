import axios from 'axios';
// const url = 'http://localhost:3000/api/';
const url = '/api/';
export default {
  videos(videos) {
    return axios
      .post(url + 'login/', videos)
      .then(response => response.data);
  },
  products(){
    return axios.get(url + 'products').then(response => response.data);
  },
  productsId(id){
    return axios.get(url + `products/${id}`).then(response => response.data);
  },
}