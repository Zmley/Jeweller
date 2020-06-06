import express from 'express'
import { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import errorHandler from 'errorhandler'
import cors from 'cors'
import routes from '../api'
import config from '../config'
export default async ({ app }: { app: express.Application }) => {
  // Useful if you"re behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy')
  app.use(config.jwtCheck)
  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors())

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  if (config.dev) {
    // only use in development
    app.use(errorHandler())
  }

  // Load API routes
  app.use(config.api.prefix, routes())

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err: any = new Error('Not Found')
    err['status'] = 404
    next(err)
  })

  // error handlers
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end()
    }
    return next(err)
  })

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message
      }
    })
  })
}
