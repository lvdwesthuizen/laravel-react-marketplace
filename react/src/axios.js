import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// axiosClient.interceptors.request.use((config) => {
//    config.headers.Authorization = `Bearer`
// });

export default axiosClient;
