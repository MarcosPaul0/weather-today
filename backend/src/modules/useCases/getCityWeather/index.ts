import { HistoricRepositoryPostgres } from '../../repositories/implementations/HistoricRepositoryPostgres'

import { GetCityWeatherController } from './GetCityWeatherController'
import { GetCityWeatherUseCase } from './GetCityWeatherUseCase'

const historicRepository = new HistoricRepositoryPostgres()

const getCityWeatherUseCase = new GetCityWeatherUseCase(historicRepository)
export const getCityWeatherController = new GetCityWeatherController(getCityWeatherUseCase)