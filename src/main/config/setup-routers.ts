import { Express, Router } from 'express'
import { createOrganizationRouter } from '../routers'

export const setupRouter = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  createOrganizationRouter(router)
}