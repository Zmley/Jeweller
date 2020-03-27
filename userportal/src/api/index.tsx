import axios from 'axios'
const localURL = 'http://localhost:314/api'
const devURL = 'http://api.towntime.ca:8000/api'
axios.defaults.baseURL = devURL

export const getProducts = async () => (await axios.get('/products')).data
