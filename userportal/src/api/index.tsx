import axios from 'axios'
const localURL = 'http://localhost:314/api'
axios.defaults.baseURL = localURL

export const getProducts = async () => (await axios.get('/products')).data
