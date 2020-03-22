import axios from 'axios'
const localURL = 'http://localhost:314/api'
const devURL = 'http://towntime.ca:3000'
axios.defaults.baseURL = devURL

export const getProducts = async () => (await axios.get('/products')).data
