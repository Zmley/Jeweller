import config from './config'
import express from 'express'
import Logger from './loaders/logger'

async function startServer() {
  const app = express()

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   */
  await require('./loaders').default({ expressApp: app })
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    )
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
  })
  app.listen(config.port, (err: any) => {
    if (err) {
      Logger.error(err)
      process.exit(1)
      return
    }

    Logger.info(`
            ################################################
            🛡️  Server listening on port: ${config.port} env: ${process.env.NODE_ENV} 🛡️
            ################################################
          `)
  })

  return app
}

export default startServer()
