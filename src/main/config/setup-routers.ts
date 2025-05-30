import { Express, Router } from 'express'
import { createOrganizationRouter, createCompanyRouter } from '../routers'

export const setupRouter = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  createOrganizationRouter(router)
  createCompanyRouter(router)
}