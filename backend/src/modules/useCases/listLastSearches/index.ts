import { HistoricRepositoryPostgres } from '../../repositories/implementations/HistoricRepositoryPostgres'

import { ListLastSearchesController } from './ListLastSearchesController'
import { ListLastSearchesUseCase } from './ListLastSearchesUseCase'

const historicRepository = new HistoricRepositoryPostgres()

const listLastSearchesUseCase = new ListLastSearchesUseCase(historicRepository)
export const listLastSearchesController = new ListLastSearchesController(listLastSearchesUseCase)