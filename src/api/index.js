import axios from 'axios'

const api = axios.create({
  headers: { 'X-CMC_PRO_API_KEY': process.env.REACT_APP_API_KEY },
})

export default api
