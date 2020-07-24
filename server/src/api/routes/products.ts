import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { getProducts } from '../../services/productList'
import { jwtCheck } from '../middlewares'
import { decode } from '../../services/jwt'
export default (app: Router) => {
  app.use('/products', route)

  route.get('/', async (req: Request, res: Response) => {
    const productList = await query('productList', [])
    const products = await getProducts(productList.data)

    res.json(products).status(200)
  })
  route.put('/like', jwtCheck, async (req: Request, res: Response) => {
    console.log(decode(req))
    const { productID } = req.body
    try {
      const likeProduct = await query('likeProduct', [productID])
      res.json(likeProduct).status(200)
    } catch (error) {
      res.json('Invalid productID').status(200)
    }
  })
  route.put('/dislike', jwtCheck, async (req: Request, res: Response) => {
    const { productID } = req.body
    try {
      const likeProduct = await query('dislikeProduct', [productID])
      res.json(likeProduct).status(200)
    } catch (error) {
      res.json('Invalid productID').status(200)
    }
  })
}
