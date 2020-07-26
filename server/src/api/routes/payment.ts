import { Router, Request, Response } from 'express'
const route = Router()

import { makePayment } from '../../services/payment'
import { jwtCheck } from '../middlewares'
export default (app: Router) => {
  app.use('/payment', route)

  route.post('/', jwtCheck, async (req: Request, res: Response) => {
    const result = await makePayment()
    res.json(result)
  })

  route.post(
    '/confirmPayment',
    jwtCheck,
    async (req: Request, res: Response) => {
      res.json('success')
    }
  )
}
