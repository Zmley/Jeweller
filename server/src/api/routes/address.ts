import { Router, Request, Response } from 'express'
const route = Router()
import { Address } from '../../models'
import query from '../../services/db'
import { jwtCheck } from '../middlewares'
export default (app: Router) => {
  app.use('/address', route)

  route.put('/', jwtCheck, async (req: Request, res: Response) => {
    const address: Address = req.body
    query(`newAddress`, [
      address.name,
      address.address,
      address.postcode,
      address.phone
    ])

    res.json(address)
  })
}
