import { Router, Request, Response } from 'express'
const route = Router()
import { Address } from '../../models'
import query from '../../services/db'
import { add } from 'winston'

export default (app: Router) => {
  app.use('/address', route)

  route.put('/', async (req: Request, res: Response) => {
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
