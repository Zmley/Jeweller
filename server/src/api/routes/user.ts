import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../loaders/db'
import Logger from '../../loaders/logger' // TODO consider using DI

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
    console.log(artist)
    return res.json(artist.data.shift()).status(200)
  })
}
