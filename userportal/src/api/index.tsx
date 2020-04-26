import axios from 'axios'
const localURL = 'http://localhost:314/api'
const devURL = 'http://towntime.ca:3000'
axios.defaults.baseURL = localURL

export const getProducts = async () => (await axios.get('/products')).data
export const getRelatedProducts = async () => (await axios.get('/related')).data
export const getCatalogues = async () => (await axios.get('/catalogue')).data
