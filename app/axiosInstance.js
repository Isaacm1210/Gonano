import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://gonanomailer.onrender.com',
    withCredentials: true,
  });
  export default axiosInstance;