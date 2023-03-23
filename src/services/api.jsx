import axios from "axios"
import { parseCookies } from "nookies";

const { 'mundoweb-auth-token': token } = parseCookies();

const api = axios.create({
    baseURL:  import.meta.env.VITE_API_BASE_URL,
})

if (token) {
  api.defaults.headers.authorization = `Bearer ${token}`;
}

export default api