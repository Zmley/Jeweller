import { Router } from 'express'
import user from './routes/user'
import products from './routes/products'

// guaranteed to get dependencies
export default () => {
  const app = Router()
  user(app)
  products(app)

  return app
}
