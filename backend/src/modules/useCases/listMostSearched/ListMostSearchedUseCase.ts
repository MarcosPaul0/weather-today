import { IHistoricRepository } from '../../repositories/IHistoricRepository';

export class ListMostSearchedUseCase {
  constructor(private historicRepository: IHistoricRepository) {}

  execute() {
    const mostSearched = this.historicRepository.listMostSearched()

    return mostSearched
  }
}