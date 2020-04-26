import axios from 'axios'
const localURL = 'http://localhost:8000/api'
const devURL = 'http://towntime.ca:3000'
axios.defaults.baseURL = localURL

export const getProducts = async () => (await axios.get('/products')).data

export const createPayment = async () => (await axios.post('/payment')).data
