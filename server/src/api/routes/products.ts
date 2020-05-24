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

    res.json(productList).status(200)
  })
  route.put('/like', async (req: Request, res: Response) => {
    const { productID } = req.body
    try {
      const likeProduct = await query('likeProduct', [productID])
      res.json(likeProduct).status(200)
    } catch (error) {
      res.json('Invalid productID').status(200)
    }
  })
  route.put('/dislike', async (req: Request, res: Response) => {
    const { productID } = req.body
    try {
      const likeProduct = await query('dislikeProduct', [productID])
      res.json(likeProduct).status(200)
    } catch (error) {
      res.json('Invalid productID').status(200)
    }
  })
}
