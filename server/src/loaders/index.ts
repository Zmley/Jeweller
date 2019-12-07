import expressLoader from './express'
import Logger from './logger'

export default async ({ expressApp }: any) => {
  expressLoader({ app: expressApp })
  Logger.info('✌️ Express loaded')
}
