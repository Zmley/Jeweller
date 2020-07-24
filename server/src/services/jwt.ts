import { Request } from 'express'

export const decode = (req: Request) => {
  const jwtDecode = require('jwt-decode')
  return jwtDecode(req.headers.authorization)
}
