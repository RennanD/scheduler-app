import axios from 'axios';

const api = axios.create({
  baseURL: "https://api-objetivo.herokuapp.com"
});

export default api;
