import { Router, Request, Response } from 'express'
const route = Router()

import query from '../../loaders/db'

export default (app: Router) => {
  app.use('/products', route)

  route.get('/', async (req: Request, res: Response) => {
    const productList = await query('productList', [])
    return res.json(productList).status(200)
  })
}