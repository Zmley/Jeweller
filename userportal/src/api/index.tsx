import axios from 'axios'
import { useAuth0 } from '../react-auth0-spa'

const localURL = 'http://localhost:8000/api'
const devURL = 'http://towntime.ca:3000'
axios.defaults.baseURL = localURL

export const getProducts = async () => (await axios.get('/products')).data
export const getRelatedProducts = async () => (await axios.get('/related')).data
export const getArtist = async (id: string) =>
  (await axios.get('/users/artist', { params: { id: id } })).data

export const createPayment = async () => (await axios.post('/payment')).data

export const getCatalogues = async () =>
  (await axios.get('users/catalogue')).data
