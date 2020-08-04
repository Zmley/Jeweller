import { Router, Request, Response } from 'express'
import query from '../../services/db'
const route = Router()
import Logger from '../../loaders/logger' // TODO consider using DI
import { getProducts } from '../../services/productList'
import { getUserInfo } from '../middlewares'
import { decode } from '../../services/jwt'
import { jwtCheck } from '../middlewares'
export default (app: Router) => {
  app.use('/users', route)

  route.get('/me', getUserInfo, (req: Request, res: Response) => {
    Logger.info('hi')

    return res
      .json({
        message: 'Hello Api'
      })
      .status(200)
  })

  route.get('/artist', jwtCheck, async (req: Request, res: Response) => {
    const { id } = req.query
    const artist = await query('getArtist', [id])
    const productList = await query('getArtistProducts', [id])
    const products = await getProducts(productList.data)
    artist.data[0].products = products
    return res.json(artist).status(200)
  })
  route.post('/artistInfo', jwtCheck, async (req: Request, res: Response) => {
    const { id, description, backgroundImageURL } = req.body
    const userAccount: any = decode(req)
    console.log(description)
    console.log(backgroundImageURL)
    const result = await query('artistInfo', [id])
    return res.json(result).status(200)
  })

  route.get('/catalogue', async (req: Request, res: Response) => {
    const catalogue = await query('catalogue', [])
    return res.json(catalogue).status(200)
  })

  route.patch('/follow', jwtCheck, async (req: any, res: Response) => {
    const { artistID } = req.body.data
    const { sub } = req.user
    const catalogue = await query('follow', [sub, artistID])
    return res.json(catalogue).status(200)
  })

  route.patch('/unfollow', jwtCheck, async (req: any, res: Response) => {
    const { artistID } = req.body.data
    const { sub } = req.user
    const catalogue = await query('unfollow', [sub, artistID])
    return res.json(catalogue).status(200)
  })

  route.get('/unreadevents', jwtCheck, async (req: any, res: Response) => {
    const { sub } = req.user
    const events = await query('getUnreadEvents', [sub])
    return res.json(events).status(200)
  })

  route.patch('/readall', jwtCheck, async (req: any, res: Response) => {
    const { sub } = req.user
    const catalogue = await query('readall', [sub])
    return res.json(catalogue).status(200)
  })
}
