import { Router } from 'express'

export const router = Router()

import { getCityWeatherController } from '../modules/useCases/getCityWeather/'
import { listLastSearchesController } from '../modules/useCases/listLastSearches'
import { listMostSearchedController } from '../modules/useCases/listMostSearched'

router.get('/mostSearched', (req, res) => {
  return listMostSearchedController.handle(req, res)
})

router.get('/lastSearches', (req, res) => {
  return listLastSearchesController.handle(req, res)
})

router.post('/weather', (req, res) => {
  return getCityWeatherController.handle(req, res)
})