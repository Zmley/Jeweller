import { Router, Request, Response } from 'express'
const route = Router()

import query from '../../services/db'

export default (app: Router) => {
  app.use('/products', route)

  route.get('/', async (req: Request, res: Response) => {
    const productList = await query('productList', [])

    productList.data.map(product => {
      product.tags = JSON.parse(product.tags)
      product.tags = product.tags.filter((tag: string) => tag !== '-')
    })
    return res.json(productList).status(200)
  })
}
