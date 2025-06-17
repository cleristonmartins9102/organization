import express, { json, Express } from 'express'
import { setupRouter } from './setup-routers'
import cors from 'cors'

export const createApp = (): Express => {
  const app = express()
  app.use(cors())
  app.use(json())
  setupRouter(app)
  return app
}