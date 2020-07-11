import { Router, Request, Response } from 'express'
import query from '../../services/db'
import jwtDecode from 'jwt-decode'
const route = Router()

export const getUserInfo = (req: any, res: any, next: any) => {
  console.log(req)
  next()
}
