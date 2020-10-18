import axios from 'axios'

export const setAuth = (token: string) => {
  axios.defaults.headers = { Authorization: `Bearer ${token}` }
}
