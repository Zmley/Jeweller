import { Router, Request, Response } from 'express'
import query from '../../services/db'
import jwtDecode from 'jwt-decode'
import jwt from 'express-jwt'
import jwks from 'jwks-rsa'
const route = Router()
export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-r5ac2oa6.auth0.com/.well-known/jwks.json'
  }),
  audience: 'town-dev',
  issuer: 'https://dev-r5ac2oa6.auth0.com/',
  algorithms: ['RS256']
})

export const getUserInfo = (req: any, res: any, next: any) => {
  next()
}
