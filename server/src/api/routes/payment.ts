import { Router, Request, Response } from 'express'
const route = Router()

import query from '../../loaders/db'
import { makePayment } from '../../services/payment'

export default (app: Router) => {
  app.use('/payment', route)

  route.post('/', async (req: Request, res: Response) => {
    const result = await makePayment()
    res.json(result)
  })

  route.post('/confirmPayment', async (req: Request, res: Response) => {
    console.log(req)
    res.json('success')
  })
}
