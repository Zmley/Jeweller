import { Request } from 'express'
import jwtDecode from 'jwt-decode'
export const decode = (req: Request) => {
  return jwtDecode(req.headers.authorization)
}
