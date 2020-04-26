import { Router } from 'express'
import user from './routes/user'
import products from './routes/products'
import payment from './routes/payment'

// guaranteed to get dependencies
export default () => {
  const app = Router()
  user(app)
  products(app)
  payment(app)

  return app
}
