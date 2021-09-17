import { HistoricRepositoryPostgres } from '../../repositories/implementations/HistoricRepositoryPostgres'

import { ListMostSearchedController } from './ListMostSearchedController'
import { ListMostSearchedUseCase } from './ListMostSearchedUseCase'

const historicRepository = new HistoricRepositoryPostgres()

const listMostSearchedUseCase = new ListMostSearchedUseCase(historicRepository)
export const listMostSearchedController = new ListMostSearchedController(listMostSearchedUseCase)