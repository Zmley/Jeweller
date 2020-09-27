import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { getProducts } from '../../services/productList'
import { jwtCheck } from '../middlewares'
import { decode } from '../../services/jwt'
import { generate } from '../../services/uuid'
import jwt from 'express-jwt'
export default (app: Router) => {
  app.use('/products', route)

  route.get('/', async (req: Request, res: Response) => {
    const productList = await query('productList', [])
    const products = await getProducts(productList.data)
    res.json(products).status(200)
  })
  route.get('/favourites', jwtCheck, async (req: Request, res: Response) => {
    const userAccount: any = decode(req)
    try {
      const likedProducts = await query('getFavourite', [userAccount.sub])
      const products = await getProducts(likedProducts.data)
      res.json(products).status(200)
    } catch (error) {
      console.log(error)
      res.json('Invalid productID').status(200)
    }
  })
  route.put('/like', jwtCheck, async (req: Request, res: Response) => {
    const { productID } = req.body
    const userAccount: any = decode(req)
    const uuid = generate()
    try {
      const likeProduct = await query('likeProduct', [productID])

      await query('addToFavourite', [uuid, productID, userAccount.sub])
      res.json(likeProduct).status(200)
    } catch (error) {
      console.log(error)
      res.json('Invalid productID').status(200)
    }
  })
  route.put('/dislike', jwtCheck, async (req: Request, res: Response) => {
    const { productID } = req.body
    const userAccount: any = decode(req)
    try {
      const likeProduct = await query('dislikeProduct', [productID])
      await query('removeFromFavourite', [productID, userAccount.sub])
      res.json(likeProduct).status(200)
    } catch (error) {
      console.log(error)
      res.json('Invalid productID').status(200)
    }
  })
  route.put('/offShelf', jwtCheck, async (req: Request, res: Response) => {
    const { productID } = req.body
    try {
      const likeProduct = await query('offShelfProduct', [productID])
      res.json(likeProduct).status(200)
    } catch (error) {
      res.json('Invalid productID').status(200)
    }
  })
  route.post('/addToCart', jwtCheck, async (req: Request, res: Response) => {
    const uuid = generate()
    const { productID, amount } = req.body
    const userAccount: any = decode(req)

    try {
      const result = await query('addToCart', [
        uuid,
        productID,
        amount,
        userAccount.sub
      ])
      res.json(result).status(200)
    } catch (error) {
      console.log(error)
      res.json('Invalid productID').status(200)
    }
  })
  route.patch(
    '/removeFromCart',
    jwtCheck,
    async (req: Request, res: Response) => {
      const { cartID } = req.body
      const userAccount: any = decode(req)
      try {
        const result = await query('removeFromCart', [cartID, userAccount.sub])
        res.json(result).status(200)
      } catch (error) {
        console.log(error)
        res.json('Invalid productID').status(200)
      }
    }
  )
  route.patch('/updateCart', jwtCheck, async (req: Request, res: Response) => {
    const { cartID, amount } = req.body
    const userAccount: any = decode(req)
    try {
      const result = await query('updateCart', [
        cartID,
        userAccount.sub,
        amount
      ])
      res.json(result).status(200)
    } catch (error) {
      console.log(error)
      res.json('Invalid productID').status(200)
    }
  })
  route.post(
    '/uploadProduct',
    jwtCheck,
    async (req: Request, res: Response) => {
      const { options, productName, productDescription, tags } = req.body
      console.log(req)
      const userAccount: any = decode(req)
      const uuid = generate()
      try {
        const result = await query('createProduct', [])
        res.json(result).status(200)
      } catch (error) {
        console.log(error)
        res.json('Invalid productID').status(200)
      }
    }
  )
  route.get('/uploadURL', jwtCheck, async (req: Request, res: Response) => {
    const { fileType, amount } = req.query
    try {
      const result = await query('createProduct', [])
      res.json(result).status(200)
    } catch (error) {
      console.log(error)
      res.json('Invalid productID').status(200)
    }
  })
  route.get(
    '/relatedProducts',
    jwtCheck,
    async (req: Request, res: Response) => {
      const { productId } = req.query
      try {
        const result = await query('getRelatedProducts', [productId])
        res.json(result).status(200)
      } catch (error) {
        console.log(error)
        res.json('Invalid productID').status(200)
      }
    }
  )
}
