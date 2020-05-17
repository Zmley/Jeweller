import { Router, Request, Response } from 'express'
const route = Router()

import query from '../../services/db'

export default (app: Router) => {
  app.use('/products', route)

  route.get('/', async (req: Request, res: Response) => {
    const productList = await query('productList', [])
    const productSizeList = await query('productSizeList', [])
    productList.data.map(product => {
      product.tags = JSON.parse(product.tags)
      product.selections = productSizeList.data.filter(
        productSize => productSize.productID === product.id
      )
      product.tags = product.tags.filter((tag: string) => tag !== '-')
    })

    return res.json(productList).status(200)
  })
}
