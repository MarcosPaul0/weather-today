import { IHistoricRepository } from '../../repositories/IHistoricRepository'

export class GetCityWeatherUseCase {
  constructor(
    public historicRepository: IHistoricRepository,
  ) {}

  async registerSearch(city: string) {
    const cityInHistory = await this.historicRepository.findByCity(city)
        
    if(!cityInHistory) {
      this.historicRepository.registerSearch(city)
    } else {
      this.historicRepository.updateCounter(city)
    }
  }

  async execute(city: string) {
    await this.registerSearch(city)
  }
}