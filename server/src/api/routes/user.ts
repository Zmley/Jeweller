import { Router, Request, Response } from 'express'
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
}
