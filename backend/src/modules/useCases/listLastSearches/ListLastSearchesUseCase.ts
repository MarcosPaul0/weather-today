import { IHistoricRepository } from '../../repositories/IHistoricRepository'

export class ListLastSearchesUseCase {
  constructor(private historicRepository: IHistoricRepository) {}

  async execute(city: string) {
    const lastSearches = await this.historicRepository.listLastSearches()
    
    return lastSearches
  }
}