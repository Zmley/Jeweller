import dotenv from 'dotenv'
import fs from 'fs'

// Set the NODE_ENV to 'dev' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

const envFound = dotenv.config()
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' })
} else {
  dotenv.config({ path: '.env.example' }) // you can delete this after you create your own .env file!
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT || '8080', 10),

  /**
   * API configs
   */
  api: {
    prefix: '/api'
  },

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'info'
  },

  test: {
    sessionSecret: process.env['SESSION_SECRET']
  },

  dev: process.env.NODE_ENV === 'dev'
}
