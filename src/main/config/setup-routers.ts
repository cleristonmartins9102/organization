import { Express, Router } from 'express'
import { getCoordenatesByZipcodeRoter } from '../routers/get-coordenates-by-zipcode-router'
import { getAutoCompleteRouter } from '../routers/get-autocomplete-router'

export const setupRouter = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  getCoordenatesByZipcodeRoter(router)
  getAutoCompleteRouter(router)
}