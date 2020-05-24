import { Router, Request, Response } from 'express'
import query from '../../services/db'
const route = Router()
import Logger from '../../loaders/logger' // TODO consider using DI
import { getProducts } from '../../services/productList'

export default (app: Router) => {
  app.use('/users', route)

  route.get('/me', (req: Request, res: Response) => {
    Logger.info('hi')

    return res
      .json({
        message: 'Hello Api'
      })
      .status(200)
  })

  route.get('/artist', async (req: Request, res: Response) => {
    const { id } = req.query
    const artist = await query('getArtist', [id])
    const productList = await query('getArtistProducts', [id])
    const products = await getProducts(productList.data)
    artist.data[0].products = products
    return res.json(artist).status(200)
  })

  route.get('/catalogue', async (req: Request, res: Response) => {
    const catalogue = await query('catalogue', [])
    return res.json(catalogue).status(200)
  })
}
