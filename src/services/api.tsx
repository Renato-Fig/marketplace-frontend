import axios from "axios"
import { parseCookies } from "nookies";

const { 'mundoweb-auth-token': token } = parseCookies();

const api = axios.create({
    baseURL: "https://judorest.azurewebsites.net/swagger/v1/swagger.json",
})

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api