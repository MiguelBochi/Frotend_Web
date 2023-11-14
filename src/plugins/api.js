import axios from 'axios'
/*const MY_IP = import.meta.env.VITE_MY_IP*/

const api = axios.create({
  baseURL: `https://grandeorvalho-dev-scbe.3.us-1.fl0.io/api/`,
})

export default api