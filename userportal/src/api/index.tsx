import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_URL

export const getProducts = async () => axios.get('/products')

export const getRelatedProducts = async () => (await axios.get('/related')).data
export const getArtist = async (id: string) =>
  (await axios.get('/users/artist', { params: { id: id } })).data

export const createPayment = async () => (await axios.post('/payment')).data

export const getCatalogues = async () =>
  (await axios.get('users/catalogue')).data

export const setLike = async (isLike: boolean) =>
  isLike
    ? (await axios.get('products/like')).data
    : (await axios.get('products/dislike')).data
