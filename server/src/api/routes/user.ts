import { Router, Request, Response } from 'express'
import query from '../../loaders/db'
const route = Router()
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
  route.get('/catalogue', async (req: Request, res: Response) => {
    const catalogue = await query('catalogue', [])
    return res.json(catalogue).status(200)
  })
}
